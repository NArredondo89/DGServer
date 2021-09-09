const { Course } = require('./Models')
const { Layout } = require('./Models')
const { Hole } = require('./Models')
const { User } = require('./Models')
const { Review } = require('./Models')



Course.deleteMany({}, function (error,deletedcourses){
  if(error){
    return console.log(error);
  }
  Course.insertMany(
    [
  {
  name: "Chabot Park",
  condition: "Good Condition",
  location: "San Leandro, Ca",
  LocationUrl: "https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/url-https%3A%2F%2Fd1q6yb84lp43gi.cloudfront.net%2Fimages%2Fbasket-map-marker-24h.png(-122.12962571629899,37.73097437094054)/-122.12962571629899,37.73097437094054,12/370x300?access_token=pk.eyJ1IjoidWRpc2MiLCJhIjoiY2thcGdzaHZiMGFnMzJzcDY0b2c5ZnBjcyJ9.0WObLPwK-Hij3ygk1vCEzg",
  holes: 18,
  services: "Dog Friendly - Cat Friendly",
  established: 1988,
  property: "Mixed Use, Public Park",
  tees: "Dirt",
  availability: "Year Round - 7am to 9pm",
  announcements: "Double's tournament on Monday and Thursday night at 6:00pm",
  weeklyAnnouncements: "Saturday Handicap weekly (8am-4pm) $5 Open for everyone to play - Road and Beyond OB-grass playes hazard 6, 7, 15, 16 - 9 plays as an island(logsOB) - mando_L 8, 13, 17 ",
  }],
  function (error, createdCourses){
    if(error){
      return console.log(error);
    }
    console.log("===== Courses seed Complete =====");
    console.log(createdCourses);
  }
);
});




Layout.deleteMany({}, function (error,deletedLayout){
    if(error){
      return console.log(error);
    }
    Layout.insertMany(
      [
    {
      tite : "White flags/Orange flags",
      totalHoles: 18,
      totalPar: 54,
      totalFeet: 5249,
      Hole: ["6138e67bef28aebac0777fbe", "6138e67bef28aebac0777fbf", "6138e67bef28aebac0777fc0", "6138e67bef28aebac0777fc1", "6138e67bef28aebac0777fc2", "6138e67bef28aebac0777fc3","6138e67bef28aebac0777fc4","6138e67bef28aebac0777fc5","6138e67bef28aebac0777fc6","6138e67bef28aebac0777fc7","6138e67bef28aebac0777fc8","6138e67bef28aebac0777fc9","6138e67bef28aebac0777fca","6138e67bef28aebac0777fcb","6138e67bef28aebac0777fcc","6138e67bef28aebac0777fcd","6138e67bef28aebac0777fce","6138e67bef28aebac0777fcf"]

    }], 
      function (error, createdLayout){
        if(error){
          return console.log(error);
        }
        console.log("===== Layout seed Complete =====");
        console.log(createdLayout);
      }
    );
    });



Hole.deleteMany({}, function (error,deletedLayout){
  if(error){
    return console.log(error);
  }
  Hole.insertMany(
    [
  {
    hole : 1,
    par: 3,
    feet: 253,
    mandos: "Mando left of the arrow",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 2,
    par: 3,
    feet: 291,
    mandos: "",
    outOfBounds: "Must make it over fence to clear out of bounds. Drop zone is marked in red flags",
    hazzards: "",
  },
  {
    hole : 3,
    par: 3,
    feet: 200,
    mandos: "",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 4,
    par: 3,
    feet: 230,
    mandos: "",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 5,
    par: 3,
    feet: 305,
    mandos: "Mando left of the Arrow",
    outOfBounds: "Road plays as water, Drop zone is near flag pole",
    hazzards: "",
  },
  {
    hole : 6,
    par: 3,
    feet: 262,
    mandos: "Black Ace pays out $5",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 7,
    par: 3,
    feet: 217,
    mandos: "Star Pad",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 8,
    par: 3,
    feet: 269,
    mandos: "Mando left of the Arrow",
    outOfBounds: "The river is out of bound, Berkley rules.",
    hazzards: "",
  },
  {
    hole : 9,
    par: 3,
    feet: 318,
    mandos: "Must hit island",
    outOfBounds: "Everything out side of the square aurond the basket. DZ is marked with Red Flags ",
    hazzards: "If you shoot from DZ and go out of bounds again it plays as a hazzard.",
  },
  {
    hole : 10,
    par: 3,
    feet: 285,
    mandos: "",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 11,
    par: 3,
    feet: 367,
    mandos: "Double manditory between two trees",
    outOfBounds: "Must make it over the fence. DZ is marked with red flags- other side of the fence",
    hazzards: "",
  },
  {
    hole : 12,
    par: 3,
    feet: 223,
    mandos: "Mando left of the tree",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 13,
    par: 3,
    feet: 292,
    mandos: "Mando left of the container",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 14,
    par: 3,
    feet: 417,
    mandos: "Mando left of the tree",
    outOfBounds: "Road plays OB",
    hazzards: "",
  },
  {
    hole : 15,
    par: 3,
    feet: 282,
    mandos: "",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 16,
    par: 3,
    feet: 256,
    mandos: "Mando down tree tunnel",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 17,
    par: 3,
    feet: 420,
    mandos: "Mando left of the arrow",
    outOfBounds: "",
    hazzards: "",
  },
  {
    hole : 18,
    par: 3,
    feet: 361,
    mandos: "",
    outOfBounds: "",
    hazzards: "",
  }
],
  function (error, createdLayout){
    if(error){
      return console.log(error);
    }
    console.log("===== Hole Seed Complete =====");
    console.log(createdLayout);
  }
);
});


User.deleteMany({}, function (error,deletedUser){
    if(error){
      return console.log(error);
    }
    User.insertMany(
      [
    {
      username : "nicholishous",
      email: "Nicka721@gmail.com",
      password: "password",

    }], 
      function (error, createdUser){
        if(error){
          return console.log(error);
        }
        console.log("===== User seed Complete =====");
        console.log(createdUser);
      }
    );
    });



  Review.deleteMany({}, function (error,deletedReview){
    if(error){
      return console.log(error);
    }
    Review.insertMany(
      [
    {
    rating: 5, 
    content:"This was my favorite course", 
    User: "6138f501e427e4ad96af9da5",
  }], 
  function (error, createdReview){
    if(error){
      return console.log(error);
    }
    console.log("===== Review seed Complete =====");
    console.log(createdReview);
  }
);
});

