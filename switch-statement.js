// Switch

var gender = "M";

/* if (gender = "M") {
    console.log("Male");
} else if (gender = "F") {
    console.log("Femele");    
} else {
    console.log("can't exist");
} */

switch (gender) {
    case "M":
        console.log("Male");
        break;
    case "F":
        console.log("Female");
        break;
    default:
        console.log("can't exist")
        break;
}