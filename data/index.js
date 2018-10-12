import Paper from '../models/paper';
import Person from '../models/person';
import Course from '../models/course';
import paper from './paper';
import person from './person';
import course from './course';
import cuid from "cuid";
import async from 'async';
import fs from 'fs';

let notYet = true;

export default function dummyData() {
  Paper.count().exec((err, count) => {
    if (count > 0) return;

    const papers = paper.map((paper, index) => {
      let pdfPath = '', zipPath = '';
      if (paper.pdf) {
        pdfPath = `file/${paper.name.replace(/\s+/g, '_').toLowerCase()}.pdf`;
        fs.writeFileSync(pdfPath, paper.pdf, { encoding: 'base64' });
      }
      if (paper.zip) {
        zipPath = `file/${paper.name.replace(/\s+/g, '_').toLowerCase()}.zip`;
        fs.writeFileSync(zipPath, paper.zip, { encoding: 'base64' });
      }
      return new Paper({
        published: paper.published,
        type: paper.type,
        name: paper.name,
        detail: paper.detail,
        authors: paper.authors,
        submittedTo: paper.submittedTo,
        dateCreated: new Date(paper.dateCreated),
        pdfPath: paper.pdfPath ? paper.pdfPath : (pdfPath !== '' ? `http://islab.snu.ac.kr/${pdfPath}` : ''),
        zip: zipPath !== '' ? `http://islab.snu.ac.kr/${zipPath}` : '',
      });
    });
    Paper.create(papers, (err) => {
      console.log(err);
    })
  });

  Person.count().exec((err, count) => {
    if (count > 0) return;

    const people = person.map((person, index) => {
      let imagePath = '';
      if (person.image) {
        imagePath = `image/${person.imageName}`;
        fs.writeFileSync(imagePath, person.image, { encoding: 'base64' });
      }
      return new Person({
        graduated: person.graduated,
        field: person.field,
        name: person.name,
        email: person.email,
        title: person.title,
        occupation: person.occupation,
        address: person.address,
        year: person.year,
        profilePage: person.profilePage,
        dateCreated: new Date(person.dateCreated),
        imagePath: imagePath !== '' ? `http://islab.snu.ac.kr/${imagePath}` : '',
      });
    });
    Person.create(people, (err) => {
      console.log(err);
    });
  });

  Course.count().exec((err, count) => {
    if (count > 0) return;
    const courses = course.map((cr) => {
      let materials = [];
      if (cr.materials && cr.materials.length > 0) {
        materials = cr.materials.map((c) => {
          let name = c.name, filePath = '', solutionPath = '';
          if (c.file) {
            filePath = `file/${c.fileName}`;
            fs.writeFileSync(filePath, c.file, { encoding: 'base64' });
          }
          if (c.solution) {
            solutionPath = `file/${c.solutionName}`;
            fs.writeFileSync(solutionPath, c.solution, { encoding: 'base64' });
          }
          return {
            name,
            filePath: filePath !== '' ? `http://islab.snu.ac.kr/${filePath}` : '',
            solutionPath: solutionPath !== '' ? `http://islab.snu.ac.kr/${solutionPath}` : '',
          };
        });
      }
      return Course({
        active: cr.active,
        code: cr.code,
        name: cr.name,
        alias: cr.alias,
        time: cr.time,
        teachingAssistants: cr.teachingAssistants,
        teachingTime: cr.teachingTime,
        preference: cr.preference,
        textbook: cr.textbook,
        dateCreated: new Date(cr.dateCreated),
        materials,
      })
    });
    Course.create(courses, (err) => {
      console.log(err);
    })
  });
}