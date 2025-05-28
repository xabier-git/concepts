const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies  
// Prefijo general para todas las rutas
const basePath = '/Instagramwomenfootballers';

app.get(`${basePath}/welcome`, (req, res) => {
  res.status(200).json({ message: 'Bienvenido al servicio IGService' });
});

//  servicio IGProfilesList
app.get(`${basePath}/IGProfilesList`, (req, res) => {
  const profiles = [
    { nombre: 'Lionel Messi', nickname: '@leomessi', tieneNovio: false, equipoActual: 'Inter Miami' },
    { nombre: 'Cristiano Ronaldo', nickname: '@cristiano', tieneNovio: false, equipoActual: 'Al-Nassr' },
    { nombre: 'Neymar Jr.', nickname: '@neymarjr', tieneNovio: false, equipoActual: 'Al-Hilal' },
    { nombre: 'Kylian Mbappé', nickname: '@k.mbappe', tieneNovio: false, equipoActual: 'Paris Saint-Germain' },
    { nombre: 'Erling Haaland', nickname: '@erling.haaland', tieneNovio: false, equipoActual: 'Manchester City' }
  ];
  res.json(profiles);
});


  // Response message is intentionally in Spanish for the target audience
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});