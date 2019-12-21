const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Museum = require('./app/models/museum').Museum;
const db = require('./config/db')
// const mongoURI = 'mongodb://localhost/mongoRelationships';
mongoose.connect(db, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established')
});

const mm = [{
    name:"National Museum",
    img:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/10/18/1804951-1604522628.jpg?itok=2XNSte9d",
    description:"The National Museum of Saudi Arabia is a major national museum in Saudi Arabia. Established in 1999, it is part of the King Abdulaziz Historical Centre in Riyadh.",
    workTime:"Weekdays	Schools	Public Visits / Sunday	8:00-12:00 school boys	12:00 - 2:00 / Monday	8:00-12:00 school girls	12:00 - 8:00 / Tuesday	8:00-12:00 school boys	12:00 - 8:00 / Wednesday  8:00-12:00 school girls	12:00 - 8:00 / Thursday	8:00-12:00 school boys	12:00 - 8:00 / Friday	4:00 PM - 8:00 PM / Saturday 8:00 AM - 8:00 PM ",
    location:"https://goo.gl/maps/ACuTg68toNCsCWJo7",
    events:[
        {
                title:'The Human And Universe',
                startDate :'8AM',
                endDate:'10PM',
                img:'https://wearehumanangels.org/content/images/2019/10/silhouette-of-man-in-the-universe-galaxy-red.jpg'  
        },
        {
            title:'Arab Kingdoms',
            startDate :'8AM',
            endDate:'10PM',
            img:'https://images.unsplash.com/photo-1554322662-abedea4ed292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
        },
        {
        title:'The pre-Islamic Era',
        startDate :'8AM',
        endDate:'10PM',
        img:'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'  
    },
    {
    title:'The Prophetic Mission',
    startDate :'8AM',
    endDate:'10PM',
    img:'https://images.unsplash.com/photo-1552481280-97a6383d9f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    },
    {
    title:'Islam and the Arabian Peninsula',
    startDate :'8AM',
    endDate:'10PM',
    img:'https://images.unsplash.com/photo-1526677504211-233c8477c61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'  
     },
     {
    title:'First And Second Saudi',
    startDate :'8AM',
    endDate:'10PM',
    img:'photo-1461237439866-5a557710c921 1'
     },
     {
    title:'Unification of the Kingdom',
    startDate :'8AM',
    endDate:'10PM',
    img:'https://upload.wikimedia.org/wikipedia/commons/a/a3/Ibn_Saud.png'
     },
     {
    title:'Hajj and the Two Holy Mosques',
    startDate :'8AM',
    endDate:'10PM',
    img:'https://news.ufl.edu/media/newsufledu/images/2018/08/Hajj_08-20-18.jpg'
     }
    ]
},
{
    name:"Saqr Aljazeera Aviation Museum",
    img:"https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/20/06/2017/5551826-860013010.jpg",
    description:"The National Museum of Saudi Arabia is a major national museum in Saudi Arabia. Established in 1999, it is part of the King Abdulaziz Historical Centre in Riyadh.",
    workTime:" Ticket price (Adult 10.RS/Child 5.RS)  / Weekdays Schools	Public Visits / Sunday	8:00-12:00 school boys	12:00 - 2:00 / Monday	8:00-12:00 school girls	12:00 - 8:00 / Tuesday	8:00-12:00 school boys	12:00 - 8:00 / Wednesday  8:00-12:00 school girls	12:00 - 8:00 / Thursday	8:00-12:00 school boys	12:00 - 8:00 / Friday	4:00 PM - 8:00 PM / Saturday 8:00 AM - 8:00 PM ",
    location:"https://goo.gl/maps/MNrKd5tubvChjQB78",
    events:[
        {
            title:'c-130 film - 5.RS',
            startDate :'Weekday',
            endDate:'Weekend',
            img:'https://media.defense.gov/2014/Aug/26/2000929445/780/780/0/140825-F-UE958-034.JPG'  
        },
        {
            title:'dream film (Saudi Hawks) - 10.RS',
            startDate :'Weekday',
            endDate:'Weekend',
            img:'https://www.almowaten.net/wp-content/uploads/2018/09/WhatsApp-Image-2018-09-23-at-9.48.29-PM-800x450.jpeg'  
        },
        {
            title:'Fly With F15 - 50.SR',
            startDate :'Weekday',
            endDate:'Weekend',
            img:'https://img.intelligent-aerospace.com/files/base/ebm/ias/image/2019/01/content_dam_avi_online_articles_2015_october_f15_1.png?auto=format&w=500'  
        },
        {
            title:'Fly With Tybpoon - 50.SR',
            startDate :'Weekday',
            endDate:'Weekend',
            img:'https://3.bp.blogspot.com/-UvmSdG0cISI/XAOOvpli-JI/AAAAAAAACCQ/yopWUQwye4cwGBnEa7JaHcMORCGro2cJgCLcBGAs/s640/eurofighter_typhoon_new_picture_2017.jpg'  
        },
        {
            title:'Fly With 737 - 200.SR',
            startDate :'Weekday',
            endDate:'Weekend',
            img:'https://www.alittihad.ae/assets/images/Articles/750x425/2019/4/2019425243373019.jpg'  
        }
    ]
},
{
    name:"Al Masmak Palace Museum",
    img:"https://live.staticflickr.com/5459/10111357835_8149667613_b.jpg",
    description:"Qaṣr al-Maṣmak is a clay and mud-brick fort, with four watchtowers and thick walls, founded on stone blocks, lying in the center of Riyadh, in the old quarters. This building played a major part in the kingdom's history, as it was here that the recapture of Riyadh, led by Ibn Saud, occurred on 14 January 1902",
    workTime:"Sun, Tue, Thu	Men / Mon, Weds	Families / Fri Families (16:00-19:30) / Sat	Men (09:00 - 12:00)	Families(16:00-19:30)",
    location: "https://goo.gl/maps/k6ur3widatHnVMnE9",
    events:[
        {
            title:'The palace gate',
            startDate :'ًall Worktime',
            endDate:'Midnight',
            img:'https://pbs.twimg.com/media/D01wlx9XgAAGXt9.jpg:large'  
    },
    {
        title:'Al-Diwaniyah',
        startDate :'all Worktime',
        endDate:'ُMidnight',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQ0ZKRNPIj7V8SDZumYSrJgB5muVUf0dYBMglpu4stoJrVE6t&s'  
    },
    {
        title:'The mosque',
        startDate :'all Worktime',
        endDate:'Midnight',
        img:'https://pbs.twimg.com/media/CqbNB4nXYAErVqE.jpg'  
    },
    {
        title:'The Well',
        startDate :'all Worktime',
        endDate:'Midnight',
        img:'https://live.staticflickr.com/3156/2597556974_a27d321bd2_b.jpg'  
    },
    {
        title:'The Towers',
        startDate :'all Worktime',
        endDate:'Midnight',
        img:'https://pbs.twimg.com/media/Dwco_xeWsAI6Qmv.jpg'  
    }
    ]
},
{
    name:"Aledeib Museum",
    img:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiH75j64rfmAhUixYUKHUOPBHkQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Faledeibmuseum%2Fstatus%2F950412685174280192&psig=AOvVaw0a00Lo5cSqbxdVs0S-gXca&ust=1576503272843540",
    description:"hi again",
    workTime:"Satrday-Thursday 9AM–5PM / Friday Closed",
    location:"https://pbs.twimg.com/media/DGiB8iUXsAAq_aT.jpg",
    events:[
        {
            title:'Old TVs and radios',
            startDate :'9AM',
            endDate:'5PM',
            img:'https://pbs.twimg.com/media/C6n1IWvWgAAdYWw.jpg'  
        },
        {
            title:'Telephone devices',
            startDate :'9AM',
            endDate:'5PM',
            img:'https://pbs.twimg.com/media/DTCK3yhW4AM4IzM.jpg'  
        },
        {
            title:'Old food products',
            startDate :'9AM',
            endDate:'5PM',
            img:'http://www.alsharq.net.sa/wp-content/uploads/2019/02/01-114.jpg'  
        },
        {
            title:'Old Cars',
            startDate :'9AM',
            endDate:'5PM',
            img:'http://www.alriyadh.com/media/thumb/da/83/1000_9d5fff29b6.jpg'  
        }
    ]
},
{
    name:"Al Faisal Arabic and Islamic Arts",
    img:"https://www.adwaalwatan.com/wp-content/uploads/2017/06/IMG_9600.jpg",
    description:"The mission of the museum is to increase the public’s awareness of the inspirational aspects of Islamic Civilization and Art, as well as to encourage Muslim youths’ engagement with their history. The collection contains over 200 objects, representing various Muslim communities over the previous centuries. Chronologically, the collection begins from the 2nd century AH and extends until the 14th century AH.",
    workTime:"Satrday-Thursday 9AM–5PM / Friday Closed",
    location:"https://goo.gl/maps/sV3eX3QCv1frNCHR9",
    events:[
        {
            title:'Islamic Quran',
            startDate :'9AM',
            endDate:'5PM',
            img:' https://i.middle-east-online.com/styles/home_special_coverage_1920xauto/s3/2019-02/9887bc1b-7269-49d4-a45b-0f2ff4781275.jpg?nbAPB952oO6Vzsfr.tKV48uJgh9uYsQg&itok=MzVcRy4P'
        },
        {
            title:'Antiques',
            startDate :'9AM',
            endDate:'5PM',
            img:'https://www.acm.org.sg/-/media/acm/acm2017/images/gallery/islamic-art/islamic-art.jpg?as=1&mw=1500'
        },
        {
            title:'Wahaj Gallery of rare manuscripts',
            startDate :'9AM',
            endDate:'5PM',
            img:'http://repository.mysalaam.com/images/iep/galleries/images/original/20190221113638398721433.jpg'
        }
    ]
},
{
    name:"Science and Technology‘s History in Islam",
    img:"http://museum.kaust.edu.sa/images/home-slide4.jpg",
    description:"hi",
    workTime:"Sunday-Thursday 9AM–3PM / Satrday-Friday Closed",
    location:"https://goo.gl/maps/ysZVvatwD1naVUcWA",
    events:[
        {
            title:'Elephant water clock',
            startDate :'9AM',
            endDate:'3PM',
            img:'http://scientific.ma/wp-content/uploads/2015/06/technology-2.jpg'  
        },
        {
            title:'of the water castle',
            startDate :'9AM',
            endDate:'3PM',
            img:'http://museum.kaust.edu.sa/images/technology-3.jpg'
        },
        {
            title:'Miniature models of Islamic architecture',
            startDate :'9AM',
            endDate:'3PM',
            img:'http://museum.kaust.edu.sa/images/islamic-science-7.jpg'
        },
        {
            title:'Water lifting machines',
            startDate :'9AM',
            endDate:'3PM',
            img:'https://pbs.twimg.com/media/DyjlBXeXQAAcXPi.jpg'
        },
        {
            title:'Exploration map',
            startDate :'9AM',
            endDate:'3PM',
            img:'https://www.emt-events.com/UploadFolder/maincontents/maincontents_GalleryMainImage___cda3c7f5-1cc6-4d15-8ab0-edbd270638df_20190115034701893.jpg'
        },
        {
            title:'Engineering designs',
            startDate :'9AM',
            endDate:'3PM',
            img:'https://www.almrsal.com/wp-content/uploads/2016/10/%D8%B3%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9-%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9.jpg'
        }
    ]
},
{
    name:"Al-Turaif District",
    img:"https://vid.alarabiya.net/images/2019/09/04/8eaa826f-86ae-4e60-9903-a0ca7397e499/8eaa826f-86ae-4e60-9903-a0ca7397e499_16x9_1200x676.jpeg?format=jpeg&width=960",
    description:"Al-Turaif is a historic district located in Al-Dir'iyah north-west of Riyadh which is regarded as one of the important political and historical sites in Saudi Arabia represented the capital of Saudi dynasty, it was the original home of the Saudi royal family and the country's first capital, from 1744 to 1818.",
    workTime:"Sunday-Friday 9AM-10PM",
    location:"https://goo.gl/maps/Xuc1BuvVp7GV6VNx6",
    events:[
        {
            title:'Visitors portal',
            startDate:'9AM',
            endDate:'10PM',
            img:'https://pbs.twimg.com/media/DuT4w7nXQAAHCRt.jpg'
        },
        {
            title:'Sheikh Mohammed bin Abdul Wahab Bridge',
            startDate:'9AM',
            endDate:'10PM',
            img:'https://pbs.twimg.com/media/Dhf5HAXXcAE6VVA.jpg'
        },
        {
            title:'Salwa Palace',
            startDate:'9AM',
            endDate:'10PM',
            img:'https://mma.prnewswire.com/media/1026776/Diriyah.jpg?p=publish'
        },
        {
            title:'Diriyah museum',
            startDate:'9AM',
            endDate:'10PM',
            img:'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2018/11/29/1384966-921241991.jpg?itok=otUzC_8t'
        },
        {
            title:'Modhi House',
            startDate:'9AM',
            endDate:'10PM',
            img:'https://live.staticflickr.com/86/266275454_f4ba73d3a0_b.jpg'
        }
    ] 
},
{
    name:"Arabian Horse Museum",
    img:"https://live.staticflickr.com/1880/30805727218_3a90d4e09c_b.jpg",
    description:"King Abdul Aziz Arabian Horses Center is located at Dirab, it is an agricultural area near Al Riyadh from the south- west area about 35 km and the area of the center is around one million square meters, and the number of the horses in the center is estimated to be 236 and the registered owners are 5424 owner, the number of the registered horses till 24-11-2014 was 16900 horses",
    workTime:"Thursday 7:30AM–2:30PM / Satrday-Friday Closed",
    location:"https://goo.gl/maps/81YK9chPKMD6hobPA",
    events:[
        {
            title:'Championship Show 2019 4th International ECAHO "A" Show',
            startDate :'12 Dec - 10AM',
            endDate:'12 Dec - 9PM',
            img:'https://www.alsabbaq.com/uploads/posts/image/alsabbaq582829242572.jpg'
        },
        {
            title:'Championship Show 2019 4th International ECAHO "B" Show',
            startDate :'15 Dec - 1:30PM',
            endDate:'15 Dec - 9PM',
            img:'http://www.alriyadh.com/media/article/2015/12/18/img/328653256874.jpg'
        },
        {
            title:'Horses history',
            startDate :'10AM',
            endDate:'9PM',
            img:'https://pbs.twimg.com/media/Cia8ha2WkAASOkQ.jpg'
        }
    ]
}];
Museum.insertMany(mm, (err, museums)=>{
        if(err){
            console.log(err)
        }else{
            console.log(museums);
        }
    });