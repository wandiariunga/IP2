    //Enter my birthday through a form 
    //Choose what gender I am.
    //Click the submit button to see what my Akan name would be
    //CC - is the century digits. For example 1989 has CC = 19
    //YY - is the Year digits (1989 has YY = 89)
    //MM -  is the Month
    //DD - is the Day of the month 
    //mod - is the modulus function ( % )

    //var dob = document.getElementById("dob");
    //var gender = document.getElementById("gender");

    //var date = element = document.getElementById(date);
   // var month = element = document.getElementById(month);
    //var year = element = document.getElementById(year);
    
    function calculate()
{
    var gen = document.getElementById("gender").value;
    var field1 = document.getElementById("day").value;
    var field2 = document.getElementById("month").value;
    var field3 = document.getElementById("year").value;
    var field4 = document.getElementById("year").value;
    var field5 = field4[0]+field4[1];
    var field6 = field4[2]+field4[3];
    var result =parseInt(field1)+parseInt(field2)+parseInt(field5)+parseInt(field6); 
   dayofWeekx  = Math.round(((field5/4) -2*field5-1) + ((5*field6/4) ) + ((26*(field2+1)/10)) + field1 );
    dayofWeek = dayofWeekx%7;

let names = [{"gender":"male", "tarehe":0, "akan":"Kwasi"},
{"gender":"male", "tarehe":1, "akan":"Kwadwo"},
{"gender":"male", "tarehe":2, "akan":"Kwabena"},
{"gender":"male", "tarehe":3, "akan":"Kwaku"},
{"gender":"male", "tarehe":4, "akan":"Yao"},
{"gender":"male", "tarehe":5, "akan":"Kofi"},
{"gender":"male", "tarehe":6, "akan":"Kwame"},
{"gender":"female", "tarehe":0, "akan":"Akosua"},
{"gender":"female", "tarehe":1, "akan":"Adwoa"},
{"gender":"female", "tarehe":2, "akan":"Abeenaa"},
{"gender":"female", "tarehe":3, "akan":"Akua"},
{"gender":"female", "tarehe":4, "akan":"Yaa"},
{"gender":"female", "tarehe":5, "akan":"Afua"},
{"gender":"female", "tarehe":6, "akan":"Ama"}
]

let name = names.find(name => name.gender === gen && name.tarehe === dayofWeek);

if(!isNaN(result))
{
document.getElementById("answer").innerHTML="The day of birth falls on the "+ dayofWeek+" day of the week, calculated as mod 7 of  " + dayofWeekx + " .The formula results in the number " +result + " which takes into consideration the first two digits of the year " + field5 + " and the last two digits of the year " + field6 + " of the gender " + gen +". Your Akan name is " + name["akan"];
}
}

   