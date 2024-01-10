// task 5. Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getToWork(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getToWork(): string {
    return "Getting a coffe break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: string | number): Teacher | Director => {
  if (typeof salary === "number" && salary > 500) {
    return new Director();
  }
  return new Teacher();
};

// test
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

const isDirector = (employee: Teacher | Director): employee is Director => {
  return employee instanceof Director;
};

const executeWork = (employee: Teacher | Director): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
};

console.log(executeWork(createEmployee(200)));

console.log(executeWork(createEmployee(1000)));
