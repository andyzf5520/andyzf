
//测试sql 连接查询
// var db = require('./db.js'); //引用方法模块js 或者require('./haha');
// db.sql('select * from User',function(err,result){
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('用户总数为 :',result.length);
// });

var test = require('./haha.js');

var app = require('./hello.js');

//调用 1  
console.log(test.Add(1,2));
 var res=test.Sums(200,200,function(err,res){
   return res;
});
// 调用方法2 
var  res1=test.Sums(100,100);
console.log('-------'+res) ;
console.log('-------'+res1) ;
console.log('-------'+test.name);
console.log("----外部属性暴露----")
console.log(app.add(100,99));
console.log(app.s());
console.log(app.hello(": Jerry!")); //有参数的
// console.log(app.peroson.name); //有参数的
console.log(typeof(undefined));
console.log(typeof(typeof(undefined)));
// var s =  string[1] ;
console.error(typeof(s));
// 定义 
var arr=[1,2];
var myArray=new Array(); //var myArray=new Array(3) var myArray=new Array(1,23,3)
var aaa={1:1}; //这是json定义
console.log(typeof(arr));
// js 中 map 这里的map不是“地图”的意思，而是指“映射”。[].map(); 基本用法跟forEach方法类似
//返回一个新数组
var array=[1,2,3,4];
var newarray=array.map(function(item,index,array){
  console.log(item);
  return item*2; // map 不改变原有数组数据值 只是
});
console.log(newarray);

//不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
var x='123';
var xx=123;
var b1=(x==xx);
var b2=(x===xx);
console.log(b1);
console.log(b2);

//NaN:非数字类型。特点：① 涉及到的 任何关于NaN的操作，都会返回NaN   ② NaN不等于自身。
// isNaN() 函数用于检查其参数是否是非数字值
console.log(isNaN(11)); //false
//字符串转换：转型函数String(),适用于任何数据类型（null,undefined 转换后为null和undefined）
//toString()方法（null,defined没有toString()方法）。
//Undefined类型 只有一个值，即undefined值。使用var声明了变量，但未给变量初始化值，那么这个变量的值就是undefined。
// js三大引用类型 Object ,Array Function 
console.log(typeof(isNaN(11))); // boolean 
// JSON JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。

var obj = {a: 'Hello', b: 'World'}; //这是一个对象，注意键名也是可以使用引号包裹的
var json = '{"a": "Hello", "b": "World"}'; //这是一个 JSON 字符串，本质是一个字符串
// JSON 和 JS  对象互转 是js 对象
// 1 .对象转Json 字符串  JSON.stringify() 方法：
var str=JSON.stringify(obj);
console.log(obj);
// 2 .从 JSON 转换为对象，使用 JSON.parse() 方法
var objs=JSON.parse(json);
objs=eval('('+json+')');//使用eval() 也可以将JSON字符串转为JS对象
console.log(objs);
console.log(typeof(json)); //本质是string 字符串

