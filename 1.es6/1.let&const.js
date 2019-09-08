 /**
  * var 声明变量
  * 存在的问题
  * 1.可以重复声明
  * 2.不能定义常量 var PI = 3.14
  * 3.不支持块级作用域 if（true）{ var a =10;}
  **/
 //es6中新增两种声明变量的方式，可以解决var的一些问题
 // TEST01
 //SyntaxError: Identifier 'a' has already been declared
     // 标识符 a 已经定义过了，不能重复声明
let a = 10;
// let a = 20;

 // TEST02
const PI = 3.14;
//编译报错：试图给一个常量赋值，这是错误的
 //TypeError: Assignment to constant variable.
// PI = 3.15;

 //虽然说常量不能再引用别的对象了，但是她的值如果是一个引用类型的话，引用对象的属性是可以改的
const USER = {name:'zfpx'};
USER.name = "djfkaldjfl";
console.log(USER)

 //常量在不同的作用域可以重复声明
 {
     const PI = 3.15;
 }
 // TEST03
 //使用var,花括号不能行成封闭的作用域，在外面可以拿到里面声明的变量
 if(true){
     var b = 10;
 }
 console.log(b);
 if(true){
     let c = 20;
 }
 //ReferenceError: c is not defined
 // console.log(c);

 // TEST04
// 以前js只有两个作用域，一个是全局，一个是函数级（没有块级作用域）
 //之前闭包的写法
 ;(function f() {
     
 })();
 //现在闭包的写法
 //外层和内层对同一个变量的声明互不影响
 let d = 40;
 console.log(d);
 {
     //ReferenceError: d is not defined
     //let 没有预解释，变量不会提升
     // console.log(d);
     let d = 30;

 }

 // TEST05
 // 传统写法打印 2 2
 for(var i = 0;i<2;i++){
     setTimeout(function () {
         console.log(i)
     },1000)
 }

 //传统写法改良 函数级作用域
 var _loop = function _loop(i) {
     setTimeout(function () {
         console.log(i)
     },1000)
 }
 for(var i = 0;i<2;i++){
    _loop(i)
 }

 //传统写法改良整合
 for(let i = 0;i<4;i++){
     (function(i){
         setTimeout(function () {
             console.log(i)
         },1000)
     })(i)

 }

 //es6语法：打印 0 1
 for(let i = 0;i<2;i++){
     setTimeout(function () {
         console.log(i)
     },1000)
 }




