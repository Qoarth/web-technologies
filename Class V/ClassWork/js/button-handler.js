/////////////////////////////////////////////////////////
// Author: Baris Cem Baykara
//
// Uncomment the lines for required fields to achive better user firendliness in sendHandler().
// In case you decide to do that, comment out the whole IF - ELSE statement marked below and uncomment the other one.
// Marking the required fields are strongly recommended.
/////////////////////////////////////////////////////////

//Send button handler for onclick
function sendHandler() {

//MARK: Required Fields

//    document.getElementById("name").required = true;
//    document.getElementById("mail").required =  true;
//    document.getElementById("subject").required = true;
//    document.getElementById("comment").required = true;
    
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("comment").value;

    var contactField = {"Name": name, "Mail": mail, "Subject": subject, "Comment": message};

    for (var key in contactField){
        if (contactField[key]){
            delete contactField[key];
        }
    }

    // COMMENT: BAD BAD PRACTICE!! I WOULDN'T SHOW THIS IN AN ALERT MESSAGE
    // FOR THE SAKE OF THE CLASS WORK HER YOU GO--->
    //
    //MARK: Comment if .required = true

    if (Object.keys(contactField).length != 0) {
        alert("Oops! Did you forget to fill these fields?\n" + Object.keys(contactField));
    }else{
        alert("Name: " + name + "\nEmail: " + mail + "\nSubject: " + subject + "\nYour message is: " + message);
    }

    //MARK: Uncomment if .required = true
    //
    // if(Object.keys(contactField).length == 0) {
    //     alert("Name: " + name + "\nEmail: " + mail + "\nSubject: " + subject + "\nYour message is: " + message);
    // }

}

//Green button handler for onclick
function greenButtonHandler(){
    var button = document.getElementById("green-button");
    button.style.backgroundColor =  "#1e1e24";
    button.style.color = "#9b9bc4";
    button.innerHTML = "Aww, thanks for touching me <3";
}

//Blue button handler for onclick
function blueButtonHandler () {
    var button = document.getElementById("blue-button");
    button.href = "https://facebook.com/b.cembaykara";
}