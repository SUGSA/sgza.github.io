/*======================================================================
I am using this file to set the values to all the common components 
*as well as a single source of data values to reduce the number of 
*files needing to be changed each time one of the values is updated
======================================================================*/

//Main Menu Variables
var menuHome = " Home";
var menuSpeakers = "Speakers";
var menuSchedule = "Schedule";
var menuSponsors = "Sponsors";
var menuScrumAlliance = "Scrum Alliance";
var menuContact = "Contact";
var menuButton 	= "Buy Tickets ";

//Set menu items to the values used above
document.getElementById("menuHome").innerHTML = menuHome;
document.getElementById("menuSpeakers").innerHTML = menuSpeakers;
document.getElementById("menuSchedule").innerHTML = menuSchedule;
document.getElementById("menuSponsors").innerHTML = menuSponsors;
document.getElementById("menuScrumAlliance").innerHTML = menuScrumAlliance;
document.getElementById("menuContact").innerHTML = menuContact;
document.getElementById("menuButton").innerHTML = menuButton;
