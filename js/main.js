//  current challenge array
let currentChallenge = []

// function name for code button
let functNameForCoderunButton = "noFunction()"

//  Trigger make options list
document.body.onload = makeOptionsList

//  Make options list from challenge data array
function makeOptionsList() {
    for (i = 0; i < challengeData.length; i++ ) {
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
    displayDescription(challengeData[this.value][1])
    displayCode(challengeData[this.value][2])
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

function noFunction() {
    console.log("Made by Karsy")
    alert("Made by Karsy")
}