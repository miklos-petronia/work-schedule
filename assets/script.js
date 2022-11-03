function updateTimeSchedule() {
    let today = moment();

    $("currentDay").text(today.format("dddd,MMMM Do YYYY, h:mm.ss"));

// To color past, present, and future time schedule

    let now = moment().format("kk");
    for (let i = 0; i < TimeElArray.length; i++) {
        TimeElArray[i].removeClass("future past present ");

        if (now > TimeElArray[i].data("hour")) {
            scheduleElArray[i].addClass("past");

        } else if (now === TimeElArray[i].attr("hour")) {
            TimeElArray[i].addClass("present");


        } else {

            TimeElArray[i].addClass("future");
        }

    }
}


// textarea dimensions
let saveBtnn = $(".save-icon");
let containerEl = $(".container");
let Time9am = $("#9AM"); let Time10am = $("#10AM"); let Time11am = $("#11AM"); let Time12pm = $("#12PM"); let Time1pm = $("#1PM"); let Time2pm = $("#2PM"); let Time3pm = $("#3PM");let Time4pm = $("#4PM");let Time5pm = $("#5PM");

let TimeElArray = [
    Time9am, Time10am,Time11am,Time12pm,Time1pm,Time2pm, Time3pm,Time4pm, Time5pm,
];

Timeregister();
updateTimeSchedule();


// Time schedule saved in local storage

function Timeregister() {
    for (let el of TimeElArray) {
        el.val(localStorage.getItem("time block" + el.data("hour")));
    }
}

