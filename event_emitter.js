const events = require('events');
const name="Shiny";
const age=20;
const my=new events.EventEmitter();
my.on("userDetails",(name,age)=>{
    console.log(`Hello ${name}! You are ${age} years old.`);
    });
my.emit("userDetails",name,age);