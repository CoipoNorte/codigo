const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Ruta "About"
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
