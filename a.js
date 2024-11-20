var medication=[];
var message=[];
var images=[];
var date=[];
var day=[];
medication.push(localStorage.getItem('medication'));
message.push(localStorage.getItem('message'));
images.push(localStorage.getItem('images'));
date.push(localStorage.getItem('date'));
day.push(localStorage.getItem('day'));
var tableBody=document.getElementById("tableBody");
    if (medication!=null & message!=null &images!=null & date!=null & day!=null) {
    var newRow=tableBody.insertRow();
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=medication;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=message;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=images;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=date;
    var cell5=newRow.insertCell(4);
    cell5.innerHTML=day;
    }