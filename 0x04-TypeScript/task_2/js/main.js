var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getToWork = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.getToWork = function () {
        return "Getting a coffe break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === "number" && salary > 500) {
        return new Director();
    }
    return new Teacher();
};
// test
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
// task 6. Creating functions specific to employees
var isDirector = function (employee) {
    return employee instanceof Director;
};
var executeWork = function (employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
};
// test
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
var teachClass = function (todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching history';
    }
};
// test 
console.log(teachClass('Math'));
console.log(teachClass('History'));
