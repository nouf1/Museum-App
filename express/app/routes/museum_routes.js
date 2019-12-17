// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for museum
const Museum = require('../models/museum').Museum
const Event = require('../models/museum').Event
// pull in Mongoose model for event
// const Event = require("../models/event").Event;

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

/**
 * Action:      INDEX
 * Method:      GET 
 * URI:         /api/museums
 * Description: Get All Museums
 **/
router.get('/api/museums',  (req, res, next) => {
  
  // Option 1 get user's museums
  Museum.find()
    .then(museums => res.status(200).json({museums: museums}))
    .catch(next)
  
  // // Option 2 get user's museums
  // // must import User model and User model must have virtual for museums
  // User.findById(req.user.id) 
    // .populate('museums')
    // .then(user => res.status(200).json({ museums: user.museums }))
    // .catch(next)
})
/**
* Action:       SHOW
* Method:       GET
* URI:          /api/museums/5a7db6c74d55bc51bdf39793
* Description:  Get A Museum by Museum ID
*/
router.get('/api/museums/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Museum.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "museum" JSON
    .then((museum) => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      // requireOwnership(req, museum)
    
      res.status(200).json({ museum: museum.toObject() })
    })
    // if an error occurs, pass it to the handler
    .catch(next)
})
/**
 * Action:      CREATE
 * Method:      POST
 * URI:         /api/museums
 * Description: Create a new Museum
*/
router.post('/api/museums', requireToken, (req, res, next) => {
  // set owner of new museum to be current user
  console.log(req.user._id);
  console.log(req.user._id);
  
  req.body.musuem.owner = req.user._id

console.log(req.body.musuem);

  Museum.create(req.body.musuem)
    // respond to succesful `create` with status 201 and JSON of new "museum"
    .then((museum) => {
      res.status(201).json({ museum: museum.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})
/**
 * Action:      UPDATE
 * Method:      PATCH
* URI:          /api/museums/5a7db6c74d55bc51bdf39793
* Description:  Update A Musium by Museum ID
 */
router.patch('/api/museums/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  // delete req.body.museum.owner
  Museum.findById(req.params.id, (error, museum) => {
      if(!error){
        museum.update(req.body.museum, (error, updatedMuseum)=>{
          if(!error){
            res.status(204).end();
          } else {
            res.status(500).json(error);
          } 
        });
      } else {
        res.status(500).json(error);
      }
  });

  // Museum.findById(req.params.id)
  //   .then(handle404)
  //   .then((museum) => {
  //     // pass the `req` object and the Mongoose record to `requireOwnership`
  //     // it will throw an error if the current user isn't the owner
  //     // requireOwnership(req, museum)

  //     // pass the result of Mongoose's `.update` to the next `.then`
  //     req.body.museum._id = req.params.id;
  //     console.log("here I'm: ", req.body.museum)

  //     return museum.update(req.body.musuem)
  //   })
  //   // if that succeeded, return 204 and no JSON
  //   .then(() => res.status(204).end())
  //   // if an error occurs, pass it to the handler
  //   .catch(next)
})
/**
 * Action:      DESTROY
 * Method:      DELETE
* URI:          /api/museums/5a7db6c74d55bc51bdf39793
* Description: Delete A Musium by Museum ID
 */
router.delete('/api/museums/:id', (req, res, next) => {
  console.log("hello: ",req.params.id)

  Museum.findById(req.params.id)
    .then(handle404)
    .then(museum => {
      // throw an error if current user doesn't own `museum`
      // requireOwnership(req, museum)
      // delete the museum ONLY IF the above didn't throw
      museum.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})
/*────────────────*
 * Event Routes *
 *────────────────*/

/*****************************************************************
 * Action     : INDEX                                            *
 * Method     : GET                                              *
 * URI        : /api/museums/5a7db6c74d55bc51bdf39793/events *
 * Description: Get All events for an museum                  *
 *****************************************************************/
router.get("/api/museums/:id/events", (request, response) => {
  const
    museumId = request.params.id;

    Museum.findById(museumId)
    .then(museum => {
      if (museum) {
        // Pass the result of Mongoose's ".get" method to the next ".then"
        // Promise returned from response.json() is returned to the next ".then"
        const
          events = response.json({ events: museum.events });

        return events;
      } else {
        // If we could not find a document with the matching ID
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents"
          }
        });
      }
    })
    // If the showing succeeded, return 200 and no JSON
    .then(() => {
      response.status(200).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      response.status(500).json({ error: error });
    });
});

/*******************************************************************************************
 * Action     : SHOW                                                                       *
 * Method     : GET                                                                        *
 * URI        : /api/museums/5a7db6c74d55bc51bdf39793/events/22ftr54t8mu4xx78sww9r774r *
 * Description: Get a event from an museum by event ID and museum ID                 *
 *******************************************************************************************/
router.get("/api/museums/:id/events/:id", (request, response) => {
  const
    museumId = request.params.id,
    eventId = request.params.id;

    Museum.findById(museumId)
    .then(museum => {
      if (museum) {
        // Pass the result of Mongoose's ".get" method to the next ".then"
        // Promise returned from response.json() is returned to the next ".then"
        const
          event = response.json({ event: museum.events.id(eventId) });

        return event;
      } else {
        // If we could not find a document with the matching ID
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents"
          }
        });
      }
    })
    // If the showing succeeded, return 200 and no JSON
    .then(() => {
      response.status(200).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      response.status(500).json({ error: error });
    });
});

