interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Joel',
    lastName: 'Bowie',
    age: 23,
    location: 'Mankessim, Ghana'
};

const student2: Student = {
    firstName: 'Mohammed',
    lastName: 'Tanko',
    age: 25,
    location: 'Suyani, Ghana'
};

const studentList: Array<Student> = [student1, student2];

const renderTable = (studentList: Array<Student>): void => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentList.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
};

renderTable(studentList);
