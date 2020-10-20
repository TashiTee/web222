/*
    Student Name: Tashi Tsering
    student # 114763170
    date: December 5, 2018
    ttsering11@myseneca.ca
*/

function valName(name) {
    // Checks if name is empty
    if (name.length == 0) {
        return false;
    }
    if (name.charAt(0) < 'A' || name.charAt(0) > 'Z') {
        return false;
    }
    for (var i = 1; i < name.length; i++) {
        if (name.toUpperCase().charAt(i) < 'A' || name.toUpperCase().charAt(i) > 'Z') {
            return false;
        }
    }
    return true;
}

function valPwd(password) {

    if (password.length < 6) {
        return false;
    }
    var firstChar = password.toUpperCase().charAt(0);  // Converts the password to upper case for case-insensitive comparison.
    if (firstChar < 'A' || firstChar > 'Z') {
        return false;
    }
    var upperPw = false, digitPw = false;

    for (var i = 0; i < password.length; i++) {
        var charTxt = password.substring(i, i + 1);
        if (charTxt == charTxt.toUpperCase() && charTxt.toUpperCase().charAt(0) >= 'A' && charTxt.toUpperCase().charAt(0) <= 'Z')  {
            upperPw = true;
        } else if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
            digitPw = true;
        }
        if (upperPw && digitPw) {
            return true;
        }
    }
    return false;
}
function valUsername(username) {

    if (username.length < 6) {
        return false;
    }

    var firstChar = username.toUpperCase().charAt(0);
    return firstChar >= 'A' && firstChar <= 'Z';
}

var msgErrorCount = 0;
function valSignup(signupForm) {
    var valid = true;
    var indexCount = 0;
    var sidePanelDom = document.getElementById("side_panel");

    // Index 0 is first name field, 1 is last name, 2 is the password, 3 is username
    for (var i in signupForm.elements) {
        var element = signupForm.elements[i];
        var msgError = null;

        switch (indexCount++) {
            case 0:

            case 1:
            valid = valName(element.value);
            if (!valid) {
                msgError = document.createTextNode("The input name is invalid.");
            }
            break;

            case 2:
            valid = valPwd(element.value);
            if (!valid) {
                msgError = document.createTextNode("The input password is invalid.");
            }
            break;

            case 3:
            valid = valUsername(element.value);
            if (!valid) {
                msgError = document.createTextNode("The inputted username is invalid.");
            }
            break;
            default:
            break;
        }

        if (msgError != null) {
            // only 8 error messages allowed
            if (msgErrorCount >= 8) {
                // Remove the old error text and the <br/> tag at index 3 to avoid removing the Side panel text and <br/> tag:
                sidePanelDom.removeChild(sidePanelDom.childNodes[3]);
                sidePanelDom.removeChild(sidePanelDom.childNodes[3]);
                --msgErrorCount;
            }
            sidePanelDom.appendChild(msgError);
            sidePanelDom.appendChild(document.createElement("br"));  //  new line break for error message.
            ++msgErrorCount;
        }
        if (!valid) {
            return false;  // Exits loop to display one error at a time.
        }
    }
    return true;
};