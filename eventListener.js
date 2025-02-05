const EventManagement = require('./eventManagement');

const eventManager = new EventManagement();

eventManager.on('start', () => {
    console.log('Listener: Event has started.');
});

eventManager.on('in-progress', () => {
    console.log('Listener: Event is in progress.');
});

eventManager.on('completed', () => {
    console.log('Listener: Event has been completed.');
});

eventManager.start();
setTimeout(() => eventManager.inProgress(), 1000);
setTimeout(() => eventManager.completed(), 2000);
