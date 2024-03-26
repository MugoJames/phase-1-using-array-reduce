const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((P,C) => {
    return P + C;

},0);
console.log(sum);