/*****************************************************************
 * Action     : CREATE                                           *
 * Method     : POST                                             *
 * URI        : /api/museums/66ftr54t8fu4rr78sww9r334r/events *
 * Description: Create a new event for an museum              *
 *****************************************************************/
router.post("/api/museums/:id/events", requireToken, (request, response) => {
  const
    museumId  = request.params.id,
    event    = request.body.event,
    newevent = new Event(event);
  // console.log(newevent);
  
  Museum.findById(museumId)
    // On a successful "create" action, respond with 201
    // HTTP status and the content of the new event
    .then(museum => {
      if (museum) {
        
        museum.events.push(newevent);
        console.log(museum.events);
        // ".markModified" might not be needed
        // museum.markModified("events");
        return museum.save();
      } else {
        // If we could not find a document with the matching ID
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents"
          }
        });
      }
    })
    // If the creation succeeded, return 200 and no JSON
    .then(() => {
      response.status(200).end();
    })
    // Catch any Errors that might occur
    .catch(error => {
      response.status(500).json({ error: error });
    });
});

/*******************************************************************************************
 * Action     : UPDATE                                                                     *
 * Method     : PATCH                                                                      *
 * URI        : /api/museums/66ftr54t8fu4rr78sww9r334r/events/22ftr54t8mu4xx78sww9r774r *
 * Description: Update a event from an museum by event ID and museum ID              *
 *******************************************************************************************/
router.patch("/api/museums/:id/events/:id", requireToken,  (request, response) => {
  const
    museumId  = request.params.museumId,
    eventId  = request.params.eventId,
    newevent = request.body.event;

  Museum.findById(museumId)
    .then(museum => {
      if (museum) {
        // Pass the result of Mongoose's ".patch" method to the next ".then"
        // Promise returned from updateOn() is returned to the next ".then"
        const
          currentevent = museum.events.id(eventId);

        currentevent.title = newevent.title;
        currentevent.startDate = newevent.startDate;
        currentevent.endDate = newevent.endDate;
        currentevent.img = newevent.img;
         // ".markModified" might not be needed
        museum.markModified("events");
        return museum.save();
      } else {
        // If we could not find a document with the matching ID
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents"
          }
        });
      }
    })
    // If the updating succeeded, return 204 and no JSON
    .then(() => {
      response.status(204).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      response.status(500).json({ error: error });
    });
});

/*******************************************************************************************
 * Action     : DESTROY                                                                    *
 * Method     : DELETE                                                                     *
 * URI        : /api/museums/66ftr54t8fu4rr78sww9r334r/events/22ftr54t8mu4xx78sww9r774r *
 * Description: Delete a event from an museum by event ID and museum ID              *
 *******************************************************************************************/
router.delete("/api/museums/:id/events/:id", requireToken, (request, response) => {
  const
    museumId = request.params.id,
    eventId = request.params.id;

  Museum.findById(museumId)
    .then(museum => {
      if (museum) {
        // Pass the result of Mongoose's ".delete" method to the next ".then"
        // Promise returned from remove() is returned to the next ".then"
        museum.events.id(eventId).remove();
        // ".markModified" might not be needed
        museum.markModified("events");
        return museum.save();
      } else {
        // If we could not find a document with the matching ID
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents"
          }
        });
      }
    })
    // If the deletion succeeded, return 204 and no JSON
    .then(() => {
      //
      response.status(204).end();
    })
    // Catch any errors that might occur
    .catch(error => {
      response.status(500).json({ error: error });
    });
});

/****************************** BOOKING ************************/


/**
* Action:       SHOW
* Method:       GET
* URI:          /api/booking/id
* Description:  Get A BookingMuseum by Museum ID
*/
router.get('/api/Booking/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Museum.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "museum" JSON
    .then((museum) => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      // requireOwnership(req, museum)
    
      res.status(200).json({ museum: museum.toObject() })
    })
    // if an error occurs, pass it to the handler
    .catch(next)
})
/**
 * Action:      CREATE
 * Method:      POST
 * URI:         /api/museums
 * Description: Create a new Booking Museum
*/
router.post('/api/Booking', requireToken, (req, res, next) => {
  // set owner of new museum to be current user
  console.log(req.user._id);
  console.log(req.user._id);
  
  req.body.musuem.owner = req.user._id

console.log(req.body.musuem);

  Museum.create(req.body.musuem)
    // respond to succesful `create` with status 201 and JSON of new "museum"
    .then((museum) => {
      res.status(201).json({ museum: museum.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})
/**
 * Action:      DESTROY
 * Method:      DELETE
* URI:          /api/museums/5a7db6c74d55bc51bdf39793
* Description: Delete A Booking Musium by Museum ID
 */
router.delete('/api/Booking/:id', (req, res, next) => {
  console.log("hello: ",req.params.id)

  Museum.findById(req.params.id)
    .then(handle404)
    .then(museum => {
      // throw an error if current user doesn't own `museum`
      // requireOwnership(req, museum)
      // delete the museum ONLY IF the above didn't throw
      museum.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})


module.exports = router