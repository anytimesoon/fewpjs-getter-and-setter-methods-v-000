// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  set diameter(diameter) {
    this._diameter = diameter;
  }  
  
  set circumference(circumference) {
    this._circumference = circumference;
  }  
  
  set area(area) {
    this._area = area;
  }
  
  get diameter() {
    
  }
  
  get circumference() {
    
  }
  
  get area() {
    
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