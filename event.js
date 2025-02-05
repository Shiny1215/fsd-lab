const events=require('events');
const my=new events.EventEmitter();
my.on('myEvent',function listener(){
    console.log('myevent emitted first time');
    my.removeListener('myEvent',listener);
});
my.emit('myEvent');
my.emit('myEvent');
my.emit('myEvent');
