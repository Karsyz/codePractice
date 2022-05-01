// Task:

// Given a list of the times you need to brew each coffee, return the minimum total waiting time.

// It is possible to receive no orders.

// You can only brew one coffee at a time.

// Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.

// If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.

// The order in which you brew the coffee is totally up to you.


// Examples:

// coffees = [3,2,5,10,9]  ->  85
// coffees = [20,5]        ->  32
// coffees = [4,3,2]       ->  22




function barista(coffees){
    let sorted = coffees.sort(function(a, b){return a-b})
    let wt = 0
    for (i = 0; i < sorted.length; i++) {
        for (r = 0; r < i; r++) {
            wt += sorted[r] + 2           
        }
        wt += sorted[i]
    }
   return wt
}

let nums = [2,10,5,3,9]

console.log(barista(nums))

