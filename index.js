var customerName = 'bob'; 
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}
function overwriteBestCustomer(newName) {
  bestCustomer = newName;
}
const leastFavoriteCustomer = 'Someone Immutable';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Someone Else';
}
