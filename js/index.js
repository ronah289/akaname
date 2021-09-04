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
    var g = gender[0].checked? "female":"male";
    // error handler
    function error(){
        date = "check your date";
        month = "check your month";
        year = "check your year";
    }
    if(isNaN(year)|| isNaN(month)||isNaN(date)){
        error();
    }
    else if(year%4 ==0 || year % 400 == 0){
        Dates = [...Dates][1]=29;
        if(date >= 1 && date<=(Dates[month-1])){
            date = date;
            approvedDay = new Array(year,month,Day);
            alert(approvedDay);

        }
    }
    else{
        Dates = [...Dates];
        if(date >= 1 && date<=(Dates[month-1])){
            date = date;
            approvedDay = new Array(year,month,date);
            alert(approvedDay);
        }
    }
}