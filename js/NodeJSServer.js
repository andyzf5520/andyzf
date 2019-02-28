//JavaScript是一门语言
//node.js不是一门语言，也不是一种特殊的JavaScript方言 - 它仅仅就是用于运行普通JavaScript代码的东西
//所有浏览器都有运行网页上JavaScript的JavaScript引擎。Firefox有叫做Spidermonkey的引擎，Safari有JavaScriptCore，Chrome有V8
//node.js就是带有能操作I/O和网络库的V8引擎，因此你能够在浏览器之外使用JavaScript创建shell脚本和后台服务或者运行在硬件上

// 浏览器端和服务器端JavaScript组成区别
// 浏览器端：

// ECMAScript，描述了JavaScript语言的语法和基本对象
// 文档对象模型（DOM），描述处理网页内容的方法和接口
// 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口
// 服务器端：
// 但在js中的顶层对象是window对象，但是在node中没有什么window对象，node中的顶层对象是global对象。这就是二者的差异性。
// ECMAScript
// node.js内置模块：文件系统I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等
//1 模拟node js 的请求相应服务器  
//组成部分 3 部分 
//1 .引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块
//Node.js 是一个Javascript运行环境(runtime environment)，简单的说 Node.js 就是运行在服务端的 JavaScript。
// // v8 谷歌浏览器引擎 C++开发的

// 为什么单线程却能够支持高并发？
// (1)前提：I/O密集型任务
// (2)单线程的解释：主线程一个，底层工作线程多个。
// (3)事件机制的底层依赖库：libuv、libeio、libev

// 但是，Node.js 由于没有Web容器，所以在url 地址后面在输入 /xx.xx 时并不能正常显示 和Appach不同
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("响应内容！");//一般
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);
// http.listen(4000,"127.0.0.1");
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


//npm 安装 Node.js 模块语法格式如下：$ npm install <Module Name>
//npm 命令安装常用的 Node.js web框架模块 express: npm install express 
//使用淘宝的NPM镜像安装比较快 ;$ cnpm install [name]

// 3 Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，
//类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
// 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
// 执行 - 执行输入的数据结构
// 打印 - 输出结果
// 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。

// 4 Node.js 回调函数
// Node.js 异步编程的直接体现就是回调。异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
// 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数
//  a 阻塞代码实例
var fs=require('fs');
var data=fs.readFileSync('load.txt');
console.log(data.toString());
console.log("程序执行结束！");
// b 非阻塞代码实例

var fs = require("fs");

fs.readFile('load.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});


console.log('程序非阻塞执行结束');
// document.write("<u> 12121</u>");
//以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。 第二个实例我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
//因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
// a、V8引擎解析JavaScript脚本
// b、解析后的代码，调用Node API
// c、libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎
// d、V8引擎再将结果返回给用户
// 当某个I/O执行完毕时，将以事件的形式通知执行I/O操作的线程，线程执行这个事件的回调函数。为了处理异步I/O，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。

//require表示引包，引包就是引用自己的一个特殊功能
var http = require('http');
var fs = require('fs');

//创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req, res){
    console.log(req.url);
   // ./表示当前目录
    if(true){ //req.url=='./index1.html'
        fs.readFile('./index1.html', function(err,data){
            //req表示请求，request;  res表示响应，response
            //设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
            res.writeHead(200, {'Content-type':'text/html;charset=UTF-8'});
            res.end(data);// 返回html页面
        })
    }else{
        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        res.end("Hello Node JS!");
    }
});

    

//运行服务器，监听4000端口（端口号可以任改）
server.listen(4000,"127.0.0.1");
console.log("服务运行！");