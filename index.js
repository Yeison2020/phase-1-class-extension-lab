
class Polygon {
    constructor(count){
        this.count = count;
    }

    get countSides (){

        return this.count.length;


    }

    get perimeter(){
        let counter = 0;
        for(let i of this.count){
            counter+= i;
        }

        return counter;



        

        

    }


}




class Triangle extends Polygon {

    get isValid () {
        if(this.count[0] + this.count[1] > this.count[2]){
            return true;
        } return false

    }

 

 

}

class Square extends Polygon{

    constructor(base,height){
        super(base,height)
        this.base= base;
        this.height = height;
    }
    get isValid (){

        for(let i of this.data){
            if(i === i){
                return true
            } return false;
        }

    }


    get area(){
        return (this.base * this.height) / 2

    }

}


