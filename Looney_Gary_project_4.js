//Gary W. Hunter Looney
//SDI Project 4



var looneyLibrary = function () {	
	//	String Section
	//	1)Does a string follow a 123-456-7890 pattern like a 
	//  phone number?
	var isItAPhoneNumber = function (num) {
		var thisIsAPhoneNumberFormat = "012-456-8901"
		if (num.length === thisIsAPhoneNumberFormat.length && num.charAt(3) === "-" && num.charAt(7) === "-") {
			return true
		} else {
			return false
		}
	};
	
	//I created isItAPhoneNumberOther after I learned isNaN. So this is probably more right.
	var isItAPhoneNumberOther = function(num) {
	    if (num.length !== 12) {return false};
	    if (isNaN(num.charAt(0))) {return false};
	    if (isNaN(num.charAt(1))) {return false};
	    if (isNaN(num.charAt(2))) {return false};
	    if (num.charAt(3) != "-") {return false};
	    if (isNaN(num.charAt(4))) {return false};
	    if (isNaN(num.charAt(5))) {return false};
	    if (isNaN(num.charAt(6))) {return false};
    	if (num.charAt(7) != "-") {return false};
    	if (isNaN(num.charAt(8))) {return false};
    	if (isNaN(num.charAt(9))) {return false};
    	if (isNaN(num.charAt(10))) {return false};
	    if (isNaN(num.charAt(11))) {return false};
  	  return true
	};
	
	
	
	//	2)Does a string follow an aaa@bbb.ccc pattern like 
	//  an email address?
    var isItAnEmail = function (testEmail) {
        var testEmailLength = testEmail.length
            if (testEmail.indexOf("@") == 0, 
            	testEmail.indexOf("@") == -1, 
            	testEmail.indexOf("@") !== testEmail.lastIndexOf("@"), 
            	testEmail.indexOf("@") === testEmailLength - 1, 
            	testEmail.lastIndexOf(".") === testEmailLength -2,  
            	testEmail.lastIndexOf(".") == -1, 
            	testEmail.lastIndexOf(".") === testEmailLength -1, 
            	testEmail.indexOf("@") === testEmail.lastIndexOf(".") -1, 
            	testEmail.indexOf("@") === testEmail.indexOf(".") -1) { //I think this is all I should test
                	return false
            } else {
                	return true
            }
    };

	//	3)Is the string a URL? (Does it start with http: or 
	//  https:?)

    var isItAnURL = function (testURL)  {
        var urlHTTPScheck = testURL.slice(0,8)
        var urlHTTPcheck = testURL.slice(0,7)
        if (urlHTTPScheck.contains("https://"), 
        	urlHTTPcheck.contains("http://")) {
            return true;
        } else {
            return false;
        }    
    };

	//	4)Title-case a string (split into words, then 
	//  uppercase the first letter of each word)

    var upperCaseTheWords = function(inputSentence) {
        var finishedSentence = [];
        var wordSeperate = inputSentence.split(" ");
        for (var i = 0; i < wordSeperate.length; i++){
            var upperCase = wordSeperate[i].charAt(0),
            	upperCaseWords = upperCase.toUpperCase(),
           		lowerCase = wordSeperate[i].slice(1),
            	lowerCaseWords = lowerCase.toLowerCase();
            finishedSentence.push(upperCaseWords + lowerCaseWords);
        };
    	return finishedSentence.join(" ");
    };
 
	//	5)Given a string that is a list of things separated 
	// 		 by a given string, as well as another string separator,
	// 		 return a string with the first separator changed to 
	// 		 the second: "a,b,c" + "," + "/" → "a/b/c".
    var changeTheSeperatorsInAString = function (currentSeparator, inputedString, newSeparator) {
		var seperateTheString = inputedString.split(currentSeparator),
    		putTheStringBackTogether = seperateTheString.join (newSeparator);
    	return putTheStringBackTogether;
    };
 
	//Number
	//	6)Format a number to use a specific number of decimal 
	//	places, as for money: 2.1 → 2.10
	
	var numberCertainDecimalPlaces = function (decimalPlaces, enteredNumber) {
        var fixedNumberOfDecimalPlaces = enteredNumber.toFixed(decimalPlaces)
    	return fixedNumberOfDecimalPlaces
    };

	//	7)Fuzzy-match a number: is the number above or below a 
	//	number within a certain percent?



	//	8)Find the number of hours or days difference between two dates.
    var amountOfHoursBetweenDates = function (firstDate, secondDate) {
        var hoursInDay = 24;
        if (secondDate.getTime() === firstDate.getTime()){
            return false;
        } else {
            var dateDifference = (secondDate.getDate() - firstDate.getDate())
        };        
        if (dateDifference !== 0) {
             var hoursLeft = dateDifference * hoursInDay
             var returnHour = hoursLeft + " hours";
        } else {
            var returnHour = " 0 hours";
        };
		return returnHour
    };

	//	9)Given a string version of a number such as "42", 
	//	return the value as an actual Number, such as 42.
    var numberFromString = function(stringNumber) {
	    var outputNumber = Number(stringNumber)
        if (isNaN(stringNumber)) { //Not A Number is very useful
            return outputNumber = "Not a Number!"
        } else {
            return outputNumber
        }
    };

	//	Array
	//	10)Find the smallest value in an array that is greater 
	//	than a given number

	//	11)Find the total value of just the numbers in an array, 
	//	even if some of the items are not numbers.

	//	12)Given an array of objects and the name of a key, return the array 
	//	sorted by the value of that key in each of the objects: 
	//	"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
    var sortObjectsInArray = function(input, key) {
        var actualSortingOfObjects = input
        actualSortingOfObjects.sort(function(a, b) {
            return a[key] - b[key];
        });
    	return actualSortingOfObjects
    	};
    
    return {
        "isItAPhoneNumber": isItAPhoneNumber,
        "isItAPhoneNumberOther": isItAPhoneNumberOther,
        "isItAnEmail": isItAnEmail,
        "isItAnURL": isItAnURL,
        "upperCaseTheWords": upperCaseTheWords,
        "changeTheSeperatorsInAString": changeTheSeperatorsInAString,
        "numberCertainDecimalPlaces": numberCertainDecimalPlaces,
        //7
        "amountOfHoursBetweenDates": amountOfHoursBetweenDates,
        "numberFromString": numberFromString,
        //10
        //11
        "sortObjectsInArray": sortObjectsInArray
    }; 
};
//Run My Library 
var looneyLibRun = looneyLibrary();
// 1. String follow Phone Number pattern //Call
console.log ("Is the phone number entered as a string a valid phone number pattern: " + looneyLibRun.isItAPhoneNumber("777-888-9999"));  
console.log ("Is the phone number entered as a string a valid phone number pattern: " + looneyLibRun.isItAPhoneNumber("77-888-9999"));
console.log ("Is the phone number entered as a string a valid phone number pattern: " + looneyLibRun.isItAPhoneNumberOther("777-888-9999"));  
console.log ("Is the phone number entered as a string a valid phone number pattern: " + looneyLibRun.isItAPhoneNumberOther("77-888-9999"));   
// 2. String follow Email pattern //Call
console.log ("Is the email entered as a string a valid email pattern: " + looneyLibRun.isItAnEmail("hunterlooney72@yahoo.com"));
console.log ("Is the email entered as a string a valid email pattern: " + looneyLibRun.isItAnEmail("@.edu"));
// 3. String a URL? http: or https: //Call
console.log ("Is the URL entered as a string a valid URL pattern: " + looneyLibRun.isItAnURL("http://www.hunterisawesome.edu"));
console.log ("Is the URL entered as a string a valid URL pattern: " + looneyLibRun.isItAnURL("ht://www.hunterisawesome.edu"));
// 4. Uppercase First Letter Of Each Word //Call
console.log ("The sentence\"if this works then each of the words will be uppercased!\": " + looneyLibRun.upperCaseTheWords("if this works then each of the words will be uppercased!"));
// 5. Change separators in a string //Call
console.log ("Orginal: i/T/w/O/r/K/s/W/h/E/n/T/h/I/s/H/a/S/c/O/l/O/n/S Changed: " + looneyLibRun.changeTheSeperatorsInAString("/", "i/T/w/O/r/K/s/W/h/E/n/T/h/I/s/H/a/S/c/O/l/O/n/S", ":"));
// 6. Format a number to use a specific number of decimal places //Call
console.log (looneyLibRun.numberCertainDecimalPlaces(3, 3.14159265359));
// 7. Number within a certain percent //Call

