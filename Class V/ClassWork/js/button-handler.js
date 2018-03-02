/////////////////////////////////////////////////////////
// Author: Baris Cem Baykara
//
// Uncomment the lines for required fields to achive better user firendliness.
// In case you decide to do that, comment out the alert message in the FOR condition
// Marking the required fields are strongly recommended.
/////////////////////////////////////////////////////////

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