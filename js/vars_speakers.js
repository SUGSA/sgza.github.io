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
var menuScrumAlliance = "Scrum Alliance";
var menuContact = "Contact";
var menuButton 	= "Sold Out ";

//Set menu items to the values used above
document.getElementById("menuHome").innerHTML = menuHome;
document.getElementById("menuSpeakers").innerHTML = menuSpeakers;
document.getElementById("menuSchedule").innerHTML = menuSchedule;
document.getElementById("menuSponsors").innerHTML = menuSponsors;
document.getElementById("menuScrumAlliance").innerHTML = menuScrumAlliance;
document.getElementById("menuContact").innerHTML = menuContact;
document.getElementById("menuButton").innerHTML = menuButton;


/*==================
* 
*	Speakers 		
*
==================*/


//Speaker Variables
var Keynote1_Name = "Natalie Warnert";
var Keynote1_Role = "Independent Consultant"
var Keynote1_About = "<p>Natalie Warnert is founder, president and executive director of Women in Agile Org, a nonprofit which enables, empowers, and expands the distribution of new and diverse ideas in the agile and technology communities worldwide. She is a frequent speaker on business and agile topics including product strategy, user experience, and emotional intelligence. Her strategy focuses on actions you can implement tomorrow for immediate impact that track toward longer-term vision and outcomes. Natalie also brings unparalleled humor to all her engagements (or so she thinks).</p><p>Natalie is passionate about guiding companies as they design, execute, and support their approach to cultural change as an independent consultant at her company, Natalie Warnert LLC. Her vast thought leadership experience is recognized by her numerous keynotes, podcasts, and publications including being a SAFe framework contributor and creator of the UX Runway. Natalie has earned various degrees and certifications over the past decade including her Master of Arts in Organizational Leadership, SAFe Program Consultant, Certified Scrum Professional, and Six Sigma Yellow Belt.</p>"
var Keynote1_Topic = ""

var Keynote2_Name = "Makibinyane Mohapeloa";
var Keynote2_Role = "Professional Entrepreneur"
var keynote2_About = "";
var Keynote2_Topic = "";

var Speaker1_Name = "";
var Speaker1_Topic = "";

var Speaker2_Name = "";
var Speaker2_Topic = "";

var Speaker3_Name = "";
var Speaker3_Topic = "";

var Speaker4_Name = "";
var Speaker4_Topic = "";

var Speaker5_Name = "";
var Speaker5_Topic = "";

var Speaker6_Name = "";
var Speaker6_Topic = "";

var Speaker7_Name = "";
var Speaker7_Topic = "";

var Speaker8_Name = "";
var Speaker8_Topic = "";

var Speaker9_Name = "";
var Speaker9_Topic = "";

var Speaker10_Name = "";
var Speaker10_Topic = "";

var Speaker11_Name = "";
var Speaker11_Topic = "";

var Speaker12_Name = "";
var Speaker12_Topic = "";

var Speaker13_Name = "";
var Speaker13_Topic = "";

var Speaker14_Name = "";
var Speaker14_Topic = "";

var Speaker15_Name = "";
var Speaker15_Topic = "";

var Speaker16_Name = "";
var Speaker16_Topic = "";

var Speaker17_Name = "";
var Speaker17_Topic = "";

var Speaker18_Name = "";
var Speaker18_Topic = "";

var Speaker19_Name = "";
var Speaker19_Topic = "";

var Speaker20_Name = "";
var Speaker0_Topic = "";

var Speaker21_Name = "";
var Speaker21_Topic = "";

var Speaker22_Name = "";
var Speaker22_Topic = "";

var Speaker23_Name = "";
var Speaker23_Topic = "";

var Speaker24_Name = "";
var Speaker24_Topic = "";

var Speaker25_Name = "";
var Speaker25_Topic = "";

var Speaker26_Name = "";
var Speaker26_Topic = "";

var Speaker27_Name = "";
var Speaker27_Topic = "";

