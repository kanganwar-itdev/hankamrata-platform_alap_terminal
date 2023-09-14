const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;

//set layout
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('public'))

//root
app.get('/', (req, res) => {
    res.render('timeline', { 
        title: 'Halaman Timeline',
        actived: 'timeline',
        layout: 'layouts/main-layouts'
    });
});

app.get('/report', (req, res) => {
    res.render('report', { 
        title: 'Halaman Report',
        actived: 'report',
        layout: 'layouts/main-layouts'
    } );
});

app.get('/pantau', (req, res) => {
    res.render('pantau', { 
        title: 'Halaman Pantau',
        actived: 'pantau',
        layout: 'layouts/main-layouts'
    } );
});

app.get('/radio', (req, res) => {
    res.render('radio', { 
        title: 'Halaman Radio',
        actived: 'radio',
        layout: 'layouts/main-layouts'
    } );
});

app.get('/map', (req, res) => {
    res.render('map', { 
        title: 'Halaman Map',
        actived: 'map',
        layout: 'layouts/main-layouts'
    } );
});

app.get('/dataset', (req, res) => {
    res.render('dataset', { 
        title: 'Halaman Dataset',
        actived: 'dataset',
        layout: 'layouts/main-layouts'
    } );
});

app.get('/admin', (req, res) => {
    res.render('admin', { 
        title: 'Halaman Admin',
        actived: 'admin',
        layout: 'layouts/main-layouts'
    } );
});

//default
app.use('/', (req, res) => {
    res.status(404);
    res.send('Halaman Tidak Ditemukan');
});

app.listen(port, () => {
    console.log(`Contoh app listening pada localhost port : ${port}`);
});