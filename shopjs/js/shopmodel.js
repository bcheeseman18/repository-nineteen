//homework

let State = require('ampersand-state'); 

module.exports = State.extend({

    props: {
        tires: 'number',
        paint: 'string',  
        exhaust: 'string', 
        horsepower: 'number', 
        mpg: 'number', 
        bill: 'number', 
    }, 

}); 