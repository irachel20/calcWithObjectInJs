const calculator = {

    firstNumber:0,
    secondNumber:0,
    result:0,


    addition:function() {
        this.result = (this.firstNumber + this.secondNumber) ;
    },

    subtraction:function() {
        this.result = (this.firstNumber - this.secondNumber) ;
    },

    multiplication:function() {
        this.result = (this.firstNumber * this.secondNumber) ;
    },
    
    division:function() {
        this.result = (this.firstNumber / this.secondNumber) ;
    }

};

calculator.firstNumber= 12;
calculator.secondNumber=2;

calculator.division();

console.log(calculator.result);