function findName(){
    // get input
    var date = document.getElementById("dateOfBirth").value;
    var month = document.getElementById("birthMonth").value;
    var year = document.getElementById("birthYear").value;
    var gender = document.getElementsByName("gender");
    var g = gender[0].checked? "female":"male";
    console.log(g);
}