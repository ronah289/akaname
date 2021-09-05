function findName(){
    //outputs
    var see = document.getElementById("output");
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
    const male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    const female = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    // error handler
    function error(){
        return;
    }
    function errorDate(){
        alert("check date and resubmit to receive your name.");
    }
    function nameFinder(arrayName){
        if(arrayName.length != 4){
            error();
        }
        else if(arrayName[3] == 'male'){
            var Day = new Date(arrayName[0],(arrayName[1]-1),arrayName[2]);
            var index = Day.getDay();
            var nameAka = male[index];
            see.innerHTML = "Welcome\t"+nameAka;
        }
        else if(arrayName[3] == 'female'){
            var Day = new Date(arrayName[0],(arrayName[1]-1),arrayName[2]);
            var index = Day.getDay();
            var nameAka = female[index];
            see.innerHTML = "Welcome\t"+nameAka;
        }
        else{
            errorDate();
        }
    }
    if(isNaN(year)|| isNaN(month)||isNaN(date)){
        error();
    }
    else{
        year = (year.toString().length == 4)?year:error();
        month = (month >= 1 && month <=12)?month:error();
        if((year != error()) && (month != error())){
            if(year%4 ==0 || year % 400 == 0){
                // to do --- update new array
                Dates = [...Dates];
                Dates[1] = 29;
                date = (date >=1 && date <= Dates[month-1])?date:errorDate();
                approvedDay = new Array(year,month,date,genderHold);
                nameFinder(approvedDay);
            }
            else{
                Dates = [...Dates];
                date = (date >=1 && date <= Dates[month-1])?date:errorDate();
                approvedDay = new Array(year,month,date,genderHold);
                nameFinder(approvedDay);
            }

        }
        else{
            alert("try again");
        }
    }
}