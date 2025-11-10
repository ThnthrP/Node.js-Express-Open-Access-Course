// const express = require('express');
// const chalk = require('chalk');
// const debug = require('debug')('app');
// const morgan = require('morgan');
// const path = require('path');

import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
// import path from 'path';
// const products = require("./data/products.json");
// import products from './data/products.json' assert { type: 'json' };
// const debug = require('debug')('app');
import debug from 'debug';

import path from 'path';
import { fileURLToPath } from 'url';

// const productRouter = express.Router();
// const productsRouter = require("./src/router/productsRouter");
import productsRouter from "./src/router/productsRouter.js";

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {

    // res.send('Hellp borntoDev1111 Co., Ltd.');
    res.render('index',{username: 'ThnthrP', customers: ["Kitti", "Tanatorn", "Kitty"]}); // ejs


})

app.listen(PORT, () => {
    // console.log("Listening on port %d",port);
    // console.log("Listening on port" + chalk.green(port));
    // console.log("Listening on port" + chalk.red(" : " + port));
    // console.log("Listening on port" + chalk.red(" : " + port));
    debug('app')("Listening on port" + chalk.red(" : " + PORT));
})

// Client-Server Model = Client (ผู้ใช้งาน) ส่ง request ข้อมูลต่างๆ เพื่อขอทาง Server (ผู้ให้บริการ) ว่าต้องการหน้าเว็บ/ ไฟล์์ 
    // จากนั้นผู้ให้บริการจะ response (ตอบกลับ) ด้วยรูปภาพ/ ข้อมูลที่ Client ร้องขอ
// npm init คือคำสั่งสำหรับสร้างไฟล์ package.json. สำหรับครั้งแรก
// npm install express
// npm install express@4.16.0
// node app.js สำหรับ run program
// npm install chalk@4 สำหรับ version 4 (downgrade) using require
    // for Chalk v5+
    // 1. Enable ES Modules in your project 
    // In your package.json, add this line at the top level:
    // "type": "module"
    // 2. Import Chalk using import
    // import chalk from 'chalk';
// debug => ดูว่าก่อนที่จะมาทำงานถึงตรงนี้ เกิดเหตุการณ์อะไรขึ้นก่อนบ้าง ทำให้จัดการ app ได้ง่ายขึ้น
    // set DEBUG=* & node app.js
    // set DEBUG=app & node app.js => ดูเฉพาะส่วนของ app ที่เขียน
// morgan -> middleware ของการทำงานของ web app
    // Morgan เป็นมิดเดิลแวร์ยอดนิยมสำหรับ Node.js ที่ใช้ในการบันทึกคำขอ HTTP 
    // โดยช่วยให้กระบวนการบันทึกคำขอ HTTP ภายในแอปพลิเคชัน Node.js ทำได้ง่ายขึ้น
    // Morgan is a popular HTTP request logger middleware for Node.js. 
    // It simplifies the process of logging HTTP requests in a Node.js application
    // run debug (DEBUG=*) ใหม่ แล้ว เข้าไปที่ web browser แล้วกด enter run หน้าเว็บใหม่
        // จะบอก มี request มาจากไหน, window อะไร, ใช้ระบบปฏิบัติการอะไร และเข้ามาผ่านทางไหน (Chrome?)
// Nodemon และ การจัดการ Environment Variable
// * (1st) ในการสร้าง Web App 
 // Cluster = การที่ Server Cluster ทำงาน / การที่รวม Server หลายเครื่อง / รวมเครื่อง/node ต่างๆ ที่ยิบย่อยเต็มไปหมด
 // เช่น 5 เครื่อง หรือ 10 เครื่อง ในกรณีที่ทำ App ขนาดใหญ่ รองรับคนจำนวนมาก
 // => เครื่องทั้งหมดรวมเป็นระบบเดียวที่เราสามารถคุยกับมันได้ง่าย / e"g" 10 เครื่อง - 5 เครื่อง ทำงาน 1, 5 เครื่อง ทำอีกงาน 1
 // => xวิศวกร, ...x -> /Cloud -> จัดการ *ง่าย*
// Template Engine - EJS
    //     🧩 Template Engine คืออะไร?
        // Template Engine คือ เครื่องมือที่ช่วยสร้างหน้าเว็บแบบไดนามิก (Dynamic Web Page)
        // โดยมันจะผสม โครงสร้าง HTML เข้ากับ ข้อมูลจากฝั่งเซิร์ฟเวอร์
        // เพื่อให้ได้หน้าเว็บที่มีข้อมูลเปลี่ยนไปตามแต่ละผู้ใช้หรือแต่ละสถานการณ์
    //     💡 ตัวอย่างของ Template Engine
        // เช่น
        // EJS (Embedded JavaScript Templates)
        // Pug (หรือ Jade เดิม)
        // Handlebars
        // Mustache
    //     ⚙️ แล้ว “EJS” คืออะไร?
        // EJS ย่อมาจาก
        // Embedded JavaScript
        // เป็น Template Engine ที่ให้คุณเขียน HTML ปกติ แล้ว “ฝัง” (embed) โค้ด JavaScript ลงไปได้
        // โดยใช้สัญลักษณ์พิเศษ เช่น
    //     <%= variable %>   // แสดงค่าของตัวแปร
    // <% if (condition) { %> ... <% } %>   // เขียนเงื่อนไข
// การจัดการ Routing
// Load Balancing