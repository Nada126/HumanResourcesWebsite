// JavaScript source code
function search() {
    var ddlFruits = document.getElementById("emp");
    if (ddlFruits.value == "") {
        
        alert("Please select the employee!");
    }
    else {
        location.href = "VacatoinForm.html";
	}
}
