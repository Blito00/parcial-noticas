const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;

app.get('/noticias', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-09&sortBy=publishedAt&apiKey=cb318c5fbe8e452cba4e1da53bf8cab8');

        const primeraNoticia = response.data.articles[0];
        const { title, description } = primeraNoticia;

        res.json({ title, description });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener noticias');
    }
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
