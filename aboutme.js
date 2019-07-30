alert("yktv welcome to my JavaScript page");

function makeImageBig(x) {
    x.style.width = "500px"
}

function makeImageOriginalSize(x) {
   x.style.width = "130px"
}

function showHideSection(section) {
    var showHideSection = document.getElementById(section);
    if (showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("placesButton").innerHTML = "HIDE PLACES";
    } else {
        showHideSection.style.display = "none";
        document.getElementById("placesButton").innerHTML = "SHOW PLACES";
    }
}
