// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  set diameter(diameter) {
    this.diameter;
  }  
  
  set circumference(circumference) {
    this.circumference;
  }  
  
  set area(area) {
    this._area = area;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
    return Math.PI * this.diameter;
  }
  
  get area() {
    return Math.PI * (this.radius * this.radius)
  }
}

// class Bird {
//   constructor(name) {
//     this.name = name;
//   }
 
//   set phrase(phrase) {
//     this._phrase = phrase;
//   }
 
//   get speak() {
//     return `${this.name} says ${this._phrase || 'squawk'}`;
//   }
// }