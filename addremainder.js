function Add() {
    var medication=document.getElementById("medication").value;
    var message=document.getElementById("message").value;
    var images=document.getElementById('images');
    var date=document.getElementById('date').value;
    var day=document=document.getElementById("day").value;
    localStorage.setItem('medication',medication);
    localStorage.setItem('message',message);
    localStorage.setItem('images',images);
    localStorage.setItem('date',date);
    localStorage.setItem('day',day);
}