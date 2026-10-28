/*
===========================================================
SecureSense Behavioral Risk Detection System
-----------------------------------------------------------
This file contains the core logic of the project.

Main Responsibilities:

1. Generate simulated user behavior
2. Calculate weighted risk score
3. Classify risk level
4. Display results on dashboard
5. Show alerts and session history

This file acts as the core processing engine of SecureSense.
===========================================================
*/

let sessionCount = 0   // variable to count how many sessions have been analyzed

function generateSecureSenseEvent(){   // function to generate random user behavior

return {

ipAddressChange: Math.random() > 0.5,   // randomly true/false (50% chance)
browserChange: Math.random() > 0.5,     // randomly true/false

failedLoginAttempts: Math.floor(Math.random()*5),   // random number 0–4
passwordResetFrequency: Math.floor(Math.random()*3), // random number 0–2
mfaBypassAttempts: Math.floor(Math.random()*2),     // random number 0–1

sessionDuration: 10 + Math.floor(Math.random()*60), // random 10–70 minutes
loginCount: 1 + Math.floor(Math.random()*5),        // random 1–5 logins
pagesVisited: 5 + Math.floor(Math.random()*30),     // random 5–35 pages

longInactiveSession: Math.random() > 0.5,   // randomly true/false

navigationDelay: Math.random()*10,   // random decimal between 0–10 seconds
repeatedActionLoop: Math.floor(Math.random()*3),  // random 0–2 loops

sensitiveFileAccess: Math.random() > 0.5,   // random true/false
databaseQueryChange: Math.random() > 0.5,   // random true/false
outsideAuthorizedHours: Math.random() > 0.5,// random true/false

workflowOrderChange: Math.random() > 0.5,   // random true/false
shortcutUsageChange: Math.random() > 0.5,   // random true/false

interactionDepth: Math.random()*10,   // random decimal 0–10
typingSpeed: 150 + Math.floor(Math.random()*150), // random 150–300
scrollVariation: Math.random()*5,     // random decimal 0–5

copyPasteSpike: Math.floor(Math.random()*5)   // random 0–4

}

}

function calculateSecureSenseRisk(current){   // function to calculate risk score

let score = 0   // initialize score to 0

score += current.ipAddressChange ? 0.07 : 0   // if true add 0.07 else add 0
score += current.browserChange ? 0.04 : 0     // if true add 0.04 else add 0

score += current.failedLoginAttempts * 0.08   // multiply value by weight
score += current.passwordResetFrequency * 0.05
score += current.mfaBypassAttempts * 0.12

score += current.sessionDuration * 0.02   // weighted contribution
score += current.loginCount * 0.05
score += current.pagesVisited * 0.03

score += current.longInactiveSession ? 0.04 : 0
score += current.navigationDelay * 0.03

score += current.repeatedActionLoop * 0.05

score += current.sensitiveFileAccess ? 0.10 : 0
score += current.databaseQueryChange ? 0.08 : 0
score += current.outsideAuthorizedHours ? 0.05 : 0

score += current.workflowOrderChange ? 0.04 : 0
score += current.shortcutUsageChange ? 0.03 : 0

score += current.interactionDepth * 0.03
score += current.typingSpeed * 0.02
score += current.scrollVariation * 0.02

score += current.copyPasteSpike * 0.03

return score   // return final calculated score

}

function assessSecureSenseRisk(score){   // function to classify risk

if(score < 7)   // if score less than 7
return "NORMAL"

else if(score < 10)   // if score between 7 and 10
return "WARNING"

else   // if score greater than 10
return "HIGH RISK"

}

