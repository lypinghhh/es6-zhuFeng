/**
 * 解构 分解一个对象的结构
 *变量的声明和赋值
 *
 **/
// TEST01  ES5
let arr =[1,2,3 ];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a,b,c)

// TEST01 改良
//解构的时候，等号的两边结构类似。右边还必须是一个真实的值
let [d,e,f] = arr
console.log(d,e,f)

// TEST02
let arr2 = [{name:'zfpx',age:9},[1,2],3];
// let [{name,age},[g,h],i] = arr2;
let [json,arr3,i] = arr2;
// console.log(name,age,g,h,i)
console.log(json,arr3,i)

// TEST03
let obj1 = {name:'zfpx',age:9}
let  {name,age} =obj1;
console.log(name,age)
let  {name:myname,age:myage} =obj1;
// let myname = obj1.name;
// let myage = obj1.age;
console.log(myname,myage)

//TEST04
//默认值
//默认解构，如果能取出来值，就用取出来的值，如果去不出来值，就使用默认值
let obj2 ={name2:'zfpx'};
let {name2,age2} = obj2;
console.log(name2,age2)
let obj3 ={name2:'zfpx'};
let {name3,age3=8} = obj3;
console.log(name2,age3)

//TEST05
//省略赋值
let arr4 =[1,2,3];
let [x,y,z] =arr4;
let[,,j] =arr4;
console.log(j)