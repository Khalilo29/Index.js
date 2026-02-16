const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; padding:50px; font-family:Arial; background:#f0f9ff; height:100vh;">
      <h1 style="color:#0284c7;">👑 موقع خليل الرسمي</h1>
      <p style="font-size:1.2rem;">مرحباً بكم في منصتي الشخصية</p>
      <hr style="width:50%; margin:20px auto;">
      <p>📧 للتواصل: <strong>Khalilodjawad@gmail.com</strong></p>
      <div style="margin-top:30px; color:green; font-weight:bold;">الموقع يعمل بنجاح ✅</div>
    </div>
  `);
});

app.listen(port, () => console.log('Server is running!'));