function runSecureSense(){   // main function triggered by button click

let event = generateSecureSenseEvent()   // generate random event

let score = calculateSecureSenseRisk(event)   // calculate risk score

let risk = assessSecureSenseRisk(score)   // determine risk level

document.getElementById("score").innerText =
"SecureSense Risk Score: " + score.toFixed(2)   // display score with 2 decimals

let riskElement = document.getElementById("risk")   // get risk display element

riskElement.innerText = "Risk Level: " + risk   // display risk level

if(risk === "NORMAL")   // change color based on risk
riskElement.style.color = "lime"

else if(risk === "WARNING")
riskElement.style.color = "yellow"

else
riskElement.style.color = "red"

let alerts = document.getElementById("alerts")   // get alert list element
alerts.innerHTML = ""   // clear previous alerts

if(event.ipAddressChange)
alerts.innerHTML += "<li>IP Address Changed</li>"   // add list item

if(event.failedLoginAttempts > 2)
alerts.innerHTML += "<li>Multiple Failed Login Attempts</li>"

if(event.sensitiveFileAccess)
alerts.innerHTML += "<li>Sensitive File Access</li>"

if(event.outsideAuthorizedHours)
alerts.innerHTML += "<li>Access Outside Authorized Hours</li>"

if(event.typingSpeed > 280)
alerts.innerHTML += "<li>Abnormal Typing Speed</li>"

if(event.copyPasteSpike > 2)
alerts.innerHTML += "<li>High Copy-Paste Activity</li>"

sessionCount++   // increase session number by 1

let table = document.getElementById("sessionTable")   // get table element

let row = table.insertRow()   // create new row in table

row.insertCell(0).innerText = sessionCount   // first column → session number
row.insertCell(1).innerText = score.toFixed(2)   // second column → score
row.insertCell(2).innerText = risk   // third column → risk level

}





//  /*

// ## SecureSense Behavioral Risk Detection System

// This file contains the core logic of the project.

// Main Responsibilities:

// 1. Generate simulated user behavior
// 2. Calculate weighted risk score
// 3. Classify risk level
// 4. Display results on dashboard
// 5. Show alerts and session history
//    ===========================================================
//    */

// // ---------------------------------------------------------
// // Global variable to track number of analyzed sessions
// // ---------------------------------------------------------
// let sessionCount = 0;   // starts from 0 and increases every time user clicks analyze

// // ---------------------------------------------------------
// // Function: generateSecureSenseEvent()
// // Purpose: Simulates a user session with random behavior
// // ---------------------------------------------------------
// function generateSecureSenseEvent(){

// ```
// // Return an object containing all behavioral parameters
// return {

//     // ------------------ CONTEXT ------------------

//     // Math.random() generates number between 0 and 1
//     // > 0.5 gives true or false randomly

//     ipAddressChange: Math.random() > 0.5,   // IP changed or not
//     browserChange: Math.random() > 0.5,     // browser changed or not


//     // ---------------- AUTHENTICATION ---------------- 

//     // Math.floor() removes decimal part
//     // Math.random()*5 → values from 0 to 4

//     failedLoginAttempts: Math.floor(Math.random()*5),

//     passwordResetFrequency: Math.floor(Math.random()*3),

//     mfaBypassAttempts: Math.floor(Math.random()*2),


//     // ---------------- SESSION BEHAVIOR ----------------

//     // Random session duration between 10 and 70 minutes

//     sessionDuration: 10 + Math.floor(Math.random()*60),

//     // Login count between 1 and 5

//     loginCount: 1 + Math.floor(Math.random()*5),

//     // Pages visited between 5 and 35

//     pagesVisited: 5 + Math.floor(Math.random()*30),

//     // Boolean for idle session

//     longInactiveSession: Math.random() > 0.5,

//     // Navigation delay between 0–10 seconds

//     navigationDelay: Math.random()*10,

//     // Repeated action loops (possible bot activity)

//     repeatedActionLoop: Math.floor(Math.random()*3),


//     // ---------------- SECURITY EVENTS ----------------

//     sensitiveFileAccess: Math.random() > 0.5,   // accessed sensitive files
//     databaseQueryChange: Math.random() > 0.5,   // DB pattern changed
//     outsideAuthorizedHours: Math.random() > 0.5,  // accessed at odd time


//     // ---------------- USER BEHAVIOR ----------------

//     workflowOrderChange: Math.random() > 0.5,   // unusual workflow
//     shortcutUsageChange: Math.random() > 0.5,   // shortcut pattern change

//     interactionDepth: Math.random()*10,   // interaction level
//     typingSpeed: 150 + Math.floor(Math.random()*150), // typing speed 150–300
//     scrollVariation: Math.random()*5,   // scroll pattern variation

//     copyPasteSpike: Math.floor(Math.random()*5) // copy-paste frequency
// }
// ```

// }

// // ---------------------------------------------------------
// // Function: calculateSecureSenseRisk()
// // Purpose: Calculates weighted risk score
// // ---------------------------------------------------------
// function calculateSecureSenseRisk(current){

