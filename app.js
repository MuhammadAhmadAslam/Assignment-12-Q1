let now = new Date();
let TimeZone
let weekArray = ['Sunday','Monday' , 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(`Today is: ${weekArray[now.getDay()]}`);
if (now.getHours() > 12) {
    TimeZone = 'PM'
    console.log(`Current Time: ${now.getHours()-12} ${TimeZone}: ${now.getMinutes()} : ${now.getSeconds()}`);
}else{
    TimeZone = 'AM'
    console.log(`Current Time: ${now.getHours()} ${TimeZone}`);
}