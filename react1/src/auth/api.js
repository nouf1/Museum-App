import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
// Get All MuseumList
export const getAllMuseumList = function() {
  return axios.get(`${apiUrl}/api/museums`);
}

// Delete Museum By ID
export const deleteMuseumByID = function(id) {

  return axios.delete(`${apiUrl}/api/museums/${id}`);
}

// Update Museum By ID
// export const updateMuseumByID = (id) => {
//   return axios.patch(`${apiUrl}/museums/${id}`)
// }
export const museumUpdateByID = (user, museumUpdate, id) => {
  console.log("user.token, museumUpdate, id");
  console.log(user.token, museumUpdate, id);
  
  return axios({
      url: apiUrl + `/api/museums/${id}`,
      method: 'PATCH',
      headers: {
          'Authorization': `Bearer ${user.token}`
      },
      data: {
        museum: museumUpdate
      }
  })
}

export const show = (id) => {
  return axios({
      method: 'GET',
      url: apiUrl + `/api/museums/${id}`
  })
}



export const create = (user, newMuseum) => {
  console.log(user);
  console.log(newMuseum);
  
  return axios({
      method: 'POST',
      url: apiUrl + '/api/museums',
      headers: {
          'Authorization': `Bearer ${user.token}`
      },
      data: {
        musuem: newMuseum
          
      }
  })
}




