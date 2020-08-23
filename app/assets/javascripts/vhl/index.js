import {Course} from './course/course';

/**
 * Information required for enrolling a student in a course..
 * @typedef {object} Index.StudentInfo
 * @property {string} firstname The student's first name.
 * @property {string} lastname The student's last name.
 */

/**
 * @fileoverview
 * This is the entry file into the JS application.  We can have
 * multiple applications that live on the same page, all using the same
 * libraries if need be.  It comes down to how we want to split the code, which
 * is doable with Webpack.
 */

/**
 * Tells the bundler to include a css file.  This will be compiled and placed
 * in assets/stylesheets/ in the same way that the JS is placed in
 * assets/javascripts.
 */
// @ts-ignore
require('../../stylesheets/vhl/index.scss');

/** @type {Array<Index.StudentInfo>} */
const students = [
  {firstname: 'Jack', lastname: 'Thompson'},
  {firstname: 'Amanda', lastname: 'Wallace'},
  {firstname: 'Phil', lastname: 'Harper'},
];

const myCourse = new Course('Fun With Fireworks 101', students);

console.log(myCourse.getStudents());
