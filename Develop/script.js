var savedText = []
var NineAMText = $("#9am");
var TenAMText = $("#10am");
var ElevenAMText = $("#11am");
var TwelvePMText = $("#12pm");
var OnePMText = $("#1pm");
var TwoPMText = $("#2pm");
var ThreePMText = $("#3pm");
var FourPMText = $("#4pm");
var FivePMText = $("#5pm");
var currentDay = $("#currentDay")
var allHourTexts = [NineAMText, TenAMText, ElevenAMText, TwelvePMText, OnePMText, TwoPMText, ThreePMText, FourPMText, FivePMText];


$(document).on("click", ".saveBtn", save);

function save() {
    var numberButtonPressed = $(this).attr("id");
    numberButtonPressed = parseInt(numberButtonPressed);
    // console.log(NineAMText.val());
    // console.log(NineAMText.val() === "");
    var thisHourText = allHourTexts[numberButtonPressed].val();
    if (localStorage.getItem("savedSchedule")) {
        var newSchedule = JSON.parse(localStorage.getItem("savedSchedule"));
        newSchedule[numberButtonPressed] = thisHourText;
        localStorage.setItem("savedSchedule", JSON.stringify(newSchedule));
    } else {
        newSchedule = ["","","","","","","","",""]
        newSchedule[numberButtonPressed] = thisHourText;
        localStorage.setItem("savedSchedule", JSON.stringify(newSchedule));
    }
    console.log(localStorage.getItem("savedSchedule"));
}

function setUpSchedule() {
    if (!localStorage.getItem("savedSchedule")) {
        return;
    }
    var currentSchedule = JSON.parse(localStorage.getItem("savedSchedule"));
    for (i = 0; i < currentSchedule.length; i += 1) {
        var hourText = currentSchedule[i];
        allHourTexts[i].val(hourText);
    }
}

function updateTime() {
    currentDay.html(moment().format("dddd, MMMM Do"));
    console.log(currentDay.val());
    var currentHourIndex = moment().hour() - 9;
    setBackgroundColors(currentHourIndex);
}

function setBackgroundColors(currentHourIndex) {
    for (i = 0; i < allHourTexts.length; i += 1) {
        if (i < currentHourIndex) {
            allHourTexts[i].css("background-color", "grey");
        } else if (i === currentHourIndex) {
            allHourTexts[i].css("background-color", "red");
        } else {
            allHourTexts[i].css("background-color", "green");
        }
    }
}

setUpSchedule();
setInterval(updateTime, 1000);
updateTime();