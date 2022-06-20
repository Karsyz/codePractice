// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (secs) {
    let hours = Math.floor( (secs / 60) / 60 )
    let minsRemainder = (secs / 60) % 60
    let minutes = Math.floor( minsRemainder )
    let seconds =  Math.round( (minsRemainder - minutes) * 60 )
    
    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
  }


  
// ***tests***tests***tests***tests***tests***tests***

let tests = [
    [0, '00:00:00'],
    [59, '00:00:59'],
    [60, '00:01:00'],
    [90, '00:01:30'],
    [3599, '00:59:59'],
    [3600, '01:00:00'],
    [45296, '12:34:56'],
    [86399, '23:59:59'],
    [86400, '24:00:00'],
    [359999, '99:59:59']
    
];
  
tests.forEach(e =>  console.log(  humanReadable(e[0]) === e[1]) )