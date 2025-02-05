const os = require('os');

function logMemoryUsage() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

    console.log(`Total Memory: ${totalMemory} bytes`);
    console.log(`Used Memory: ${usedMemory} bytes`);
    console.log(`Free Memory: ${freeMemory} bytes`);
    console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
}

// Log memory usage every 5 seconds
setInterval(logMemoryUsage, 5000);
