"use strict";
// learning function
// normal function
// arrow function
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
var addArrow = function (num1, num2) { return num1 + num2; };
// object --> function --> method
var poorUser = {
    name: "Farsi",
    balance: 0,
    addBalance: function (balance) {
        return this.balance + balance;
    },
};
var arr = [1, 2, 3];
var newArray = arr.map(function (elem) { return elem * elem; });
