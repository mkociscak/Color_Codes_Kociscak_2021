


function validateForms() {



    let canyouans = document.getElementById("canyou").value;

    if (canyouans == "") {
        alert("Please type yes or no");
    } else if (canyouans == "yes") {
        alert("Yeah! This is NEAT!");
    } else if (canyouans == "no") {
        alert("That's okay, try again");


}