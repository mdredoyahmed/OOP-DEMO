// oop demo 


class Person{
  constructor(fname , lname){
      this.firsst_name = fname ;
      this.last_name = lname ;
  }
  getFullName(){
    return this.firsst_name + " " + this.last_name ;
  }
}

// const jhon = new Person("sumit vai ");
// jhon.last_name = "shakil" ;

const ahmed = new Person("meg" , "balika") ;
const Hridoy = new Person("kuddos" , "molla") ;
console.log(ahmed.getFullName());
console.log(Hridoy.getFullName());

console.log(jhon.getFullName());
