
// nodeJS 供外部调用模块方法定义
// var a = 100, b = 100;
// console.log(a + b);
var da = {};

// 直接属性等于方法 或者在Fun{ 方法定义：方法(){}}

function Plus(a, b) {
    return a - b;
};
//定义Fun返回对象
var Fun = {
    name: "Tom", //返回对象属性定义3
    //返回对象方法定义2
    Add: function (c, v) {
        return c + v;
    },
    Plus: Plus()
};
//返回对象方法定义1
Fun.Sums = function SumS(a, b) {
    return a + b;
};
function say(){
    console.log("say hello ！");
}

// Fun.name=function(name){
//     return name; //属性访问
// };
module.exports = Fun; //module.exports 这种直接把所有的exports等于了方法集合 Fun 属性供外部调用  这种是设置好所有的模块方法在一起自定义的参考Hello.js
// module.exports.say=say;// 这种是exports 的属性扩展可以对应直接定义的方法  
// 上面两种不能同时使用