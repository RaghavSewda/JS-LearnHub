
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(130);

function checkSpeed(Speed) {
    let speed = Math.floor((Speed-70)/5);
    if(speed <= 0 )  console.log('Ok');
    if(speed >= 12 ) console.log('License Suspended');
    if(speed < 12 && speed > 0)console.log(`${speed} Points`);
}