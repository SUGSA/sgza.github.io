/*======================================================================
*I am using this file to set the values to all the common components 
*as well as a single source of data values to reduce the number of 
*files needing to be changed each time one of the values is updated
======================================================================*/


/*==================
* 
*	Main menu 		
*
==================*/



//Main Menu Variables
var menuHome = " Home";
var menuSpeakers = "Speakers";
var menuSchedule = "Schedule";
var menuSponsors = "Sponsors";
var menuScrumAlliance = "ScrumAlliance";
var menuContact = "Contact";
var menuButton 	= "Sold Out ";

//Set menu items to the values used above
if (menuHome != null && document.getElementById("menuHome") != null) {
	document.getElementById("menuHome").innerHTML = menuHome;	
}

if (menuSpeakers != null && document.getElementById("menuSpeakers") != null) {
	document.getElementById("menuSpeakers").innerHTML = menuSpeakers;	
}

if (menuSchedule != null && document.getElementById("menuSchedule") != null) {
	document.getElementById("menuSchedule").innerHTML = menuSchedule;	
}

if (menuSponsors != null && document.getElementById("menuSponsors") != null) {
	document.getElementById("menuSponsors").innerHTML = menuSponsors;	
}

if (menuScrumAlliance != null && document.getElementById("menuScrumAlliance") != null) {
	document.getElementById("menuScrumAlliance").innerHTML = menuScrumAlliance;	
}

if (menuContact != null && document.getElementById("menuContact") != null) {
	document.getElementById("menuContact").innerHTML = menuContact;	
}

if (menuButton != null && document.getElementById("menuButton") != null) {
	document.getElementById("menuButton").innerHTML = menuButton;	
}
