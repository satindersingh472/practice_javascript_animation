let d = new Date();
console.log(d);
let months;
let day = d.getDay();
console.log(day);

if (day === 2){
    setInterval(tuesday_box , 2000);
} else if (day === 3) {
setInterval(wednesday_box , 3000);
}




let sunday = document.getElementById(`box_1`);
let monday = document.getElementById(`box_2`);

let wednesday = document.getElementById(`box_4`);
let thursday = document.getElementById(`box_5`);
let friday = document.getElementById(`box_6`);
let saturday = document.getElementById(`box_7`);
 
function tuesday_box(){
    let tuesday = document.getElementById(`box_3`);
    tuesday[`style`][`height`] =`100px`;
    tuesday[`style`][`width`] =`100px`;
    tuesday[`style`][`backgroundColor`] = `purple`;
}
function wednesday_box(){
    let tuesday = document.getElementById(`box_4`);
    tuesday[`style`][`height`] =`100px`;
    tuesday[`style`][`width`] =`100px`;
    tuesday[`style`][`backgroundColor`] = `green`;
}

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
        (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

//refresh the page at 23:00:00
refreshAt(23,00,00);