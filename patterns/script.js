//Structural - Adapter, Decorator, Facade, Proxy, Flyweight

//Facade
function Mortgage(name) {
    this.name = name;
}

Mortgage.prototype = {
    applyFor: function(amount) {
        var result = 'approved';
        if (!new Bank().verify(this.name, amount)) {
            result = 'denied';
        } else if (!new Credit().get()) {
            result = 'denied';
        } else if (!new Background().check(this.name)) {
            result = 'denied';
        }

        return `${this.name} has been ${result} for a ${amount}`;
    },
};

var Bank = function() {
    this.verify = function(name, amount) {
        //...logic
        return true;
    };
};

var Credit = function() {
    this.get = function() {
        //...logic
        return true;
    };
};

var Background = function() {
    this.check = function(name) {
        //...logic
        return true;
    };
};

//Decorator
var User = function(name) {
    this.name = name;
    this.say = function() {
        console.log(`User: ${this.name}`);
    };
};

var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
    this.say = function() {
        console.log(`Decorated User: ${this.name}, ${this.city}`);
    };
};

var user = new User('Kris');
user.say();

var decoratedUser = new DecoratedUser(user, 'Broadway', 'New York');
decoratedUser.say();




//Behavioural

//Creational

//Architectural