// ```
// let score = 0;   // initialize score

// // ---------------- CONTEXT RISK ----------------

// // Ternary operator:
// // condition ? value_if_true : value_if_false

// score += current.ipAddressChange ? 0.07 : 0;
// score += current.browserChange ? 0.04 : 0;


// // ---------------- AUTHENTICATION ----------------

// // Multiply value with weight

// score += current.failedLoginAttempts * 0.08;
// score += current.passwordResetFrequency * 0.05;
// score += current.mfaBypassAttempts * 0.12;


// // ---------------- SESSION BEHAVIOR ----------------

// score += current.sessionDuration * 0.02;
// score += current.loginCount * 0.05;
// score += current.pagesVisited * 0.03;

// score += current.longInactiveSession ? 0.04 : 0;
// score += current.navigationDelay * 0.03;

// score += current.repeatedActionLoop * 0.05;


// // ---------------- SECURITY EVENTS ----------------

// score += current.sensitiveFileAccess ? 0.10 : 0;
// score += current.databaseQueryChange ? 0.08 : 0;
// score += current.outsideAuthorizedHours ? 0.05 : 0;


// // ---------------- USER BEHAVIOR ----------------

// score += current.workflowOrderChange ? 0.04 : 0;
// score += current.shortcutUsageChange ? 0.03 : 0;

// score += current.interactionDepth * 0.03;
// score += current.typingSpeed * 0.02;
// score += current.scrollVariation * 0.02;

// score += current.copyPasteSpike * 0.03;


// // Return final computed score
// return score;
// ```

// }

// // ---------------------------------------------------------
// // Function: assessSecureSenseRisk()
// // Purpose: Converts numeric score into risk level
// // ---------------------------------------------------------
// function assessSecureSenseRisk(score){

// ```
// // If score is low → Normal behavior
// if(score < 7)
//     return "NORMAL";

// // Moderate score → suspicious
// else if(score < 10)
//     return "WARNING";

// // High score → risky
// else
//     return "HIGH RISK";
// ```

// }

// // ---------------------------------------------------------
// // Function: runSecureSense()
// // Purpose: Main function triggered by button click
// // ---------------------------------------------------------
// function runSecureSense(){

// ```
// // Step 1: Generate new user session
// let event = generateSecureSenseEvent();

// // Step 2: Calculate risk score
// let score = calculateSecureSenseRisk(event);

// // Step 3: Determine risk level
// let risk = assessSecureSenseRisk(score);


// // ---------------- DISPLAY RESULTS ----------------

// // Display score (to 2 decimal places)
// document.getElementById("score").innerText =
//     "SecureSense Risk Score: " + score.toFixed(2);

// let riskElement = document.getElementById("risk");

// // Display risk level
// riskElement.innerText = "Risk Level: " + risk;


// // ---------------- COLOR CODING ----------------

// if(risk === "NORMAL")
//     riskElement.style.color = "lime";   // green

// else if(risk === "WARNING")
//     riskElement.style.color = "yellow"; // yellow

// else
//     riskElement.style.color = "red";    // red


// // ---------------- ALERTS ----------------

// let alerts = document.getElementById("alerts");
// alerts.innerHTML = "";   // clear previous alerts


// // Check which conditions triggered risk
// if(event.ipAddressChange)
//     alerts.innerHTML += "<li>IP Address Changed</li>";

// if(event.failedLoginAttempts > 2)
//     alerts.innerHTML += "<li>Multiple Failed Login Attempts</li>";

// if(event.sensitiveFileAccess)
//     alerts.innerHTML += "<li>Sensitive File Access</li>";

// if(event.outsideAuthorizedHours)
//     alerts.innerHTML += "<li>Access Outside Authorized Hours</li>";

// if(event.typingSpeed > 280)
//     alerts.innerHTML += "<li>Abnormal Typing Speed</li>";

// if(event.copyPasteSpike > 2)
//     alerts.innerHTML += "<li>High Copy-Paste Activity</li>";


// // ---------------- SESSION TABLE ----------------

// sessionCount++;   // increase session number

// let table = document.getElementById("sessionTable");

// let row = table.insertRow();   // create new row

// // Insert values into columns
// row.insertCell(0).innerText = sessionCount;
// row.insertCell(1).innerText = score.toFixed(2);
// row.insertCell(2).innerText = risk;
// ```

// }
