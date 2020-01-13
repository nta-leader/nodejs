var obj = {
    name: "Mai Hoa",
    sayHello: function(parent1, parent2){
        console.log(`Hello ${ this.name }`);
        console.log("Params: ", parent1, parent2);
    }
}
obj.sayHello();

obj.sayHello.call({ name: "Yen Phuong" }, "Xin chao", "2019"); // tham so truyen vao duoi dang danh sach
obj.sayHello.apply({ name: "Yen Phuong" }, ["Xin chao", "2020"]); // tham so truyen vao duoi dang mang