var Speaker28_Name = "";
var Speaker28_Topic = "";

var Speaker29_Name = "";
var Speaker29_Topic = "";

var Speaker30_Name = "";
var Speaker30_Topic = "";

//Set speaker names to the values used above
document.getElementById("Keynote1_Name").innerHTML = Keynote1_Name;
document.getElementById("Keynote2_Name").innerHTML = Keynote2_Name;

//Set speaker roles to the values used above
document.getElementById("Keynote1_Role").innerHTML = Keynote1_Role;
document.getElementById("Keynote2_Role").innerHTML = Keynote2_Role;

//Speaker count
var speakersList = [
	Keynote1_Name,
	Keynote2_Name,
	//Speaker1_Name,
	//Speaker2_Name,
	//Speaker3_Name,
	//Speaker4_Name,
	//Speaker5_Name,
	//Speaker6_Name,
	//Speaker7_Name,
	//Speaker8_Name,
	//Speaker9_Name,
	//Speaker10_Name,
	//Speaker11_Name,
	//Speaker12_Name,
	//Speaker13_Name,
	//Speaker14_Name,
	//Speaker15_Name,
	//Speaker16_Name,
	//Speaker17_Name,
	//Speaker18_Name,
	//Speaker19_Name,
	//Speaker20_Name,
	//Speaker21_Name,
	//Speaker22_Name,
	//Speaker23_Name,
	//Speaker24_Name,
	//Speaker25_Name,
	//Speaker26_Name,
	//Speaker27_Name,
	//Speaker28_Name,
	//Speaker29_Name,
	//Speaker30_Name
]

var speakerCount = speakersList.length;
document.getElementById("speakerNumber").setAttribute("data-number", speakerCount);

//Topic count
var topicList = [
	Keynote1_Topic,
	Keynote2_Topic,
	//Speaker1_Topic,
	//Speaker2_Topic,
	//Speaker3_Topic,
	//Speaker4_Topic,
	//Speaker5_Topic,
	//Speaker6_Topic,
	//Speaker7_Topic,
	//Speaker8_Topic,
	//Speaker9_Topic,
	//Speaker10_Topic,
	//Speaker11_Topic,
	//Speaker12_Topic,
	//Speaker13_Topic,
	//Speaker14_Topic,
	//Speaker15_Topic,
	//Speaker16_Topic,
	//Speaker17_Topic,
	//Speaker18_Topic,
	//Speaker19_Topic,
	//Speaker20_Topic,
	//Speaker21_Topic,
	//Speaker22_Topic,
	//Speaker23_Topic,
	//Speaker24_Topic,
	//Speaker25_Topic,
	//Speaker26_Topic,
	//Speaker27_Topic,
	//Speaker28_Topic,
	//Speaker29_Topic,
	//Speaker30_Topic
]

var topicCount = topicList.length;
document.getElementById("topicNumber").setAttribute("data-number", topicCount);


/*==================
* 
*	Sponsors 		
*
==================*/


//Sponsor Variables
var Sponsor1_Name = "Scrum Alliance";
var Sponsor2_Name = "Think Agile";
var Sponsor3_Name = "IQbusiness";
var Sponsor4_Name = "agile42";
//var Sponsor5_Name = "";
//var Sponsor6_Name = "";
//var Sponsor7_Name = "";
//var Sponsor8_Name = "";
//var Sponsor9_Name = "";
//var Sponsor10_Name = "";

//Speaker count
var sponsorsList = [
	Sponsor1_Name,
	Sponsor2_Name,
	Sponsor3_Name,
	Sponsor4_Name,
//	Sponsor5_Name,
//	Sponsor6_Name,
//	Sponsor7_Name,
//	Sponsor8_Name,
//	Sponsor9_Name,
//	Sponsor10_Name
]

var sponsorCount = sponsorsList.length;
document.getElementById("sponsorNumber").setAttribute("data-number", sponsorCount);


