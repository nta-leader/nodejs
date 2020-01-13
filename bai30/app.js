var person = {
    firtName: "",
    lastName: "",
    getFullName: function (){
        return this.firtName + " " + this.lastName;
    }        
};

var hoa = Object.create(person);
hoa.firtName = "Hoa";
hoa.lastName = "Mai";

var yen = Object.create(person);
yen.firtName = "Yen";
yen.lastName = "Phuong";

console.log(hoa.getFullName());
console.log(yen.getFullName());