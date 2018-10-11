const mongoose = require("mongoose");

const models = require("../models");
const { userTypes } = require("../utils/constants");


const ObjectId = mongoose.Types.ObjectId;

const users = [
  new models.User({
    _id: new ObjectId(),
    firstName: "John",
    lastName: "Doe",
    email: "joe.doe@example.com",
    phoneNumer: "6666666",
    userType: userTypes.examiner
  }),

  new models.User({
    _id: new ObjectId(),
    firstName: "baba",
    lastName: "nla",
    email: "baba.nla@example.com",
    phoneNumer: "7880033",
    userType: userTypes.examiner
  }),

  new models.User({
    _id: new ObjectId(),
    firstName: "chidi",
    lastName: "onwu",
    email: "chidi.onwu@example.com",
    phoneNumer: "23490499",
    userType: userTypes.candidate
  })
];

const courses = [
  new models.Course({
    _id: new ObjectId(),
    name: "Python"
  }),

  new models.Course({
    _id: new ObjectId(),
    name: "Mathematics"
  }),

  new models.Course({
    _id: new ObjectId(),
    name: "English"
  })
];

const questions = [
  new models.Question({
    examinerId: users[0]._id,
    courseId: courses[1]._id,
    question: "x + 1 = 5; what is x?",
    options: [
      { text: "5" },
      { text: "6" },
      { text: "-5" },
      { text: "4", correct: true }
    ]
  }),

  new models.Question({
    examinerId: users[0]._id,
    courseId: courses[1]._id,
    question: "x - 3 = 5; what is x?",
    options: [
      { text: "2" },
      { text: "-2" },
      { text: "9" },
      { text: "8", correct: true }
    ]
  }),

  new models.Question({
    examinerId: users[0]._id,
    courseId: courses[1]._id,
    question: "2x + 1 = 5; what is x?",
    options: [
      { text: "6" },
      { text: "4" },
      { text: "3" },
      { text: "2", correct: true }
    ]
  }),

  new models.Question({
    examinerId: users[0]._id,
    courseId: courses[1]._id,
    question: "3x - 1 = 5; what is x?",
    options: [
      { text: "5" },
      { text: "6" },
      { text: "1.25" },
      { text: "2", correct: true }
    ]
  }),

  new models.Question({
    examinerId: users[0]._id,
    courseId: courses[2]._id,
    question: "which is not a vowel?",
    options: [
      { text: "a" },
      { text: "e" },
      { text: "i" },
      { text: "h", correct: true }
    ]
  }),

  new models.Question({
    examinerId: users[0]._id,
    courseId: courses[2]._id,
    question: "which is not a consonant?",
    options: [
      { text: "b" },
      { text: "c" },
      { text: "k" },
      { text: "a", correct: true }
    ]
  })
];

const examsSettings = [
  new models.ExamSettings({
    examinerId: users[0]._id,
    beginDate: new Date(2018, 09, 22, 8, 0, 0),
    endDate: new Date(2018, 09, 25, 8, 0, 0),
    courses: [courses],
    totalScore: 100
  })
];

const seedUsers = () => {
    return models.User.count().then(x => {
        if(x < 1) {
            console.log("=== begin seeding users ===");
            return models.User.insertMany(users)
                .then(result => {
                    console.log(`=== finished seeding ${users.length} users ==`);
                    return Promise.resolve(result.map(x => x._id));
                })
                .catch(catchErr);
        }

        return Promise.resolve(true);
    })
};

const seedCourses = () => {
    return models.Course.count().then(x => {
        if(x < 1) {
            console.log("=== begin seeding courses ===");
            return models.Course.insertMany(courses)
                .then(result => {
                console.log(`=== finished seeding ${courses.length} courses ==`);
                return Promise.resolve(result.map(x => x._id));
                })
                .catch(catchErr);
        }

        return Promise.resolve(true);
    })
};

const seedQuestion = () => {
    const count = models.Question.count().exec();
    return count.then(x => {
        if(x < 1) {
            console.log("=== begin seeding questions ===");
            return models.Question.insertMany(questions)
                .then(result => {
                console.log(`=== finished seeding ${questions.length} questions ===`);
                return Promise.resolve(result.map(x => x._id));
                })
                .catch(catchErr);
        }

        return Promise.resolve(true);
    })
};

const seedExams = () => {
    return models.ExamSettings.count().then(x => {
        if(x < 1) {
            console.log("=== begin seeding exams ===");
            return models.ExamSettings.insertMany(examsSettings)
                .then(result => {
                console.log(`=== finished seeding ${examsSettings.length} exams ===`);
                return Promise.resolve(result.map(x => x._id));
                })
                .catch(catchErr);
        }

        return Promise.resolve(true);
    })
};

const catchErr = err => {
  console.log(err);
};

const seedDataBase = () => {
  seedUsers().then(x => {
    seedCourses().then(x => {
        seedQuestion().then(x => {
            seedExams();
        })
    })
  });
};

module.exports = { seedDataBase };
