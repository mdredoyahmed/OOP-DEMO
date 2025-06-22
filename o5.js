class Person{
  constructor(fname , lname ,age){
      this.firsst_name = fname ;
      this.last_name = lname ;
      if(age <= 0){
        throw new Error ("age must be greatterthen 0");
      }
       this.age = age ;
  }

  great(age){
    console.log(`Hello i am ${this.firsst_name} and ${this.last_name} i am ${this._age} years old`) ;
  }
  getFullName(){
    return this.firsst_name + " " +this.age + " " + this.last_name ;
  }

  set age(value){
    if( value <= 0 ){
      throw new Error("age mudt be getter then 0 ") ; 
    }
    this._age = value ;
  }
}

// const jhon = new Person("sumit vai ");
// jhon.last_name = "shakil" ;

const ahmed = new Person("meg" , "balika" , 45) ;
console.log(ahmed.great());
ahmed.age = 10;
ahmed.great()


