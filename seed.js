const { Course } = require("./Models");

const { Event } = require("./Models");

const { Hole } = require("./Models");

const { Layout } = require("./Models");

const { PlayDate } = require("./Models");

const { Review } = require("./Models");

const { Route } = require("./Models");

const { User } = require("./Models");

Course.deleteMany({}, function (error, deletedcourses) {
  if (error) {
    return console.log(error);
  }
  Course.insertMany(
    [
      {
        name: "Chabot Park",
        condition: "Good Condition",
        parkPhoto: "",
        location: "San Leandro, Ca",
        holes: 18,
        services: "Dog Friendly - Cat Friendly",
        established: 1988,
        property: "Mixed Use, Public Park",
        tees: "Dirt",
        availability: "Year Round - 7am to 9pm",
        targets: "Old School Baskets",
        layout: "61944d9294e421a31db55b0e",
      },
    ],
    function (error, createdCourses) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Courses seed Complete =====");
      console.log(createdCourses);
    }
  );
});

Layout.deleteMany({}, function (error, deletedLayout) {
  if (error) {
    return console.log(error);
  }
  Layout.insertMany(
    [
      {
        title: "White flags/Orange flags",
        totalHoles: 18,
        totalPar: 54,
        totalFeet: 5249,
        hole: [
          "6191c2ba0e7f8954570239af",
          "6191c2ba0e7f8954570239b0",
          "6191c2ba0e7f8954570239b1",
          "6191c2ba0e7f8954570239b2",
          "6191c2ba0e7f8954570239b3",
          "6191c2ba0e7f8954570239b4",
          "6191c2ba0e7f8954570239b5",
          "6191c2ba0e7f8954570239b6",
          "6191c2ba0e7f8954570239b7",
          "6191c2ba0e7f8954570239b8",
          "6191c2ba0e7f8954570239b9",
          "6191c2ba0e7f8954570239ba",
          "6191c2ba0e7f8954570239bb",
          "6191c2ba0e7f8954570239bc",
          "6191c2ba0e7f8954570239bd",
          "6191c2ba0e7f8954570239be",
          "6191c2ba0e7f8954570239bf",
        ],
      },
    ],
    function (error, createdLayout) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Layout seed Complete =====");
      console.log(createdLayout);
    }
  );
});

Hole.deleteMany({}, function (error, deletedLayout) {
  if (error) {
    return console.log(error);
  }
  Hole.insertMany(
    [
      {
        number: 1,
        par: 3,
        feet: 253,
        mandatory: "Mando left of the arrow",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/mHV0oDP.jpg",
      },
      {
        number: 2,
        par: 3,
        feet: 291,
        mandatory: "",
        outOfBounds:
          "Must make it over fence to clear out of bounds. Drop zone is marked in red flags",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/xg6V48R.jpg",
      },
      {
        number: 3,
        par: 3,
        feet: 200,
        mandatory: "",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/ZvMtckw.jpg",
      },
      {
        number: 4,
        par: 3,
        feet: 230,
        mandatory: "",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/JuTNmoQ.jpg",
      },
      {
        number: 5,
        par: 3,
        feet: 305,
        mandatory: "Mando left of the Arrow",
        outOfBounds: "Road plays as water, Drop zone is near flag pole",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/MuafM5M.jpg",
      },
      {
        number: 6,
        par: 3,
        feet: 262,
        mandatory: "Black Ace pays out $5",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/cAx91ns.jpg",
      },
      {
        number: 7,
        par: 3,
        feet: 217,
        mandatory: "Star Pad",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/q5GzUiw.jpg",
      },
      {
        number: 8,
        par: 3,
        feet: 269,
        mandatory: "Mando left of the Arrow",
        outOfBounds: "The river is out of bound, Berkley rules.",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/GE4jxWt.jpg",
      },
      {
        number: 9,
        par: 3,
        feet: 318,
        mandatory: "Must hit island",
        outOfBounds:
          "Everything out side of the square aurond the basket. DZ is marked with Red Flags ",
        hazzards:
          "If you shoot from DZ and go out of bounds again it plays as a hazzard.",
        dropzone: "",
        picture: "https://i.imgur.com/hxdHHwA.jpg",
      },
      {
        number: 10,
        par: 3,
        feet: 285,
        mandatory: "",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/J78S8e0.jpg",
      },
      {
        number: 11,
        par: 3,
        feet: 367,
        mandatory: "Double manditory between two trees",
        outOfBounds:
          "Must make it over the fence. DZ is marked with red flags- other side of the fence",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/v5l8GlP.jpg",
      },
      {
        number: 12,
        par: 3,
        feet: 223,
        mandatory: "Mando left of the tree",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/v5l8GlP.jpg",
      },
      {
        number: 13,
        par: 3,
        feet: 292,
        mandatory: "Mando left of the container",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/ru8PTpm.jpg",
      },
      {
        number: 14,
        par: 3,
        feet: 417,
        mandatory: "Mando left of the tree",
        outOfBounds: "Road plays OB",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/l1tDTYY.jpg",
      },
      {
        number: 15,
        par: 3,
        feet: 282,
        mandatory: "",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/I2ZaoVI.jpg",
      },
      {
        number: 16,
        par: 3,
        feet: 256,
        mandatory: "Mando down tree tunnel",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/GE4jxWt.jpg",
      },
      {
        number: 17,
        par: 3,
        feet: 420,
        mandatory: "Mando left of the arrow",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "",
      },
      {
        number: 18,
        par: 3,
        feet: 361,
        mandatory: "",
        outOfBounds: "",
        hazzards: "",
        dropzone: "",
        picture: "https://i.imgur.com/foAKyM3.jpg",
      },
    ],
    function (error, createdLayout) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Hole Seed Complete =====");
      console.log(createdLayout);
    }
  );
});

