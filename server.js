import config from './config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import professorData from './professor';
const professor = {
  name: professorData.name ,
  title: professorData.title ,

  workAddress: professorData.name ,
  office: professorData.title ,
  phone: professorData.phone ,
  email: professorData.email ,

  description: professorData.description ,
  recruit: professorData.recruit ,
  bio: professorData.bio ,
  curriculumVitae: professorData.curriculumVitae ,

  university: professorData.university ,
  lab: professorData.lab
};
// import dummyData from './dummyData/index';
import Course from './models/course';
import Admin from './models/admin';
import Paper from './models/paper';
import People from './models/person';

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/file', express.static(__dirname + '/file'));
app.use('/pdf', express.static(__dirname + '/public/pdf'));
app.use('/course', express.static(__dirname + '/data/pdf'));
app.use(express.static("public"));

mongoose.connect(config.mongoURL, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  // dummyData();
});

// index page
app.get('/', (req, res) => {
  res.render('pages/index', {
    professor,
  });
});

// about page
app.get('/biography', (req, res) => {
  res.render('pages/biography', {
    professor,
  });
});
app.get('/teaching', (req, res) => {
  Course.getAll((err, courses) => {
    if (err) {
      res.render('pages/teaching', {
        courses: [],
      });
    } else {
      console.log(courses);
      res.render('pages/teaching', {
        courses,
      });
    }
  });
});
app.get('/course/:alias', (req, res) => {
  Course.get(req.params.alias, (err, course) => {
    if (err) {
      res.render('pages/course', {
        course: {},
        professor,
      });
    } else {
      res.render('pages/course', {
        course,
        professor,
      });
    }
  });
});
app.get('/publication', (req, res) => {
  Paper.getAll((err, papers) => {
    if (err) {
      res.render('pages/publication', {
        journal: [],
        conference: [],
      });
    } else {
      // const
      res.render('pages/publication', {
        // journal,
        // conference,
      });
    }
  });
});
app.get('/people', function(req, res) {
  res.render('pages/about');
});

app.listen(config.port);
console.log('Api start at ' + config.port);
