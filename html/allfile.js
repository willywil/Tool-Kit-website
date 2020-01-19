$(document).ready(function(){
	$("#menu").append("<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>");
	$("#menu").append("<li id='mna'><a href='basics.html'>Basics</a></li>");
	$("#menu").append("<li id='mna'><a href='biological.html'>Biological</a></li>");
	$("#menu").append("<li id='mna'><a href='chemical.html'>Chemical</a></li>");
	$("#menu").append("<li id='mna'><a href='electrical.html'>Electrical</a></li>");
    $("#menu").append("<li id='mna'><a href='mechanical.html'>Mechanical</a></li>");
    
    $("#at_the_bottom").append('<li><a href="#" class="up">Go UP</a></li>');
    $("#at_the_bottom").append('<li><a href="https://www.tools4engineers.com/" class="by">Tools for Engineers</a></li>');
    $("#at_the_bottom").append('<li><a href="contact.html">Contact Us</a></li>');
    $("#at_the_bottom").append('<li><a><br>Copyright 2020 - www.tools4engineers.com</br></a></li>');
});