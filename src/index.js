const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();

// Seccion de configuración
app.set('port', process.env.PORT || 3000);


// Sección de middlewares
app.use(morgan('dev'));
app.use(express.json());

// Sección de Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Archivos Statics 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});