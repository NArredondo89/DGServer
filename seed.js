const { Course } = require('./Models')
const { Layout } = require('./Models')
const { Hole } = require('./Models')



// Course.deleteMany({}, function (error,deletedcourses){
//   if(error){
//     return console.log(error);
//   }
//   Course.insertMany(
//     [
//   {
//   name: "Chabot Park",
//   condition: "Good Condition",
//   location: "San Leandro, Ca",
//   LocationUrl: "https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/url-https%3A%2F%2Fd1q6yb84lp43gi.cloudfront.net%2Fimages%2Fbasket-map-marker-24h.png(-122.12962571629899,37.73097437094054)/-122.12962571629899,37.73097437094054,12/370x300?access_token=pk.eyJ1IjoidWRpc2MiLCJhIjoiY2thcGdzaHZiMGFnMzJzcDY0b2c5ZnBjcyJ9.0WObLPwK-Hij3ygk1vCEzg",
//   holes: 18,
//   services: "Dog Friendly - Cat Friendly",
//   established: 1988,
//   property: "Mixed Use, Public Park",
//   tees: "Dirt",
//   availability: "Year Round - 7am to 9pm",
//   announcements: "Double's tournament on Monday and Thursday night at 6:00pm",
//   weeklyAnnouncements: "Saturday Handicap weekly (8am-4pm) $5 Open for everyone to play - Road and Beyond OB-grass playes hazard 6, 7, 15, 16 - 9 plays as an island(logsOB) - mando_L 8, 13, 17 ",
//   }],
//   function (error, createdCourses){
//     if(error){
//       return console.log(error);
//     }
//     console.log("===== Courses seed Complete =====");
//     console.log(createdCourses);
//   }
// );
// });




// Layout.deleteMany({}, function (error,deletedLayout){
//     if(error){
//       return console.log(error);
//     }
//     Layout.insertMany(
//       [
//     {
//       tite : "White flags/Orange flags",
//       totalHoles: 18,
//       totalPar: 54,
//       totalFeet: 5249
//     }],
//       function (error, createdLayout){
//         if(error){
//           return console.log(error);
//         }
//         console.log("===== Layout seed Complete =====");
//         console.log(createdLayout);
//       }
//     );
//     });



// Hole.deleteMany({}, function (error,deletedLayout){
//   if(error){
//     return console.log(error);
//   }
//   Hole.insertMany(
//     [
//   {
//     hole : 1,
//     par: 3,
//     feet: 253,
//     mandos: "Mando left of the arrow",
//     outOfBounds: "",
//     hazzards: "",
//   }],
//   function (error, createdLayout){
//     if(error){
//       return console.log(error);
//     }
//     console.log("===== Hole Seed Complete =====");
//     console.log(createdLayout);
//   }
// );
// });