Route.deleteMany({}, function (error, deletedRoute) {
  if (error) {
    return console.log(error);
  }
  Route.insertMany(
    [
      {
        title: "forehand",
        content: "This is a Forehand Route",
        video: "URL",
      },
      {
        title: "backhand",
        content: "This is a Backhand Route",
        video: "URL",
      },
    ],
    function (error, createdUser) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Route seed Complete =====");
      console.log(createdRoute);
    }
  );
});

User.deleteMany({}, function (error, deletedUser) {
  if (error) {
    return console.log(error);
  }
  User.insertMany(
    [
      {
        username: "Nicholas",
        email: "test@test.com",
        password: "test",
      },
    ],
    function (error, createdUser) {
      if (error) {
        return console.log(error);
      }
      console.log("===== User seed Complete =====");
      console.log(createdUser);
    }
  );
});

Review.deleteMany({}, function (error, deletedReview) {
  if (error) {
    return console.log(error);
  }
  Review.insertMany(
    [
      {
        rating: 3.5,
        comment:
          "This Course is Awesome but I'm going to give it a 3.5 star raiting anyways ",
        course: "61855f2c12dc6d555ed78dca",
      },
    ],
    function (error, createdReview) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Review seed Complete =====");
      console.log(createdReview);
    }
  );
});

Event.deleteMany({}, function (error, deletedUser) {
  if (error) {
    return console.log(error);
  }
  Event.insertMany(
    [
      {
        title: "Chabot Park Weekly",
        contact: "I hate Mando to the Left!!",
        startTime: "8:00am - 5:00pm",
        dayOfWeek: "Saturday - Sunday",
        startFormat: "Flex Start",
        playFormat: "Singles",
        admin: ["Mikey Alvarez", "Jordan Goldberg"],
        course: "61855f2c12dc6d555ed78dca",
      },
    ],
    function (error, createdEvent) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Event seed Complete =====");
      console.log(createdEvent);
    }
  );
});

