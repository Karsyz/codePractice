
//  Get array of all challenge object names


//  challenge data array
let challengeData = [["default", "description", "code", "arithmetic()" ], ["Challenge Name 1", "Challenge Description 1", "Challenge Code 1", "functionName1()"], ["Challenge Name 2", "Challenge Description 2", "Challenge Code 2", "functionName2()"], ["Challenge Name 3", "Challenge Description 3", "Challenge Code 3", "functionName3()"], ["Challenge Name 4", "Challenge Description 4", "Challenge Code 4", "functionName4()"] ]

//  current challenge array
let currentChallenge = []

// function name for code button
let functNameForCoderunButton = ""

//  Trigger make options list
document.body.onload = makeOptionsList

//  Make options list from challenge data array
function makeOptionsList() {
    for (i = 1; i < challengeData.length; i++ ) {
        addOptionElements(challengeData[i]);
    }
}
    
//  Create a new option element
function addOptionElements([name, desc, code]) {
    // dom location
    const newOptionLoc = document.getElementById("solutions")
    // create a new option element
    const newOption = document.createElement("option")
    newOption.textContent = "New Option"
    newOption.id = i
    newOption.value = i
    newOption.innerText = name

    // insert new option element just inside of select element end, after its last child.
    newOptionLoc.insertAdjacentElement("beforeend", newOption)
}

//  Get drop select option list value of currently selected
document.getElementById('solutions').addEventListener('change', displayChallenge)

//  When a specific challenge is selected from the list
function displayChallenge() {
    console.log(challengeData[this.value])
    displayDescription(challengeData[this.value][0])
    displayCode(challengeData[this.value][1])
    functNameForCoderunButton = challengeData[this.value][3]
}

//  Display the challenge description
function displayDescription(a) {
    document.getElementById("descriptGoesHere").innerHTML = a
}

//  Display the code from the file
function displayCode(a) {
    document.getElementById("codeGoesHere").innerHTML = a
}

document.getElementById("runCodebutton").addEventListener('click', runCode) 

function runCode () {
    eval(functNameForCoderunButton)
}

function functionName1 () {
    console.log("it works 1")
}

function functionName2 () {
    console.log("it works 2")
}

function functionName3 () {
    console.log("it works 3")
}

function functionName4 () {
    console.log("it works 4")
}