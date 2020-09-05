//#1'
var userObj = new Object({
    firstName: "Silvester",
    lastName: "Stallone",
    age: 65,
    fullName: function () {
        return userObj.firstName + ' ' + userObj.lastName;
    }
});
console.log(userObj);

//#2
console.log(userObj.fullName());

//#3
var defUpperStr = function (param) {
    return (param || 'Default text').toUpperCase();
}
console.log(defUpperStr('my text'));
console.log(defUpperStr());

//#4
var evenFn = function (n) {
    var mas = [];
    if (arguments.length > 0) {
        for (i = 0; i <= n; i++) {
            if (i != 0) {
                if (i % 2 == 0) {
                    mas.push(i);
                }
            }
        }
    }
    return mas;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

//#5
var weekFn = function (n) {
    var temp = null;
    switch (n) {
        case 1:
            temp = 'Понедельник';
            break;
        case 2:
            temp = 'Вторник';
            break;
        case 3:
            temp = 'Среда';
            break;
        case 4:
            temp = 'Четверг';
            break;
        case 5:
            temp = 'Пятница';
            break;
        case 6:
            temp = 'Суббота';
            break;
        case 7:
            temp = 'Воскресенье';
            break;
        default:
            break;
    }
    return temp;
}
console.log(weekFn('week'));
console.log(weekFn('5.6'));
console.log(weekFn(3));

//#6
var ageClassification = function (n) {

    return n < 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители' : null;
}
console.log(ageClassification(24));
console.log(ageClassification(25));
console.log(ageClassification(48));

//#7
var oddFn = function (n) {
    var mas = [];
    if (arguments.length > 0) {
        var i = 0;
        while (i <= n) {
            if (i != 0) {
                if (i % 2 != 0) {
                    mas.push(i);
                }
            }
            i++;
        }
    }
    return mas;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

//#8
var cbRandom = function (a, b) {
    return Math.ceil(Math.random() * (b - a) + a);
}

var cbPow = function (a, b) {
    return Math.pow(a, b);
}

var cbAdd = function (a, b) {
    return a + b;
}

var mainFunc = function (a, b, callback) {
    if (typeof callback === 'function') {
        return callback(a, b);
    }
    return false;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(3, 4, 'not a func'));
