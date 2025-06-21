class Acount {
    constructor(openingBalance) {
        this.balance = openingBalance ;
        this.minimumBalance = 10 ;

        
    }
    getBalance(){
        return this.balance ;
    }

    deposit(amount){
       this.balance +=amount;

    }
    withdrow(amount){
         if(amount <= this.balance){
            if((this.balance - amount) < (this.minimumBalance)){
                console.log("we cannot withdraow this amount")
            }
            else{
                 this.balance -= amount ;
            }
         }
     
    }
}

const jhoons = new Acount(100) ;
console.log(jhoons.getBalance());


jhoons.deposit(500);
console.log(jhoons.getBalance());

jhoons.withdrow(590);
console.log(jhoons.getBalance());
