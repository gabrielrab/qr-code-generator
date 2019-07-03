const express = require('express');
const qr = require('qr-image');

const app = express();

app.set('view engine', 'ejs');

app.get('/qrcode', (req, res)=>{
    const url = 'https://google.com.br';
    const code = qr.image(url, {type: 'png'});

    res.type('png');

    console.log('[qr-code] Código gerado com sucesso.');

    code.pipe(res);
})

app.listen(3000 || process.env.PORT, ()=>{
    console.log('API esta rodando');
});