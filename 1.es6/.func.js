/*
*函数
 */
//原来---》默认参数
//1.必填项不填报错
//2.有些参数没有给传参的话，可以有默认值
function ajax(url,method,datatype){
    if(typeof url == 'undefined') throw Error('url不能为空')
    method = method?method:'GET';
}

//现在 ---》设置默认值，如果未接受到的值的话，就等于默认值
function ajax(url=new Error('url不能为空'),method='GET',datatype='json'){

}

function sum(prefix,...rest){
    //rest = [1,2,3,4];
    //1.循环求和
    let result = 0;
    //循环数组中的每个元素，把他们依次传入对应的函数
    rest.forEach(function(item){
         result +=item;
    })
    //2.reduce 计算 汇总 收敛 把一个数组中的一堆值计算出来一个值
    return prefix +(result);
}
console.log(sum('$',1,2,3,4))

let arr4 = [1,2,3,4];
//当前值，当前元素，当前索引，原始数组
//可以传一个参数，
//第二个参数表示初始值，第一次循环的时候，初始值传给val
//上一次执行结果会成为下一次的初始值
//平均值
//如果没有给初始值，第一次执行函数的时候，val=第一个元素的值，item等于第二个元素的值
let result =  arr4.reduce(function(val,item,index,origin){
    let sum = val+item;//返回值会成为下一次函数执行时的当前值val
    if(index === arr4.length-1){
        return sum/arr4.length;
    }else{
        return sum;
    }
},0);
console.log(result);

//reduce是从左向右看的，reduceRight是从右往左算的
let result2 =  arr4.reduceRight(function(val,item,index,origin){
    let sum = val+item;//返回值会成为下一次函数执行时的当前值val
    if(index === 0){
        return sum/arr4.length;
    }else{
        return sum;
    }
},0);
console.log(result2);

//自己实现reduce
Array.prototype.reduce1 = function (reducer,initialVal) {
    for(let i=0;i<this.length;i++){
        initialVal =reducer(initialVal,this[i],i,this);
    }
    return initialVal;
}

let sum2  =[5,7,9,10].reduce1(function (val,item) {
    return val+item;
},0)
console.log(sum2);

//展开运算符
let arr5 = [1,2,3];
let arr6 = [4,5,6];
//合并两个数组
let arr7 = [].concat(arr5,arr6)
//相当于把数组中的每个元素依次取出，放在这里
let arr8 = [...arr5,...arr6]
console.log(arr7);
console.log(arr8);

//展开数组
let max = Math.max.apply(null,arr6);;
let max2 = Math.max(...arr6);
console.log(max)
console.log(max2);

//展开对象

let obj1 ={name:"lyp"};
let obj2 = {age:20};
let obj3 = {};
let obj4 = {};

/**
 * 合并对象的方法
 * 1.循环赋值，拷贝属性
 *2.assign
 * 第一个参数是target，后面是来源对象
 *3.展开符
 * */
for ( let key in obj1){
    obj3[key] = obj1[key];
}
for ( let key in obj2){
    obj3[key] = obj2[key];
}
console.log(obj3);
//浅拷贝，引用同一个地址
Object.assign(obj4,obj1,obj2);
console.log(obj4);
//对象的解构
let obj5 ={...obj1,...obj2}
console.log(obj5);

//深度拷贝
let obj6 ={
    name:'hello you ',
    city:{
        home:'beijing'
    }
}
let obj7 = JSON.parse(JSON.stringify(obj6))
obj6.city.home = 'shanghai'
console.log(obj7);
console.log(obj6);

//实现深拷贝的方法
function clone(origin){
    //简单字符串直接赋值，对象进行深拷贝，数组要区分考虑
    let newObj = {};
    for(let key in origin ){
        if(typeof origin[key] == 'object'){
            //递归拷贝，数组对象都需要深拷贝
            newObj[key] =clone(origin[key])
        }else{
            newObj[key] = origin[key];
        }
    }
    return newObj;
}
obj6.city.home = 'guangzhou'
let obj8 = clone(obj6)
console.log(obj8);