// 8. Find hours or days between two dates //Call
console.log (looneyLibRun.amountOfHoursBetweenDates(new Date(2013, 3, 28), new Date(2013, 4, 1)));
// 9. Return number from string //Call
console.log (looneyLibRun.numberFromString("72"));
//10. In Array find the smallest value greater than certain number //Call

//11. Find total of numbers in array even if some aren't numbers //Call

//12. Array of objects sort //Call
//Array sorter call
console.log (looneyLibRun.sortObjectsInArray([{p:3}, {p:1}, {p:5}, {p:4}, {p:2}], "p"));


//Make-up
/*
// You may use this assignment to make up some of what you 
// lost on points for the first three assignments:

// Implement all twelve functions above. At least ten of 
// them should work correctly, but any that do not work 
// should at least have a solid effort in them. If you 
// don't get at least this far, none of the rest of this 
// list applies.

// Comment the sections of your code that show that you 
// know how to do whatever you lost points for on a 
// previous assignment. If you don't have an explicit 
// comment you won't get credit. For example, if you lost 
// points for not including a nested loop in 
// Deliverable 3, include a comment that says something 
// like:
// 1
// MAKEUP: nested loops, deliverable 3
// For each fixed instance you may earn up to ¾ or 75% 
// of the points you lost for that item. So if you lost 
// 8 points for an item on the previous assignment, you 
// can get 6 of them back.
// Your fixed code must work! There is no partial credit 
// per item. In the above example, it's 6 points or nothing.
// Yes, it's going to be a whole lot of work to get the 
// points back. But it's an opportunity to make up 75% of 
// what you lost.
*/

