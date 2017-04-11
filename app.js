'use strict'

// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:
//
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
//

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']

var stores = [locFirstAndPikeTr, locSeaTacAirportTr, locSeattleCenterTr, locCapitolHillTr, locAlkiTr]

var locFirstAndPikeTr = document.getElementById('firstandpike');
var locSeaTacAirportTr = document.getElementById('seatacairport');
var locSeattleCenterTr = document.getElementById('seattlecenter');
var locCapitolHillTr = document.getElementById('capitolhill');
var locAlkiTr = document.getElementById('alki');

function CookieStore (minCustomerHour, maxCustomerHour, advCustomerCookie, simCookies) {
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.advCustomerCookie = advCustomerCookie;
  this.simCookies = simCookies;
}

CookieStore.prototype.randomCustomer = function(ranNumber) {
  this.ranNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
};

var locFirstAndPike = new CookieStore (23, 65, 6.3, []);
var locSeaTacAirport = new CookieStore (3, 24, 1.2, []);
var locSeattleCenter = new CookieStore (11, 38, 3.7, []);
var locCapitolHill = new CookieStore (20, 38, 2.3, []);
var locAlki = new CookieStore (2, 16, 4.6, []);




var storeLocTd;
for (var storesarray = 0; storesarray < stores.length; storesarray++) {


for (var i = 0; i < 15; i++) {
  var cookiePerHour = (this.randomCustomer() * this.advCustomerCookie);
  cookiePerHour = Math.floor(cookiePerHour);
  this.simCookies.push(hours[i] + cookiePerHour +' cookies');
  storeLocTd = document.createElement('td');
  storeLocTd.textContent = locFirstAndPike.simCookies[i];
  storeLocTr.appendChild(storeLocTd);
}
}
