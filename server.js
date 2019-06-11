import config from './config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import professorData from './professor';
import accounts from './accounts';
import path from 'path';
import methodOverride from 'method-override';
import fs from 'fs';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: __dirname + '/public/upload/',
    filename: (req, file, callback) => {
      callback(null, file.originalname.toLowerCase().trim().replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, ''));
    }
  })
});


const professor = {
  name: professorData.name,
  title: professorData.title,

  workAddress: professorData.name,
  office: professorData.title,
  phone: professorData.phone,
  email: professorData.email,

  description: professorData.description,
  recruit: professorData.recruit,
  bio: professorData.bio,
  curriculumVitae: professorData.curriculumVitae,

  university: professorData.university,
  lab: professorData.lab
};
import Course from './models/course';
import Admin from './models/admin';
import Paper from './models/paper';
import People from './models/person';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));

// app.use('/image', express.static(__dirname + '/image'));
// app.use('/file', express.static(__dirname + '/file'));
// app.use('/pdf', express.static(__dirname + '/public/pdf'));
// app.use('/course', express.static(__dirname + '/data/pdf'));
app.use('/upload', express.static(__dirname + '/public/upload'));
app.use('/static', express.static(__dirname + '/public/static'));
// app.use(express.static("public"));
app.use((req, res, next) => {
  if (req.originalUrl.indexOf('/admin') === 0) {
    if (req.originalUrl === '/admin') {
      next();
    } else {
      let flag = false;
      if (req.cookies.id) {
        accounts.map(obj => {
          if (obj.id === req.cookies.id) {
            flag = true;
          }
        });
      }
      if (flag) {
        next();
      } else {
        res.redirect('/admin');
      }
    }
  } else {
    next();
  }
});

mongoose.connect(config.mongoURL, {useNewUrlParser: true}, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  // dummyData();
});

// index page
app.get('/', (req, res) => {
  res.render('client/pages/index', {
    professor,
  });
});

// about page
app.get('/biography', (req, res) => {
  res.render('client/pages/biography', {
    professor,
  });
});
app.get('/teaching', (req, res) => {
  Course.getAll((err, courses) => {
    if (err) {
      res.render('client/pages/teaching', {
        courses: [],
      });
    } else {
      res.render('client/pages/teaching', {
        courses,
      });
    }
  });
});
app.get('/course/:alias', (req, res) => {
  Course.getAlias(req.params.alias, (err, course) => {
    if (err) {
      res.render('client/pages/course', {
        course: {},
        professor,
      });
    } else {
      res.render('client/pages/course', {
        course,
        professor,
      });
    }
  });
});
app.get('/publication', (req, res) => {
  Paper.getConferenceAndJournal((err, journal, conference) => {
    res.render('client/pages/publication', {
      journal,
      conference,
    });
  });
});
app.get('/people', (req, res) => {
  People.getPeopleAndAlumni((err, members, alumni) => {
    res.render('client/pages/people', {
      members,
      alumni,
    });
  });
});

app.get('/admin', (req, res) => {
  res.render('admin/pages/login', {error: ''});
});

app.post('/admin', (req, res) => {
  const credential = req.body;
  let flag = false;
  accounts.map((obj) => {
    if (obj.id === credential.id && obj.password === credential.password) {
      flag = true;
      res.cookie('id', obj.id);
    }
  });
  if (flag) {
    res.redirect('/admin/course');
  } else {
    res.render('admin/pages/login', {error: 'login fail'});
  }
});
app.get('/logout', (req, res) => {
  res.clearCookie('id');
  res.redirect('/admin');
});

