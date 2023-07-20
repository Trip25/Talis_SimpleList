//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(number) {
    // _property is setter method to set the value of a property of an object.
   this._number = number;
   this._next = null;
  }

  get value() {
    return this._number;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor() {
    this._length = 0;
    this._head = null;
  }

  add(nextValue) {
    throw new Error('Remove this statement and implement this function');
  }

  get length() {
    throw new Error('Remove this statement and implement this function');
  }

  get head() {
    throw new Error('Remove this statement and implement this function');
  }

  toArray() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}
