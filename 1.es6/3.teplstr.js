let name = 'zfpx',age = 9;
let desc = name +"今年"+age + "岁了";
console.log(desc);
//模板字符串 拼接字符串
//1.字符串里可以嵌套变量,文本正常写
//字符串替换操作
let desc2  =`${name}今年${age}岁了`
console.log(desc2);

//模板语言很多就是替换
//模拟替换过程
function replace(desc) {
    return desc.replace(/\$\{([^}]+])\}/g,function (matched,key) {
        console.log(arguments);
        return eval(key);
    })

}
console.log(replace(desc2))

//模板字符串
//模板字符串可以折行 换行
let users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}]

//映射，把老数组里的每一个元素映射为新数组的每一个元素
let newLis = users.map(function (user,index) {
    return `<li>${user.id}:${user.name}</li>`
}).join('');
console.log(newLis)

let ul =(`
    <ul>
    ${newLis}
    </ul>
    
    `

)
console.log(ul)

//带标签的模板字符串，就像一个函数调用
//参数1是文本的数组
//后面的参数依次是模板字符串中的变量
function descp(strings,name,age) {
    console.log(strings)
    console.log(name);
    console.log(age);
}
let str = descp`${name}今年${age}岁了`

//其他运算符，会把后边的所有参数全都放在一个数组里
//rest其他运算符只能作为最后一个参数
//因为有时候我们希望有自己的拼接模板字符串的逻辑
function descp2(strings,...values) {
    //用模板字符串分割的，strings比values永远多1个
    console.log(strings)
    console.log(values);
    let result = ''
    for(let i= 0;i<values.length;i++){
    result += (strings[i]+values[i]);
    }
    result += strings[strings.length-1];
    return result
}
let str2 = descp2`${name}今年${age}岁了`
console.log(str2)

//字符串新增方法
//includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
let str3 ='ahhhhyaping66'
console.log(str3.startsWith('a'));

let address1 = 'http://www.baidu.com'
let address2 = 'ftp://www.baidu.com'
if(address1.startsWith('http')){
    console.log('http');
}else if(address1.startsWith('ftp')){
    console.log('ftp');
}
//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3) // "xxx"