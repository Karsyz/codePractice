// All we eat is water and dry matter.

// Let us begin with an example:

// John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

// At the output the water content is only 98%.

// What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

// He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

// Can you help him?

// Task
// Write function potatoes with

// int parameter p0 - initial percent of water-
// int parameter w0 - initial weight -
// int parameter p1 - final percent of water -
// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

// Example:
// potatoes(99, 100, 98) --> 50

// function potatoes(p0, w0, p1) {
    
//     // init water mass
//     let initWaterMass = ((p0/100) * w0)
//     // console.log(initWaterMass)

//     // init dry mass
//     let initDryMass = w0 - initWaterMass
//     // console.log(initDryMass)

//     // final water mass
//     let finalWaterMass = (initWaterMass / 100) * p1
//     // console.log(finalWaterMass)

//     // return trunc of init dry mass plus final water mass
//     return Math.trunc(initDryMass + finalWaterMass)
// }

// console.log(potatoes(99, 100, 98))
console.log(potatoes(82, 127, 80)); //114
console.log(potatoes(93, 129, 91)); //100


function potatoes(p0, w0, p1) {
    let weightOfWater = w0*p0;
    let weightOfDryMatter = w0*100-weightOfWater;
    let weightOfPotatoAfterDrying = weightOfDryMatter/(100-p1);
    
    return Math.trunc(weightOfPotatoAfterDrying);
  }