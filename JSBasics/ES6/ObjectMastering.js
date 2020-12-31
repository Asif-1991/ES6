// call, bind, apply

const normalPerson = {
    firstName: 'struggler',
    lastName: 'anyOne',
    salary:15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        // console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'asiful',
    lastName: 'hoque',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'riad ',
    lastName: 'khan',
    salary: 25000
}

normalPerson.chargeBill(500);

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(1000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.call(heroPerson, 500, 50, 30)
console.log(heroPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [5000, 500, 30])
console.log(friendlyPerson.salary);