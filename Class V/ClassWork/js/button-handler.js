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

    var contactFields = [name, mail, subject, message];

    for (var i = 0; i < contactFields.length; i++){
        if (!contactFields[i]){
            //Comment the line below if set required fields
            alert("All fields need to be filled");
            return;
        }
    }
    alert("Name: " + name + "\nEmail: " + mail + "\nSubject: " + subject + "\nYour message is: " + message);
}