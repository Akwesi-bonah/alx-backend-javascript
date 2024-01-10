var student1 = {
    firstName: 'Joel',
    lastName: 'Bowie',
    age: 23,
    location: 'Mankessim, Ghana'
};
var student2 = {
    firstName: 'Mohammed',
    lastName: 'Tanko',
    age: 25,
    location: 'Suyani, Ghana'
};
var studentList = [student1, student2];
var renderTable = function (studentList) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    studentList.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var locationCell = document.createElement('td');
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
