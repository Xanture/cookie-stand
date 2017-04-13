'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

function CookieStore (thisStoreName, minCustomerHour, maxCustomerHour, advCustomerCookie) {
  this.thisStoreName = thisStoreName;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.advCustomerCookie = advCustomerCookie;
  this.simCookies = [];
}

CookieStore.prototype.randomCustomer = function() {
  for (var j = 0; j < hours.length; j++) {
    var ranNumber = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    var cookiePerHour;
    cookiePerHour = ranNumber * this.advCustomerCookie;
    cookiePerHour = Math.floor(cookiePerHour);
    this.simCookies.push(cookiePerHour + ' cookies');
  }
};

var locFirstAndPike = new CookieStore ('1st and Pike', 23, 65, 6.3);
var locSeaTacAirport = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
var locSeattleCenter = new CookieStore ('Seattle Center', 11, 38, 3.7);
var locCapitolHill = new CookieStore ('Capitol Hill', 20, 38, 2.3);
var locAlki = new CookieStore ('Alki', 2, 16, 4.6);

var storeLocations = [locFirstAndPike, locSeaTacAirport, locSeattleCenter, locCapitolHill, locAlki];

for (var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].randomCustomer();
}

var tableStoreCookies;
var tableStoreData;
var tableStoreName;
var tableBlankSpace;
CookieStore.prototype.writetopage = function() {
  var tablelocation = document.getElementById('cooltablebro');
  tableStoreName = document.createElement('tr');
  tableStoreName.textContent = this.thisStoreName;
  tablelocation.appendChild(tableStoreName);
  for (var h = 0; h < hours.length; h++) {
    tableStoreData = document.createElement('td');
    tableStoreData.textContent = hours[h];
    tablelocation.appendChild(tableStoreData);
  }
  tableBlankSpace = document.createElement('tr');
  tableBlankSpace.textContent = '';
  tablelocation.appendChild(tableBlankSpace);
  for (var c = 0; c < this.simCookies.length; c++) {
    tableStoreCookies = document.createElement('td');
    tableStoreCookies.textContent = this.simCookies[c];
    tablelocation.appendChild(tableStoreCookies);
  }
};
  // }
// };
// CookieStore.prototype.cookiedata = function() {
//   var tablelocation = document.getElementById('cooltablebro');
//   for (var c = 0; c < this.simCookies.length; c++) {
//     storeLocTd = document.createElement('tr');
//     storeLocTd.textContent = this.simCookies[c];
//     tablelocation.appendChild(storeLocTd);
//   }
// };
for (var p = 0; p < storeLocations.length; p++) {
  storeLocations[p].writetopage();
  // storeLocations[p].cookiedata();
}
function handleProductCreateSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var formStoreName = form.storeName.value;
  var formminCustomerHour = form.minCustomerHour.value;
  var formmaxCustomerHour = form.maxCustomerHour.value;
  var formadvCustomerCookie = form.advCustomerCookie.value;
  console.log(formStoreName, formminCustomerHour, formmaxCustomerHour, formadvCustomerCookie);
  var newStore = new CookieStore(formStoreName, formminCustomerHour, formmaxCustomerHour, formadvCustomerCookie);
  console.log(newStore);
  storeLocations.push(newStore);
  newStore.randomCustomer();
  newStore.writetopage();
}

var createStore = document.getElementById('add-store');
createStore.addEventListener('submit', handleProductCreateSubmit);
