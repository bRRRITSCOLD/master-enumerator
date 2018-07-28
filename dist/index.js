/**
 * @class Enumerator
 * class for creating psuedo-enums instances
 * in javascript as javascript does not have
 * a enum/enumerator type OOTB (Out-Of-The-Box)
 * @param {Array} array - array of strings that refer to the enumeration values you desire for your enumerator
 * @param {Object} options - object housing your desired custom configuration options (currently only supports options.caseSensitive)
 */
class Enumerator {
  /**
   * @constructor
   * @param {Array} array - array of strings that refer to the enumeration values you desire for your enumerator
   * @param {Object} options - object housing your desired custom configuration options (currently only supports options.caseSensitive)
   */
  constructor(array, options = {}) {
    // we intialize the caseSensitive property right away as to enforce the correct construction of the enumeration values for this Enumerator instance
    this._caseSensitive = options.caseSensitive ? options.caseSensitive : false;
    // initiate a instance property of enumerations as an empty array before filling it with a dictionary store of this Enumerator instance's enumerations (keys and values)
    this.enumerations = [];
    // loop through array passed in to constructor to perform more mutations, manipulations, documentations of the data within the data-type/class instance
    for (let i = 0; i < array.length; i++) {
    // defining the getter methods correlatinf to the desired enumeration values defined by the user for the given Enumerator instance - dependent on case sensitivity setting
      Object.defineProperty(this, `${array[i].toUpperCase()}`, {
        get: () => {
          if (this._caseSensitive === true) return `${array[i]}`;
          if (this._caseSensitive === false) return `${array[i].toUpperCase()}`;
        }
      });
      // intiate objects to fill enumerations array with - they configured object is decided upon by the case sensitivity of the Enumerator data-type
      if (this._caseSensitive === true) {
        this.enumerations.push({
          key: `${array[i].toUpperCase()}`,
          value: array[i]
        });
      }
      if (this._caseSensitive === false) {
        this.enumerations.push({
          key: `${array[i].toUpperCase()}`,
          value: `${array[i].toUpperCase()}`
        });
      }
    }
  }

  /**
   * returns true or false if the passed in value/string is a enum-type of the current Enumerator data-type instance
   * @function validValue(value)
   * @param {String} value - string of value you wish to test against the Enumerator instance's enumeration
   * @returns {Boolean} boolean
   */
  validValue(value) {
    // create a holder for the value
    let holder = value;
    // manipulate value dependent on the case sensitivity of the current Enumerator instance
    if (this._caseSensitive === false) holder = value.toUpperCase();
    // preset valid to false
    let valid = false;
    // initiate an empty array to house the Enumerator's enumeration values
    const values = [];
    // push the Enumerator's enumeration values onto the empty values array
    for (let i = 0; i < this.enumerations.length; i++) values.push(this.enumerations[i].value);
    // check against the Enumerator's enum-values
    for (let i = 0; i < values.length; i++) {
      if (this[values[i].toUpperCase()] === holder) valid = true;
    }
    // return the validity of the passed in value - if it is correlated to this Enumerator data-type instance
    return valid;
  }

  /**
   * returns an array filled with booleans (true or false) -
   * these booleans are the result of a validity check between the
   * passed in value in the same index location of the passed in array
   * and the values of the Enumerator instance - if it is found to equal
   * one of the Enumerator Instance's valus then true is pushed onto the
   * returned array before return said array (and false if the opposite is true)
   * @function validValues(array)
   * @param {Array} array - array of values that you want to check against the given Enumerator instance's values
   */
  validValues(array) {
    const validityArray = [];

    for (let i = 0; i < array.length; i++) {
      let validCount = 0;
      for (let j = 0; j < this.enumerations.length; j++) {
        if (this._caseSensitive === true) {
          if (array[i] === this.enumerations[j].value) {
            validCount++;
          }
        } else {
          if (array[i].toUpperCase() === this.enumerations[j].value) { // eslint-disable-line
            validCount++;
          }
        }
      }
      validCount === 0 ? validityArray.push(false) : validityArray.push(true); // eslint-disable-line
    }

    return validityArray;
  }

  /**
   * this method returns an array filled with the
   * stringified name values of all the getter properties
   * for the enum-values correlatred to this
   * Enumerator data-type instance
   * @function enumerationKeys()
   * @returns {Array} array[]
   */
  enumerationKeys() {
    const holder = [];

    for (let i = 0; i < this.enumerations.length; i++) holder.push(this.enumerations[i].key);

    return holder;
  }

  /**
   * this method returns an array filled with the
   * the enum-values correlatred to this
   * Enumerator data-type instance
   * @function enumerationKeys()
   * @returns {Array} array[]
   */
  enumerationValues() {
    const holder = [];

    for (let i = 0; i < this.enumerations.length; i++) holder.push(this.enumerations[i].value);

    return holder;
  }
}

module.exports = {
  Enumerator
};
