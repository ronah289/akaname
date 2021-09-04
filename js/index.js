function findName(){
    // hold day
    var approvedDay;
    // dates
    var Dates = [31,28,31,30,31,30,31,31,30,31,30,31];
    // get input
    var date = document.getElementById("dateOfBirth").value;
    var month = document.getElementById("birthMonth").value;
    var year = document.getElementById("birthYear").value;
    var gender = document.getElementsByName("gender");
    var genderValue = gender[0].checked? "female":"male";
    var genderHold = genderValue;
    // error handler
    function error(){
        alert("check inputs!!!!");

    }
    if(isNaN(year)|| isNaN(month)||isNaN(date)){
        error();
    }
    else{
        year = (year.toString().length == 4)?year:error();
        month = (month >= 1 && month <=12)?month:error();
        date = (date >=1 && date <= Dates[month-1])?date:error();
        if(year%4 ==0 || year % 400 == 0){
            Dates = [...Dates][1]=29;
            approvedDay = new Array(year,month,date,genderHold);
            alert(approvedDay);
        }
        else{
            Dates = [...Dates];
            approvedDay = new Array(year,month,date,genderHold);
            alert(approvedDay);
        }
    }
}