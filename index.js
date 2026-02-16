const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; padding:50px; font-family:Arial; background:#e0f2fe; height:100vh;">
      <h1 style="color:#0369a1;">👑 موقع خليل الرسمي</h1>
      <p style="font-size:1.2rem;">Email: <strong>Khalilodjawad@gmail.com</strong></p>
      <div style="color:green; font-weight:bold; margin-top:20px;">تمت إعادة بناء الموقع بنجاح ✅</div>
    </div>
  `);
});
app.listen(process.env.PORT || 3000);
