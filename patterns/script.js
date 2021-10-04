//Structural - Adapter, Decorator, Facade, Proxy, Flyweight

function Mortgage(name) {  //Facade
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
            result = 'denied'
        }

        return `${this.name} has been ${result} for a ${amount}`
    }
}

var Bank = function() {
    this.verify = function (name, amount) {
        //...logic
        return true;
    }
}

var Credit = function() {
    this.get = function() {
        //...logic
        return true;
    }
}

var Background = function () {
    this.check = function (name) {
        //...logic
        return true;
    }
}


//Behavioural

//Creational

//Architectural