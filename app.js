'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var locFirstAndPikeTr = document.getElementById('firstandpike');
var locSeaTacAirportTr = document.getElementById('seatacairport');
var locSeattleCenterTr = document.getElementById('seattlecenter');
var locCapitolHillTr = document.getElementById('capitolhill');
var locAlkiTr = document.getElementById('alki');

var storesTr = [locFirstAndPikeTr, locSeaTacAirportTr, locSeattleCenterTr, locCapitolHillTr, locAlkiTr];

function CookieStore (minCustomerHour, maxCustomerHour, advCustomerCookie, simCookies) {
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.advCustomerCookie = advCustomerCookie;
  this.simCookies = simCookies;
}

CookieStore.prototype.randomCustomer = function() {
  this.ranNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
};

var locFirstAndPike = new CookieStore (23, 65, 6.3, []);
var locSeaTacAirport = new CookieStore (3, 24, 1.2, []);
var locSeattleCenter = new CookieStore (11, 38, 3.7, []);
var locCapitolHill = new CookieStore (20, 38, 2.3, []);
var locAlki = new CookieStore (2, 16, 4.6, []);

var storeLocations = [locFirstAndPike, locSeaTacAirport, locSeattleCenter, locCapitolHill, locAlki];

for (var i = 0; i < storeLocations.length; i++) {
  for (var j = 0; j < hours.length; j++) {
    var cookiePerHour;
    storeLocations[i].randomCustomer();
    cookiePerHour = storeLocations[i].ranNumber * storeLocations[i].advCustomerCookie;
    cookiePerHour = Math.floor(cookiePerHour);
    storeLocations[i].simCookies.push(cookiePerHour + ' cookies');
  }
}

var storeLocTr;
var storeLocTd;
for (var x = 0; x < storeLocations.length; x++) {
  for (var y = 0; y < hours.length; y++) {
    storeLocTr = document.createElement('td');
    storeLocTd = document.createElement('td');
    storeLocTd.textContent = hours[y];
    storeLocTr.textContent = storeLocations[x].simCookies[y];
    storesTr[x].appendChild(storeLocTd);
    storesTr[x].appendChild(storeLocTr);
  }
}
function handleProductCreateSubmit(event) {
  event.preventDefault();
  console.log('wut wut');
}

var createStore = document.getElementById('add-store');

createStore.addEventListener('submit', handleProductCreateSubmit);
