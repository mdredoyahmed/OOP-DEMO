class Circle {
    constructor(radius){
        this.radius = radius ;

    }
    getarea(){
        const area = Math.PI * this.radius * this.radius ;
        return area;
    }
}

const khetrofall = new Circle(5) ;

console.log(khetrofall.getarea());

