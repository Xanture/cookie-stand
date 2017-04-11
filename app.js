'use strict'

// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:
//
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
//

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//
var locFirstAndPike = {
  minCustomerHour: 23,
  maxCustomerHour: 65,
  advCustomerCookie: 6.3,
  simCookies: [],
  randomCustomer: function(min, max) {
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    return randomNumber;
  }
};
for (var i = 0; i < 15; i++) {
  var cookiePerHour = (locFirstAndPike.randomCustomer() * locFirstAndPike.advCustomerCookie);
  cookiePerHour = Math.floor(cookiePerHour)
  locFirstAndPike.simCookies.push(cookiePerHour)
}
var locSeaTacAirport = {
  minCustomerHour: 3,
  maxCustomerHour: 24,
  advCustomerCookie: 1.2,
  simCookies: [],
  randomCustomer: function() {
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    return randomNumber;
  }
}
for (var i = 0; i < 15; i++) {
  var cookiePerHour = (locSeaTacAirport.randomCustomer() * locSeaTacAirport.advCustomerCookie);
  cookiePerHour = Math.floor(cookiePerHour)
  locSeaTacAirport.simCookies.push(cookiePerHour)
}
var locSeattleCenter = {
  minCustomerHour: 11,
  maxCustomerHour: 38,
  advCustomerCookie: 3.7,
  simCookies: [],
  randomCustomer: function() {
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    return randomNumber;
  }
};
for (var i = 0; i < 15; i++) {
  var cookiePerHour = (locSeattleCenter.randomCustomer() * locSeattleCenter.advCustomerCookie);
  cookiePerHour = Math.floor(cookiePerHour)
  locSeattleCenter.simCookies.push(cookiePerHour)
}
var locCapitolHill = {
  minCustomerHour: 20,
  maxCustomerHour: 38,
  advCustomerCookie: 2.3,
  simCookies: [],
  randomCustomer: function() {
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    return randomNumber;
  }
};
for (var i = 0; i < 15; i++) {
  var cookiePerHour = (locCapitolHill.randomCustomer() * locCapitolHill.advCustomerCookie);
  cookiePerHour = Math.floor(cookiePerHour)
  locCapitolHill.simCookies.push(cookiePerHour)
}
var locAlki = {
  minCustomerHour: 2,
  maxCustomerHour: 16,
  advCustomerCookie: 4.6,
  simCookies: [],
  randomCustomer: function() {
    var randomNumber = Math.floor(Math.random() * (this.minCustomerHour + this.maxCustomerHour)) + 1;
    return randomNumber;
  }
};
for (var i = 0; i < 15; i++) {
  var cookiePerHour = (locAlki.randomCustomer() * locAlki.advCustomerCookie);
  cookiePerHour = Math.floor(cookiePerHour)
  locAlki.simCookies.push(cookiePerHour)
}


// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
//
// Display the values of each array as unordered lists in the browser
//
// Calculating the sum of these hourly totals; your output for each location should look like this:
