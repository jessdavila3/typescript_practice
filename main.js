var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Person;
}());
function addName(person) {
    return person.fullName;
}
function getFirstName() {
    var firstName = document.getElementById("firstName").value;
    return firstName;
}
function getLastName() {
    return document.getElementById("lastName").value;
}
function addNewName() {
    var nameList = document.getElementById("nameList");
    var li = document.createElement('li');
    var name = new Person(getFirstName(), getLastName());
    li.appendChild(document.createTextNode(addName(name)));
    nameList.appendChild(li);
    console.log(getFirstName());
    console.log(getLastName());
}
