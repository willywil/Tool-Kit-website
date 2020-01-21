$(document).ready(function(){
    $("#homePage").append("<strong><a href='https://www.tools4engineers.com'>HOME</a></strong>");
    
    $("#homePage").append("<strong><a href='https://www.patreon.com/bePatron?u=28018358' data-patreon-widget-type='become-patron-button'>Become a Patron!</a></strong>");
   
    $("#homePage").append('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">');
    $("#homePage").append('<input type="hidden" name="cmd" value="_s-xclick" />');
    $("#homePage").append('<input type="hidden" name="hosted_button_id" value="4K8Q49JZ5TLPS" />');
    $("#homePage").append('<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />');
    $("#homePage").append('<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />    PayPal  </form>');
    
    
    
    $("#menu").append("<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>");
    $("#menu").append("<li id='mna'><a href='aerospace.html'>Aerospace</a></li>");
	$("#menu").append("<li id='mna'><a href='basics.html'>Basics</a></li>");
	$("#menu").append("<li id='mna'><a href='biological.html'>Biological</a></li>");
	$("#menu").append("<li id='mna'><a href='chemical.html'>Chemical</a></li>");
	$("#menu").append("<li id='mna'><a href='electrical.html'>Electrical</a></li>");
    $("#menu").append("<li id='mna'><a href='mechanical.html'>Mechanical</a></li>");
    
   
    $("#at_the_bottom").append('<li><a href="#" class="up">Go UP</a></li>');
    $("#at_the_bottom").append('<li><a href="https://www.tools4engineers.com/" class="by">Tools for Engineers</a></li>');
    $("#at_the_bottom").append('<li><a href="feedback-form-in-html/formpage.html">Contact Us</a></li>');
    $("#at_the_bottom").append('<li><a href="termofuse.html">Terms of Use</a></li>');
    $("#at_the_bottom").append('<li><a href="privacy.html">Privacy Policy</a></li>');
    $("#at_the_bottom").append('<li><a><br>Copyright 2020 - www.tools4engineers.com</br></a></li>');
});