
//  Get the list of Challenges and populate options list in dom

const challengeData = [
    [
        "Challenge #1",
        "// this is the challege description for challenge #1",
        "// this is the code for challenge #1",
    ]

]



// document.body.onload = addElement;



function addElement () {
    // dom location
    const newOptionLoc = document.getElementById("solutions")
    // create a new option element
    const newOption = document.createElement("option")
    newOption.textContent = "New Option"
    newOption.id = "c1"
    // insert a new node before the first option
    newOptionLoc.insertBefore(newOption, newOptionLoc.firstElementChild)

}

document.getElementById('solutions').addEventListener('change', displayChallenge)


function displayChallenge() {
    console.log(this.id)
}


//  Load the default challenge description and code as the home page

//  When a specific challenge is selected from the list
    //  Display the challenge description
    //  Display the code from the file
    //  Change source for the run code button