// listing
app.get('/admin/course', (req, res) => {
  Course.getAll((err, courses) => {
    res.render('admin/pages/course-list', {
      courses: err ? [] : courses,
    });
  });
});
// CRUD
app.get('/admin/course/form', (req, res) => {
  People.getNameAndId((err, people) => {
    if (err) {
      res.redirect('/admin/course');
    } else {
      res.render('admin/pages/course-form', {
        edit: false,
        active: 'on',
        code: '',
        name: '',
        time: '',
        teachingAssistants: '',
        materials: [],
        preference: '',
        textbook: '',
        people,
        id: '',
        error: {},
      });
    }
  });
});
app.post('/admin/course/form', upload.array('materials'), (req, res) => {
  People.getNameAndId((err, people) => {
    if (err) {
      res.redirect('/admin/course');
    } else {
      const reqCourse = req.body;
      let error = {
        pdf: !req.file ? 'Select a file' : '',
        code: '',
        name: '',
        time: '',
        preference: '',
        textbook: '',
      };
      (reqCourse.code === '') ? error.code = 'Input code' : '';
      (reqCourse.name === '') ? error.name = 'Input name' : '';
      (reqCourse.time === '') ? error.time = 'Input time' : '';
      // if (!req.files) {
      //   res.render('admin/pages/course-form', {
      //     edit: false,
      //     active: reqCourse.active === 'on',
      //     code: reqCourse.code,
      //     name: reqCourse.name,
      //     time: reqCourse.time,
      //     materials: [],
      //     teachingAssistants: reqCourse.teachingAssistants,
      //     preference: reqCourse.preference,
      //     textbook: reqCourse.textbook,
      //     people,
      //     id: reqCourse.id ? reqCourse.id : '',
      //     error,
      //   });
      //   return;
      // }
      let materials = [];
      for (let i = 0; i < reqCourse.materialname.length; i++) {
        materials.push({
          name: reqCourse.materialname[i],
          filePath: reqCourse.materialfile[i] ? `http://islab.snu.ac.kr/upload/${reqCourse.materialfile[i].toLowerCase().replace(/ /g, '')}` : '',
          solutionPath: reqCourse.materialsolution[i] ? `http://islab.snu.ac.kr/upload/${reqCourse.materialsolution[i].toLowerCase().replace(/ /g, '')}` : '',
        });
      }
      const course = new Course({
        active: reqCourse.active === 'on',
        code: reqCourse.code,
        name: reqCourse.name,
        time: reqCourse.time,
        teachingAssistants: reqCourse.teachingAssistants.split(','),
        preference: reqCourse.preference.split(','),
        textbook: reqCourse.textbook.split(','),
        materials,
      });
      if (reqCourse.id) {
        let {id, ...rest} = reqCourse;
        rest.active = reqCourse.active === 'on';
        rest.teachingAssistants = reqCourse.teachingAssistants.split(',');
        Course.put(id, rest, (err) => {
          if (err) {
            console.log(err);
            res.render('admin/pages/course-form', {
              edit: false,
              active: reqCourse.active === 'on',
              code: reqCourse.code,
              name: reqCourse.name,
              time: reqCourse.time,
              materials: course.materials,
              teachingAssistants: reqCourse.teachingAssistants,
              preference: reqCourse.preference,
              textbook: reqCourse.textbook,
              people,
              id: reqCourse.id ? reqCourse.id : '',
              error,
            });
          } else {
            res.redirect('/admin/course');
          }
        });
      } else {
        Course.add(course, (err) => {
          if (err) {
            res.render('admin/pages/course-form', {
              edit: false,
              active: reqCourse.active === 'on',
              code: reqCourse.code,
              name: reqCourse.name,
              time: reqCourse.time,
              materials: [],
              teachingAssistants: reqCourse.teachingAssistants,
              preference: reqCourse.preference,
              textbook: reqCourse.textbook,
              people,
              id: reqCourse.id ? reqCourse.id : '',
              error,
            });
          } else {
            res.redirect('/admin/course');
          }
        });
      }
    }
  });
});
app.get('/admin/course/:id', (req, res) => {
  People.getNameAndId((err, people) => {
    if (err) {
      res.redirect('/admin/course');
    } else {
      Course.get(req.params.id, (err, course) => {
        let ret = course.teachingAssistants.map(ta => {
          return ta._id;
        });
        res.render('admin/pages/course-form', {
          edit: true,
          active: course.active,
          people,
          code: course.code,
          name: course.name,
          time: course.time,
          materials: course.materials,
          preference: course.preference.join(','),
          textbook: course.textbook.join(','),
          teachingAssistants: ret.join(','),
          id: course._id,
          error: {},
        });
      });
    }
  });
});
app.put('/admin/course/lock/:id', (req, res) => {
  Course.lock(req.params.id, () => {
    res.redirect('/admin/course');
  });
});
app.put('/admin/course/open/:id', (req, res) => {
  Course.open(req.params.id, () => {
    res.redirect('/admin/course');
  });
});
app.delete('/admin/course/:id', (req, res) => {
  Course.delete(req.params.id, () => {
    res.redirect('/admin/course');
  })
});

