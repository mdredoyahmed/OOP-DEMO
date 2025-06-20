const person = {
    fname:"hridoy",
    lname:"ratul",
    getFullName: function(){
        return this.fname + " " + this.lname 
    }
}

person.lname = "ahmed";
console.log(person)

console.log(person.getFullName());