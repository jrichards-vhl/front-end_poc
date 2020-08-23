import {Student} from './student';

/**
 * Information required for enrolling a student in a course..
 * @typedef {object} Course.StudentInfo
 * @property {string} firstname The student's first name.
 * @property {string} lastname The student's last name.
 */

/**
 * @classdesc A singel course.
 * @class
 * @constructor
 * @param {string} courseName A name for the course.
 * @param {Array<Course.StudentInfo>} students A list of students enrolled in
 * the course.
 */
export class Course {
  /**
   * @param {string} courseName A name for the course.
   * @param {Array<Course.StudentInfo>} students A list of students enrolled in
   * the course.
   */
  constructor(courseName, students) {
    this._courseName = courseName;
    this._students = this._enrollStudents(students);
  }

  /**
   * @type {Array<Student>} students The students currently enrolled in the
   * course.
   * @private
   */
  _students = [];

  /**
   * Adds students to the course.
   * @param {Array<Course.StudentInfo>} students The students to be enrolled.
   * @return {Array<Student>}
   * @private
   */
  _enrollStudents(students) {
    const enrolled = students.map((student) => {
      return new Student(student.firstname, student.lastname);
    });
    return [...this._students, ...enrolled];
  }

  /**
   * Gets an immutable list of the students currently enrolled in the course.
   * @return {Array<Student>}
   * @public
   */
  getStudents() {
    return [...this._students];
  }
}
