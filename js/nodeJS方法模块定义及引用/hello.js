//直接定义
 var metheds={};
function hello(name) {
    console.log("hello world"+name);
}
var per={ name:"JK",age:25,address:'西安市'};
function s() {
    console.log("this is a ew");
}

function add(a, b) {
    return a + b;
}
methed={
    say:function(){
        console.log("say hello run !");
    }
}
exports.hello = hello;//留出接口module.exports=Plus; //方法提供不需要参数 =Plus();
exports.s = s;
module.exports.add = add; // 多个扩展 也可以一个扩展集中到某一个变量

module.exports.peroson=this.per;