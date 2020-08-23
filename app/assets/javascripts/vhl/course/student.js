/**
 * @classdesc A student that can be enrolled in a course.
 * @class
 * @constructor
 * @param {string} firstname The student's first name.
 * @param {string} lastname The persons last name.
 */
export class Student {
  /**
   * @param {string} firstname The student's first name.
   * @param {string} lastname The student's last name.
   */
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  /**
   * @return {string}
   * @public
   */
  getFirstName() {
    return this._firstname;
  }

  /**
   * @return {string}
   * @public
   */
  getLastName() {
    return this._lastname;
  }

  /**
   * The child's full name.
   * @return {string}
   * @public
   */
  getFullname() {
    return `${this._firstname} ${this._lastname}`;
  }
}