Event.deleteMany({}, function (error, deletedEvent) {
  if (error) {
    return console.log(error);
  }
  Event.insertMany(
    [
      {
        title: "Chabot Park Weekly",
        contact: "Jordan Goldberg",
        eventPhoto: "https://i.imgur.com/yq0ZHbk.jpg",
        smallDescription:
          "Welcome to the Chabot Park Weekly! This tournament is handicapped and will be open Saturday and Sunday! A Players first two rounds will establish their handicap. ",
        startTime: "8:00am - 5:00pm",
        dayOfWeek: "Saturday - Sunday",
        startFormat: "Flex Start",
        label: "Handicap Round",
        playFormat: "Singles",
        description: [
          " 1. Please Check-in on UDisc Events- Please pay before you start your round Entry Fee to: @Jordan-Goldberg-20. Our goal is to protect everyone, by going paperless. Thanks to UDisc! You will be able to keep track of your scores and watch live scores.The Weekly entry fee is $5. $4 goes to the week's payout, and $1 goes to the Ace Pot. You must have an established handicap (2 previously recorded weeklies) to be eligible for payout. Players without a handicap can enter the ace pot but the cost is still $5.",

          "2. UDisc Check-in: https://www.udisc.com/. To play the weekly, YOU MUST HAVE A UDISC PROFILE. If you do not already have a UDisc account and do not want to download the app yourself, you can have a cardmate check you in with your First and Last names and email address. This process will create a profile for you. **USE THE SAME FIRST AND LAST NAME AS USED FOR PREVIOUS WEEKLIES. PROPER CAPITALIZATION PLEASE.** >>MAKE SURE YOUR UDISC APP IS UP TO DATE OR ELSE YOU WILL RUN INTO PROBLEMS!",

          "3. Create a Scorecard: Find the the 'Chabot Park Saturday Weekly'  league on the 'Events' tab in UDisc. Tap 'Check-in'. When checking in, use the same first and last name that you've previously used in Chabot Park Saturday Weekly tournaments.Groups must have at least 3 players to a card, but not more than 4",

          "4. Please try to create groups of exactly 4 when possible. Follow all current rules of the course that are posted at Hole 1's teepad and throughout the course. **One and only one person in each group** needs to create the scorecard for the group. Once all players in a group are checked in, scorecards can be created using the Create Scorecard button. Once the scorecard is created for the group, anyone in the group can also keep score or follow along on their own phone. If a player needs to be added to or removed from the scorecard after it's been created, use the menu button in the top right corner of the scorecard and choose 'Add / Remove Player'. **Please note that all changes to scorecards are tracked**",

          "5. Upon completion of your round, everyone in the group should double check their score. Once this is done, the person with the live scorecard should tap 'Finish Round' then 'Finalize' to submit your score to the TD(s).",

          "6.Thank you for understanding the rules and doing your part to keep everyone safe. Good luck and have fun.",
        ],
        admin: ["Mikey Alvarez", "Jordan Goldberg"],
        course: "61855f2c12dc6d555ed78dca",
      },
      {
        title: "Thursday Doubles",
        contact: "Mikey Alverez",
        eventPhoto: "https://i.imgur.com/SRwyBak.jpg",
        smallDescription:
          "All levels welcome! This will be a partner tournament.  ",
        startTime: "4:30pm",
        dayOfWeek: "Thursday",
        startFormat: "Flex Start",
        label: "Best Throw",
        playFormat: "Doubles",
        description: [
          "1. This will be a doubles tournament for all levels and abilites.",
          "2. Please Come 10 minutes early to be prepared for the flip.",
          "3. All players will flip a disk to pick random teams.",
          "4. Bring $5.",
          "5. All rules and Mandos will be determined at the start of the game.",
          "6. Have fun!",
        ],
        admin: ["Mikey Alvarez", "Jordan Goldberg"],
        course: "61855f2c12dc6d555ed78dca",
      },
      {
        title: "Monday Night Singles",
        contact: "Mikey Alverez",
        eventPhoto: "https://i.imgur.com/qgFpi0B.jpg",
        smallDescription: "Test your ability in this Raw scoreing round!",
        startTime: "4:30pm",
        dayOfWeek: "Monday",
        startFormat: "Flex Start",
        label: "Raw Scores",
        playFormat: "Single",
        description: [
          "1. This will be a Singles Tournament for all levels and abilites.",
          "2. Please Come 10 minutes early to be prepared for the flip.",
          "3. All players will play their raw scores. No mulligans or re-throws",
          "5. All rules and Mandos will be determined at the start of the game.",
          "4. Bring $5.",
          "6. Have fun!",
        ],
        admin: ["Mikey Alvarez", "Jordan Goldberg"],
        course: "61855f2c12dc6d555ed78dca",
      },
      {
        title: "Friday Dubs At Oyster Bay",
        contact: "",
        eventPhoto: "https://i.imgur.com/8OjBnZM.jpg",
        smallDescription: "Test Your Skills At the Newest Course Aurond!",
        startTime: "4:30pm",
        dayOfWeek: "Friday",
        startFormat: "Flex Start",
        label: "Best Throw",
        playFormat: "Doubles",
        description: [
          "1. This will be a doubles tournament for all levels and abilites.",
          "2. Please Come 10 minutes early to be prepared for the flip.",
          "3. All players will flip a disk to pick random teams.",
          "4. Bring $5.",
          "5. All rules and Mandos will be determined at the start of the game.",
          "6. Have fun!",
        ],
        admin: ["Mikey Alvarez", "Jordan Goldberg"],
        course: "61855f2c12dc6d555ed78dca",
      },
    ],
    function (error, createdEvent) {
      if (error) {
        return console.log(error);
      }
      console.log("===== Event seed Complete =====");
      console.log(createdEvent);
    }
  );
});
