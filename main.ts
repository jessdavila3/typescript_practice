class Person {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName:string,lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
}

function addName(person: Person) {
    return person.fullName;
}

function getFirstName() {
    let firstName: string = document.getElementById("firstName").value;
    return firstName;
}

function getLastName() {
    return document.getElementById("lastName").value;
}

function addNewName() {
    let nameList = document.getElementById("nameList");
    let li = document.createElement('li');
    let name = new Person (getFirstName(), getLastName());
    li.appendChild(document.createTextNode(addName(name)));
    nameList.appendChild(li);
    console.log(getFirstName());
    console.log(getLastName());
}