const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send(`
    <body style="background:#0f172a; color:white; text-align:center; padding:50px; font-family:sans-serif;">
        <h1 style="color:#38bdf8;">🚀 نظام خليل المتكامل يعمل الآن!</h1>
        <p>المسؤول: <strong>Khalilodjawad@gmail.com</strong></p>
        <div style="border:1px solid #334155; padding:20px; border-radius:10px; display:inline-block; margin-top:20px;">
            الحالة: متصل (Live) ✅
        </div>
    </body>
    `);
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log("Server running!"));
