/*
*箭头函数
* 1.声明函数的更简单的方法
 */

//原始方法
let sum = function (a,b) {
    return a+b;
}

//如果只有一个参数，可以省略小括号
//如果只有返回值，没有别的函数体代码，则可以省略{}
let sum1 = (a,b) =>{
    return a+b;
}

let double = num => num*2;

let obj = {
name:'ahhh',
    getName(){
    //this => obj
    setTimeout(function () {
        //this => window
        console.log(this.name);
    },1000)
}
}
obj.getName();//undefined 因为this已经不是obj

let obj1 = {
    name:'ahhh',
    getName(){
        //this => obj
        //箭头函数没有自己的this,他会使用上层的this
        setTimeout(()=>{
            console.log(this.name);
        },1000)
    }
}
obj1.getName();//ahhh

//ES5实现箭头函数
let obj2 = {
    name:'ahhh',
    getName(){
    let self = this;
        setTimeout(function () {
                console.log(self.name);
        }

        ,1000)
    }
}
obj2.getName();//ahhh