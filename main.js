const Publishers = require("./Subject.js");

const MobileAppUsers = require("./Observer.js");

// Publisher Object
const pub = new Publishers();

// Subscriber Objects
const sub1 = new MobileAppUsers("Salman Aziz");
const sub2 = new MobileAppUsers("Sohaib Rumy");

// Adding Subscribers
pub.addSubscriber(sub1);
pub.addSubscriber(sub2);

// Getting News
sub1.getNews();

// Updating News
pub.notifySubscribers("Today is a bad weather");

// Getting News
sub1.getNews();
sub2.getNews()