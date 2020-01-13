// scope: phạm vi mà đoạn mã chương chình có thể truy cập đến biến hoặc function
// uu diem: nhanh, sử dụng trong pham vi, không anh hưởng đến bên ngoài

var name = "theanh";
(function (){
    var name = "anh";
    console.log(name);
}());
console.log(name);

console.log("///////////////////////////");

(function (fullname){
    var name = "anh";
    console.log(name);
    console.log(fullname);
}(name));