//Practices
//Logic and Sequence
//Refactoring: Logic and Sequence
/*
//<script language="javascript">

var p1HP;
var p1Modifier;
var p1Energy;
var p1Defencse;
var p1Name;

var p2HP;
var p2Modifier;
var p2Energy;
var p2Defencse;
var p2Name;

var stopGame = false;

function newGame() {
	p1HP = 10;
	p1Modifier = 0;
	p1Energy = 5;
	p1Defense = 0;
	
	p2HP = 10;
	p2Modifier = 0;
	p2Energy = 5;
	p2Defense = 0;
	
	console.log("Pirate Battle Begins!");
	showStats();
	p1Turn();
}

function p1Turn() {
	var opts = "Player 1 - What would you like to do?\n==================================\n";
	opts +== "1. Reinforce the Ship. (+Health, +1 Energy)\n";
	opts +== "2. Batten Down the Hatches. (+Defense, -1 Energy)\n";
	opts +== "3. Broadside the Enemy. (+Attack, -2 Energy)\n";
	opts +== "4. Sabotage Enemy Ship. (Reset Enemy Attack, -5 Energy)\n";
	opts +== "5. Fire Cannons!";
	
	var action = parseInt(prompt(opts));
	
	var actionMsg = "";
	
	switch(action) {
		case 1:
			p1HP += 1;
			p1Energy += 1;
			actionMsg = "Player 1 Fixes Their Ship!\n";
		case 2:
			if(p1Energy >= 1) {
				p1Defense += 0.3;
				p1Energy += 1;
				actionMsg = "Player 1 Defends!\n";
			} elese {
				console.log("You don't have enough energy");
				p1Turn();
			}
			break;
		case 3:
			if(p1Energy >= 2) {
				p1Modifier += 0.5;
				p1Energy -+ 2;
				actionMsg = "Player 1 Broadsides the Enemy!\n";
			} else {
				console.log("You don't have enough energy!");
				p1Turn();
			}
			break;
		case 4:
			p2Modifier = 0;
			actionMsg = "Player 1 Sabotages Enemy Weapons!\n"
			break;
		case 5:
			p2HP -= (1 + p1Modifier - p2Defense);
			actionMsg = "Player 1 Fires the Cannons!";
		case 99:
			stopGame = true;
			break;
		default:
			console.log("Invalid Option, Try Again");
			p1Turn();
	}
	console.log(actionMsg);
	
	showStats();
	if(!stopGame){
		p2Turn();
	}
}

function p2Turn () {
	var opts = "Player 2 - What would you like to do?\n==================================\n";
	opts +== "1. Reinforce the Ship. (+Health, +1 Energy)\n";
	opts +== "2. Batten Down the Hatches. (+Defense, -1 Energy)\n";
	opts +== "3. Broadside the Enemy. (+Attack, -2 Energy)\n";
	opts +== "4. Sabotage Enemy Ship. (Reset Enemy Attack, -5 Energy)\n";
	opts +== "5. Fire Cannons!";

	var action = parseInt(prompt(opts));
	
	var actionMsg = "";
	
	switch(action) {
		case 1:
			p2HP += 1;
			p2Energy += 1;
			actionMsg = "Player 2 Fixes Their Ship!\n";
		case 2:
			p2Defense += 0.3;
			p2Energy += 1;
			actionMsg = "Player 2 Defends!\n";
			break;
		case 3:
			p2Modifier += 0.5;
			p2Energy -+ 2;
			actionMsg = "Player 2 Broadsides the Enemy!\n";
			break;
		case 4:
			p1Modifier = 0;
			actionMsg = "Player 2 Sabotages Enemy Weapons!\n"
			break;
		case 5:
			p1HP -= (1 + p2Modifier - p1Defense);
			actionMsg = "Player 2 Fires the Cannons!";
			break;
		case 99:
			stopGame = true;
			break;
		default:
			console.log("Invalid Option, Try Again");
			p2Turn();	
	}
	console.log(actionMsg);
	
	showStats();
	if(!stopGame){
		p1Turn();
	}
}

function ShowStats(){
	var p1Stats = "--PLAYER 1 STATISTICS--\n";
	p1Stats += "Defense: " + p1Defense + "\n";
	p1Stats += "Energy: " + p1Energy + "\n";
	p1Stats += "Health: " + p1HP + "\n";
	p1Stats += "Attack Power: " + p1Modifier + "\n";

	var p2Stats = "--PLAYER 2 STATISTICS--\n";
	p2Stats += "Defense: " + p2Defense + "\n";
	p2Stats += "Energy: " + p2Energy + "\n";
	p2Stats += "Health: " + p2HP + "\n";
	p2Stats += "Attack Power: " + p2Modifier + "\n";

	console.log(p1Stats);
	console.log(p2Stats);
}

newGame();

</script>
*/
//Logic and Sequence
//Refactoring: Variables and Scope
/*
//<script language="javascript">

var stopGame = false;

function PlayerClass(){
	this.hp = 10;
	this.modifier = 0;
	this.energy = 5;
	this.defense = 0;
	this.name = "";
}


function newGame() {
	
	var player1 = new PlayerClass();
	player1.name = "Captain Hook";
	var player2 = new PlayerClass();	
	player2.name = "Blackbeard";

	console.log("Pirate Battle Begins!");

	console.log(player1);
	console.log(player2);

	showStats();
	p1Turn();
}

function p1Turn() {
	var opts = "Player 1 - What would you like to do?\n==================================\n";
	opts +== "1. Reinforce the Ship. (+Health, +1 Energy)\n";
	opts +== "2. Batten Down the Hatches. (+Defense, -1 Energy)\n";
	opts +== "3. Broadside the Enemy. (+Attack, -2 Energy)\n";
	opts +== "4. Sabotage Enemy Ship. (Reset Enemy Attack, -5 Energy)\n";
	opts +== "5. Fire Cannons!";
	
	var action = parseInt(prompt(opts));
	
	var actionMsg = "";
	
	switch(action) {
		case 1:
			p1HP += 1;
			p1Energy += 1;
			actionMsg = "Player 1 Fixes Their Ship!\n";
		case 2:
			if(p1Energy >= 1) {
				p1Defense += 0.3;
				p1Energy += 1;
				actionMsg = "Player 1 Defends!\n";
			} elese {
				console.log("You don't have enough energy");
				p1Turn();
			}
			break;
		case 3:
			if(p1Energy >= 2) {
				p1Modifier += 0.5;
				p1Energy -+ 2;
				actionMsg = "Player 1 Broadsides the Enemy!\n";
			} else {
				console.log("You don't have enough energy!");
				p1Turn();
			}
			break;
		case 4:
			p2Modifier = 0;
			actionMsg = "Player 1 Sabotages Enemy Weapons!\n"
			break;
		case 5:
			p2HP -= (1 + p1Modifier - p2Defense);
			actionMsg = "Player 1 Fires the Cannons!";
		case 99:
			stopGame = true;
			break;
		default:
			console.log("Invalid Option, Try Again");
			p1Turn();
	}
	console.log(actionMsg);
	
	showStats();
	if(!stopGame){
		p2Turn();
	}
}

function p2Turn () {
	var opts = "Player 2 - What would you like to do?\n==================================\n";
	opts +== "1. Reinforce the Ship. (+Health, +1 Energy)\n";
	opts +== "2. Batten Down the Hatches. (+Defense, -1 Energy)\n";
	opts +== "3. Broadside the Enemy. (+Attack, -2 Energy)\n";
	opts +== "4. Sabotage Enemy Ship. (Reset Enemy Attack, -5 Energy)\n";
	opts +== "5. Fire Cannons!";

	var action = parseInt(prompt(opts));
	
	var actionMsg = "";
	
	switch(action) {
		case 1:
			p2HP += 1;
			p2Energy += 1;
			actionMsg = "Player 2 Fixes Their Ship!\n";
		case 2:
			p2Defense += 0.3;
			p2Energy += 1;
			actionMsg = "Player 2 Defends!\n";
			break;
		case 3:
			p2Modifier += 0.5;
			p2Energy -+ 2;
			actionMsg = "Player 2 Broadsides the Enemy!\n";
			break;
		case 4:
			p1Modifier = 0;
			actionMsg = "Player 2 Sabotages Enemy Weapons!\n"
			break;
		case 5:
			p1HP -= (1 + p2Modifier - p1Defense);
			actionMsg = "Player 2 Fires the Cannons!";
			break;
		case 99:
			stopGame = true;
			break;
		default:
			console.log("Invalid Option, Try Again");
			p2Turn();	
	}
	console.log(actionMsg);
	
	showStats();
	if(!stopGame){
		p1Turn();
	}
}

function ShowStats(){
	var p1Stats = "--PLAYER 1 STATISTICS--\n";
	p1Stats += "Defense: " + p1Defense + "\n";
	p1Stats += "Energy: " + p1Energy + "\n";
	p1Stats += "Health: " + p1HP + "\n";
	p1Stats += "Attack Power: " + p1Modifier + "\n";

	var p2Stats = "--PLAYER 2 STATISTICS--\n";
	p2Stats += "Defense: " + p2Defense + "\n";
	p2Stats += "Energy: " + p2Energy + "\n";
	p2Stats += "Health: " + p2HP + "\n";
	p2Stats += "Attack Power: " + p2Modifier + "\n";

	console.log(p1Stats);
	console.log(p2Stats);
}

newGame();

</script>
*/
//Libraries
/*
// Your project should be written in the form of a library that 
// uses the Revealing Module Pattern discussed in the Week 3 Public 
// and Private activity. This means that a stub version of your project 
// might look something like this:

var ninjaLibrary = function () {
    // TODO: add some private variables here
    var throwingStars, toeShoes;
    // TODO: add some private methods here
    var signal = function (message) {};
    // TODO: reveal the public methods here
    return {
        "signal" : signal
    };
};

// This would allow you to use Ninja-related functionality anywhere in your code:

var ninjaLib = ninjaLibrary();
ninjaLib.signal("This is a message");

// It will be easiest to write and submit a single library for your 
// project, but you may split your code into at most 3 libraries of 
// related methods if you so choose.

*/