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

setUpSchedule();