// listing
app.get('/admin/paper', (req, res) => {
  Paper.getConferenceAndJournal((err, journal, conference) => {
    res.render('admin/pages/paper-list', {
      journal: err ? [] : journal,
      conference: err ? [] : conference,
    });
  });
});
// CRUD
app.get('/admin/paper/form/:type', (req, res) => {
  res.render('admin/pages/paper-form', {
    edit: false,
    published: 'on',
    authors: [],
    type: req.params.type.charAt(0).toUpperCase() + req.params.type.substr(1).toLowerCase(),
    submittedTo: '',
    detail: '',
    name: '',
    id: '',
    error: {},
  });
});
app.get('/admin/paper/form', (req, res) => {
  res.render('admin/pages/paper-form', {
    edit: false,
    published: 'on',
    authors: [],
    type: 'Choose...',
    submittedTo: '',
    detail: '',
    name: '',
    id: '',
    error: {},
  });
});
app.get('/admin/paper/:id', (req, res) => {
  Paper.get(req.params.id, (err, course) => {
    res.render('admin/pages/paper-form', {
      edit: true,
      published: course.published,
      type: course.type,
      name: course.name,
      submittedTo: course.submittedTo,
      detail: course.detail,
      authors: course.authors,
      id: course._id,
      error: {},
    });
  });
});
app.post('/admin/paper/form', upload.single('pdf'), (req, res) => {
  const reqPaper = req.body;
  let error = {
    pdf: !req.file ? 'Select a file' : '',
    type: '',
    authors: '',
    submittedTo: '',
    detail: '',
    name: '',
  };
  (reqPaper.type === '') ? error.code = 'Select type' : '';
  (reqPaper.name === '') ? error.name = 'Input name' : '';
  (reqPaper.authors === '') ? error.authors = 'Input authors' : '';
  (reqPaper.submittedTo === '') ? error.time = 'Input submit date' : '';
  // if (!req.file) {
  //   res.render('admin/pages/paper-form', {
  //     edit: false,
  //     published: reqPaper.published === 'on',
  //     type: reqPaper.type,
  //     name: reqPaper.name,
  //     authors: reqPaper.authors,
  //     submittedTo: reqPaper.submittedTo,
  //     id: reqPaper.id ? reqPaper.id : '',
  //     error,
  //   });
  //   return;
  // }
  // const pdfPath = req.file ? `http://islab.snu.ac.kr/upload/${req.file.originalname.toLowerCase().trim().replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, '')}` : '';
  const paper = new Paper({
    published: reqPaper.active === 'on',
    type: reqPaper.type,
    name: reqPaper.name,
    authors: reqPaper.authors.split(','),
    submittedTo: reqPaper.submittedTo,
    detail: reqPaper.detail,
    pdfPath: req.file ? `http://islab.snu.ac.kr/upload/${req.file.originalname.toLowerCase().trim().replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, '')}` : '',
  });
  // console.log(reqPaper.authors.split(','));
  // console.log(reqPaper.authors.split(','));
  // return;
  reqPaper.pdfPath = req.file ? `http://islab.snu.ac.kr/upload/${req.file.originalname.toLowerCase().trim().replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, '')}` : '';
  if (reqPaper.id) {
    let {id, ...rest} = reqPaper;
    rest.published = reqPaper.published === 'on';
    rest.authors = reqPaper.authors.split(',');
    Paper.put(id, rest, (err) => {
      if (err) {
        res.render('admin/pages/paper-form', {
          edit: false,
          published: reqPaper.published === 'on',
          type: reqPaper.type,
          name: reqPaper.name,
          authors: reqPaper.authors,
          submittedTo: reqPaper.submittedTo,
          detail: reqPaper.detail,
          id: reqPaper.id ? reqPaper.id : '',
          error,
        });
      } else {
        res.redirect('/admin/paper');
      }
    });
  } else {
    Paper.add(paper, (err) => {
      if (err) {
        res.render('admin/pages/paper-form', {
          edit: false,
          published: reqPaper.published === 'on',
          type: reqPaper.type,
          name: reqPaper.name,
          authors: reqPaper.authors,
          submittedTo: reqPaper.submittedTo,
          detail: reqPaper.detail,
          id: reqPaper.id ? reqPaper.id : '',
          error,
        });
      } else {
        res.redirect('/admin/paper');
      }
    });
  }
});
app.put('/admin/paper/publish/:id', (req, res) => {
  Paper.publish(req.params.id, () => {
    res.redirect('/admin/paper');
  });
});
app.put('/admin/paper/unpublish/:id', (req, res) => {
  Paper.unpublish(req.params.id, () => {
    res.redirect('/admin/paper');
  });
});
app.delete('/admin/paper/:id', (req, res) => {
  Paper.delete(req.params.id, () => {
    res.redirect('/admin/paper');
  })
});

