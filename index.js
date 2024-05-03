"use strict";
// 45 Assignment
function createcar(manufactured, model, optional) {
    return Object.assign({ manufactured,
        model }, optional);
}
const mycars = createcar("Honda", "civic", { color: "Silver", year: "2024" });
console.log(mycars);
