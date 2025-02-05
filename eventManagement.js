const events = require('events');

class EventManagement extends events.EventEmitter {
    start() {
        console.log('Event started');
        this.emit('start');
    }

    inProgress() {
        console.log('Event in progress');
        this.emit('in-progress');
    }

    completed() {
        console.log('Event completed');
        this.emit('completed');
    }
}

module.exports = EventManagement;