// listing
app.get('/admin/people', (req, res) => {
  People.getPeopleAndAlumni((err, member, alumni) => {
    res.render('admin/pages/people-list', {
      member: err ? [] : member,
      alumni: err ? [] : alumni,
    });
  });
});
// CRUD
app.get('/admin/people/form', (req, res) => {
  res.render('admin/pages/people-form', {
    edit: false,
    graduated: 'on',
    field: '',
    name: '',
    email: '',
    title: '',
    occupation: '',
    profilePage: '',
    address: '',
    id: '',
    error: {},
  });
});
app.get('/admin/people/:id', (req, res) => {
  People.get(req.params.id, (err, people) => {
    res.render('admin/pages/people-form', {
      edit: true,
      graduated: people.graduated,
      name: people.name,
      field: people.field,
      email: people.email,
      title: people.title,
      occupation: people.occupation,
      profilePage: people.profilePage,
      address: people.address,
      id: people._id,
      error: {},
    });
  });
});
app.post('/admin/people/form', upload.single('avatar'), (req, res) => {
  const reqPeople = req.body;
  let error = {
    avatar: !req.file ? 'Select a picture' : '',
    field: '',
    name: '',
    email: '',
    title: '',
    occupation: '',
    profilePage: '',
    address: '',
  };
  // (reqPeople.field === '') ? error.field = 'Input field' : '';
  (reqPeople.name === '') ? error.name = 'Input name' : '';
  (reqPeople.email === '') ? error.email = 'Input email' : '';
  if (!req.file) {
    res.render('admin/pages/people-form', {
      edit: false,
      graduated: reqPeople.graduated === 'on',
      type: reqPeople.type,
      name: reqPeople.name,
      email: reqPeople.email,
      field: reqPeople.field,
      title: reqPeople.title,
      occupation: reqPeople.occupation,
      address: reqPeople.address,
      profilePage: reqPeople.profilePage,
      submittedTo: reqPeople.submittedTo,
      id: reqPeople.id ? reqPeople.id : '',
      error,
    });
    return;
  }
  const imagePath = `http://islab.snu.ac.kr/upload/${req.file.originalname.toLowerCase().trim().replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, '')}`;
  const people = new People({
    graduated: reqPeople.graduated === 'on',
    type: reqPeople.type,
    name: reqPeople.name,
    email: reqPeople.email,
    field: reqPeople.field,
    title: reqPeople.title,
    occupation: reqPeople.occupation,
    address: reqPeople.address,
    profilePage: reqPeople.profilePage,
    imagePath,
  });
  reqPeople.imagePath = req.file ? `http://islab.snu.ac.kr/upload/${req.file.originalname.toLowerCase().trim().replace(/[^a-zA-Z0-9.]/g, "").replace(/ /g, '')}` : '';
  if (reqPeople.id) {
    let {id, ...rest} = reqPeople;
    rest.graduated = reqPeople.graduated === 'on';
    People.put(id, rest, (err) => {
      if (err) {
        res.render('admin/pages/people-form', {
          edit: false,
          graduated: reqPeople.graduated === 'on',
          type: reqPeople.type,
          name: reqPeople.name,
          email: reqPeople.email,
          field: reqPeople.field,
          title: reqPeople.title,
          occupation: reqPeople.occupation,
          address: reqPeople.address,
          profilePage: reqPeople.profilePage,
          id: reqPeople.id ? reqPeople.id : '',
          error,
        });
      } else {
        res.redirect('/admin/people');
      }
    });
  } else {
    People.add(people, (err) => {
      if (err) {
        res.render('admin/pages/people-form', {
          edit: false,
          graduated: reqPeople.graduated === 'on',
          type: reqPeople.type,
          name: reqPeople.name,
          email: reqPeople.email,
          field: reqPeople.field,
          title: reqPeople.title,
          occupation: reqPeople.occupation,
          address: reqPeople.address,
          profilePage: reqPeople.profilePage,
          id: reqPeople.id ? reqPeople.id : '',
          error,
        });
      } else {
        res.redirect('/admin/people');
      }
    });
  }
});
app.put('/admin/people/graduate/:id', (req, res) => {
  People.graduate(req.params.id, () => {
    res.redirect('/admin/people');
  });
});
app.put('/admin/people/ungraduate/:id', (req, res) => {
  People.ungraduate(req.params.id, () => {
    res.redirect('/admin/people');
  });
});
app.delete('/admin/people/:id', (req, res) => {
  People.delete(req.params.id, () => {
    res.redirect('/admin/people');
  })
});

app.listen(config.port);

console.log('Web start at ' + config.port);
