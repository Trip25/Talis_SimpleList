export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(next) {
    this._next = next;
  }
}

export class List {
  constructor(arr) {
    this._length = 0;
    this._head = null;

    if (Array.isArray(arr) && arr.length > 0) {
      this._head = new Element(arr[arr.length - 1]);
      let current = this._head;
      for (let i = arr.length - 2; i >= 0; i--) {
        current.next = new Element(arr[i]);
        current = current.next;
      }
      this._length = arr.length;
    }
  }
  add(element) {
    //first check if the head is null
    if (this._head === null) {
      this._head = element;
    } else {
      element._next = this._head;
      this._head = element;
    }
  
    this._length++;
  }

//function addAfter ( 2 parameters newNumber, target number)
// make sure that there is target number 
// traverse to the target number 
//make the new element node
//change the pointer for the target number to point to new element node
//if theres an element after the new node point to that
//if not make null 
addAfter(newNumber, targetNumber){
if ()
}

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let arr = [];
    let current = this._head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let current = this._head;
    let previous = null;
    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this._head = previous;
    return this;
  }
}