const os = require('os');

function display() {
    const t = os.uptime();
    const days = Math.floor(t / (24 * 3600));
    const hours = Math.floor((t % 86400) / 3600);
    const minutes = Math.floor((t % 3600) / 60);
    const seconds = Math.floor(t % 60);
    console.log(`System uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
}

display();
