const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send(`
        <div style="text-align:center; padding:50px; font-family:Arial; background:#f0f8ff;">
            <h1 style="color:blue;">🚀 إمبراطورية خليل التقنية</h1>
            <p style="font-size:1.2rem;">البريد الإلكتروني: <strong>Khalilodjawad@gmail.com</strong></p>
            <div style="color:green;">الموقع يعمل بكفاءة ✅</div>
        </div>
    `);
});
app.listen(process.env.PORT || 3000);
