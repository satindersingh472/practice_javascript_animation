let d = new Date();
console.log(d);
let months;
let day = d.getDay();
console.log(day);

if (day === 0) {
    setInterval(sunday_box, 3000);
} else if (day === 1) {
    setInterval(monday_box, 3000);
} else if (day === 2){
    setInterval(tuesday_box, 3000);
}  else if (day === 3){
    setInterval(wednesday_box, 3000);
} else if (day === 4){
    setInterval(thursday_box, 3000);
}  else if (day === 5 ) {
    setInterval(friday_box , 3000 );
} else if (day === 6){
    setInterval(saturday_box, 3000);
}




let sunday = document.getElementById(`box_1`);
let monday = document.getElementById(`box_2`);

let wednesday = document.getElementById(`box_4`);
let thursday = document.getElementById(`box_5`);
let friday = document.getElementById(`box_6`);
let saturday = document.getElementById(`box_7`);

function sunday_box() {
    let sunday = document.getElementById(`box_1`);
    sunday[`style`][`height`] = `100px`;
    sunday[`style`][`width`] = `100px`;
    sunday[`style`][`backgroundColor`] = `purple`;
}
function monday_box() {
    let monday = document.getElementById(`box_2`);
    monday[`style`][`height`] = `100px`;
    monday[`style`][`width`] = `100px`;
    monday[`style`][`backgroundColor`] = `green`;
}
function tuesday_box() {
    let tuesday = document.getElementById(`box_3`);
    tuesday[`style`][`height`] = `100px`;
    tuesday[`style`][`width`] = `100px`;
    tuesday[`style`][`backgroundColor`] = `red`;
}
function wednesday_box() {
    let wednesday = document.getElementById(`box_4`);
    wednesday[`style`][`height`] = `100px`;
    wednesday[`style`][`width`] = `100px`;
    wednesday[`style`][`backgroundColor`] = `blue`;
}

function thursday_box(){
    let thursday = document.getElementById(`box_5`);
    thursday[`style`][`height`] = `100px`;
    thursday[`style`][`width`] = `100px`;
    thursday[`style`][`backgroundColor`] = `yellow`;
}
function friday_box(){
    let friday = document.getElementById(`box_6`);
    friday[`style`][`height`] = `100px`;
    friday[`style`][`width`] = `100px`;
    friday[`style`][`backgroundColor`] = `pink`;
}
function saturday_box(){
    let saturday = document.getElementById(`box_7`);
    saturday[`style`][`height`] = `100px`;
    saturday[`style`][`width`] = `100px`;
    saturday[`style`][`backgroundColor`] = `orange`;
}

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if (now.getHours() > hours ||
        (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function () { window.location.reload(true); }, timeout);
}

//refresh the page at 23:00:00
refreshAt(02, 00, 00);