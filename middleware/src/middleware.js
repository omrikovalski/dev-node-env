const express = require('express');
var cors = require('cors')
const app = express();

var courses = [{ 
                "01": {
                  "category": "BEGINNER", 
                  "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png", 
                  "description": "Angular Universal In Depth", 
                  "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-universal-course.jpg", 
                  "id": "01", 
                  "lessonsCount": 10, 
                  "longDescription": "Use Angular on the server too! Learn Angular Server-Side Rendering." 
                }, 
                "02": {
                   "category": "ADVANCED", 
                   "courseListIcon": 
                   "https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png", 
                   "description": "Angular Security Course - Web Security Fundamentals", 
                   "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png", 
                   "id": "02", 
                   "lessonsCount": 11, 
                   "longDescription": "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks." 
                  },
                  "03": { 
                     "category": "ADVANCED", 
                     "courseListIcon": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png", 
                     "description": "Angular PWA - Progressive Web Apps Course", 
                     "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png", 
                     "id": "03", 
                     "lessonsCount": 8, 
                     "longDescription": "Learn Angular Progressive Web Applications, build the future of the Web Today." 
                    } 
                }]
var lessons = [{ "01": [{ "courseId": "1", "description": "Angular Universal Course Helicopter View", "duration": "4:17", "id": "01", "seqNo": 1 }, { "description": "Angular Universal Course Kickoff - Git, Node, IDE, Lessons Code", "duration": "2:07", "id": "02", "seqNo": 2 }, { "description": "Why Angular Universal? Performance Benefits", "duration": "2:33", "id": "03", "seqNo": 3 }, { "description": "Why Angular Universal? Social Media Crawlers", "duration": "4:44", "id": "04", "seqNo": 4 }, { "description": "Why Angular Universal? SEO or Search Engine Optimization", "duration": "2:55", "id": "05", "seqNo": 5 }, { "description": "Scaffolding an Angular Universal Application using the Angular CLI", "duration": "3:27", "id": "06", "seqNo": 6 }, { "description": "Angular Universal Pre-Rendering with renderModuleFactory", "duration": "9:22", "id": "07", "seqNo": 7 }, { "description": "Angular Universal Express Server - Step by Step Implementation", "duration": "1:26", "id": "08", "seqNo": 8 }, { "description": "Angular Universal Express Server - See it in Action", "duration": "2:08", "id": "09", "seqNo": 9 }, { "description": "Universal Express Server - Rendering Multiple Routes", "duration": "4:01", "id": "10", "seqNo": 10 }], "02": [{ "description": "Course Helicopter View", "duration": "08:19", "id": "11", "seqNo": 1 }, { "description": "Installing Git, Node, NPM and Choosing an IDE", "duration": "04:17", "id": "12", "seqNo": 2 }, { "description": "Installing The Lessons Code - Learn Why Its Essential To Use NPM 5", "duration": "06:05", "id": "13", "seqNo": 3 }, { "description": "How To Run Node In TypeScript With Hot Reloading", "duration": "03:57", "id": "14", "seqNo": 4 }, { "description": "Guided Tour Of The Sample Application", "duration": "06:00", "id": "15", "seqNo": 5 }, { "description": "Client Side Authentication Service - API Design", "duration": "04:53", "id": "16", "seqNo": 6 }, { "description": "Client Authentication Service - Design and Implementation", "duration": "09:14", "id": "17", "seqNo": 7 }, { "description": "The New Angular HTTP Client - Doing a POST Call To The Server", "duration": "06:08", "id": "18", "seqNo": 8 }, { "description": "User Sign Up Server-Side Implementation in Express", "duration": "08:50", "id": "19", "seqNo": 9 }, { "description": "Introduction To Cryptographic Hashes - A Running Demo", "duration": "05:46", "id": "20", "seqNo": 10 }, { "description": "Some Interesting Properties Of Hashing Functions - Validating Passwords", "duration": "06:31", "id": "21", "seqNo": 11 }], "03": [{ "description": "Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code", "duration": "07:19", "id": "22", "seqNo": 1 }, { "description": "Service Workers In a Nutshell - Service Worker Registration", "duration": "6:59", "id": "23", "seqNo": 2 }, { "description": "Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools", "duration": "7:28", "id": "24", "seqNo": 3 }, { "description": "Service Workers and Application Versioning - Install & Activate Lifecycle Phases", "duration": "10:17", "id": "25", "seqNo": 4 }, { "description": "Downloading The Offline Page - The Service Worker Installation Phase", "duration": "09:50", "id": "26", "seqNo": 5 }, { "description": "Introduction to the Cache Storage PWA API", "duration": "04:44", "id": "27", "seqNo": 6 }, { "description": "View Service Workers HTTP Interception Features In Action", "duration": "06:07", "id": "28", "seqNo": 7 }, { "description": "Service Workers Error Handling - Serving The Offline Page", "duration": "5:38", "id": "29", "seqNo": 8 }] }]
app.use(cors())

app.get('/lessons/:id', (req, res) => {
  for (var key in lessons[0]) {
    if (req.params.id == key) {
      res.send(lessons[0][key]);
    }
  }
});

app.get('/courses/:id', (req, res) => {
  for (var key in courses[0]) {
    if (req.params.id == key) {
      res.send(courses[0][key]);
    }
  }
});

app.get('/courses', (req, res) => {
  res.send(courses[0]);
});

app.listen(8081, () => {
  console.log('Listening');
});
