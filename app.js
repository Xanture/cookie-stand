'use strict'

// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:
//
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
//

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']

var locFirstAndPikeUl = document.getElementById('firstandpike');
var locSeaTacAirportUl = document.getElementById('seatacairport');
var locSeattleCenterUl = document.getElementById('seattlecenter');
var locCapitolHillUl = document.getElementById('capitolhill');
var locAlkiUl = document.getElementById('alki');

var CookieStore = function (minCustomerHour, maxCustomerHour, advCustomerCookie, simCookies) {
  this.minCustomerHour = minCustomerHour,
  this.maxCustomerHour = maxCustomerHour,
  this.advCustomerCookie = advCustomerCookie,
  this.simCookies = simCookies,
  this.randomCustomer = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
}
var locFirstAndPike = new CookieStore (23, 65, 6.3, [])
// var firstandpikeLi;
// for (var i = 0; i < 15; i++) {
//   var cookiePerHour = (locFirstAndPike.randomCustomer() * locFirstAndPike.advCustomerCookie);
//   cookiePerHour = Math.floor(cookiePerHour);
//   locFirstAndPike.simCookies.push(hours[i] + cookiePerHour +' cookies');
//   firstandpikeLi = document.createElement('li');
//   firstandpikeLi.textContent = locFirstAndPike.simCookies[i];
//   locFirstAndPikeUl.appendChild(firstandpikeLi);
// }

//First and Pike End
// SeaTac Airport Start
var locSeaTacAirport = new CookieStore (3, 24, 1.2, [])
// var SeaTacAirportLi;
// for (var i = 0; i < 15; i++) {
//   var cookiePerHour = (locSeaTacAirport.randomCustomer() * locSeaTacAirport.advCustomerCookie);
//   cookiePerHour = Math.floor(cookiePerHour)
//   locSeaTacAirport.simCookies.push(hours[i] + cookiePerHour +' cookies');
//   SeaTacAirportLi = document.createElement('li');
//   SeaTacAirportLi.textContent = locSeaTacAirport.simCookies[i];
//   locSeaTacAirportUl.appendChild(SeaTacAirportLi);
// }

//SeaTac Airport end
// Seattle Center Start

var locSeattleCenter = new CookieStore (11, 38, 3.7, [])
// var SeattleCenterLi;
// for (var i = 0; i < 15; i++) {
//   var cookiePerHour = (locSeattleCenter.randomCustomer() * locSeattleCenter.advCustomerCookie);
//   cookiePerHour = Math.floor(cookiePerHour)
//   locSeattleCenter.simCookies.push(hours[i] + cookiePerHour +' cookies');
//   SeattleCenterLi = document.createElement('li');
//   SeattleCenterLi.textContent = locSeattleCenter.simCookies[i];
//   locSeattleCenterUl.appendChild(SeattleCenterLi);
// }

//Seattle Center End
//Capital Hill Start

var locCapitolHill = new CookieStore (20, 38, 2.3, [])
// var capitolHillLi;
// for (var i = 0; i < 15; i++) {
//   var cookiePerHour = (locCapitolHill.randomCustomer() * locCapitolHill.advCustomerCookie);
//   cookiePerHour = Math.floor(cookiePerHour)
//   locCapitolHill.simCookies.push(hours[i] + cookiePerHour +' cookies');
//   capitolHillLi = document.createElement('li');
//   capitolHillLi.textContent = locCapitolHill.simCookies[i];
//   locCapitolHillUl.appendChild(capitolHillLi);
// }

//Capital Hill end
//Alki start

var locAlki = new CookieStore (2, 16, 4.6, [])
// var alkiLi;
// for (var i = 0; i < 15; i++) {
//   var cookiePerHour = (locAlki.randomCustomer() * locAlki.advCustomerCookie);
//   cookiePerHour = Math.floor(cookiePerHour)
//   locAlki.simCookies.push(hours[i] + cookiePerHour +' cookies');
//   alkiLi = document.createElement('li');
//   alkiLi.textContent = locAlki.simCookies[i];
//   locAlkiUl.appendChild(alkiLi);
// }

//Alki End
