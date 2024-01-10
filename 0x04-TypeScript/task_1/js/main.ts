// task 1. Let's build a Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// test
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// 2. Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number;
}

// test
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// task 3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// test
console.log(printTeacher("John", "Doe"));

// task 4. writing clask
interface Student {
  firstName: string;
  lastName: string;
  workOnHomeWork(): string;
  displayName(): string;
}

class StudentClass implements Student {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public workOnHomeWork(): string {
    return "Currently working";
  }

  public displayName(): string {
    return `${this.firstName}`;
  }
}

// test
const class1: Student = new StudentClass("Joel", "Bowie");
console.log(class1.displayName());
console.log(class1.workOnHomeWork());
console.log(class1.firstName);
console.log(class1.lastName);

// task 5. Advanced types Part 1

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
