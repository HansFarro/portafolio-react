import devtuto from '../img/projects/devto2.jpg';
import cotizadorcripto from '../img/projects/cotizadorcripto.jpg';
import buscadorbebidas from '../img/projects/buscador_bebidas.jpg';
import musica_letras from '../img/projects/musica_letras.jpg';
import breaking_bad from '../img/projects/frases_breaking_bad.jpg';
import pixaAPI from '../img/projects/pixaby_api.jpg';

const projects = [
    {
        id: 1,
        image : {
            src: devtuto,
            alt: 'DEVtuto',
            
        },
        name: 'DEVtuto website',
        description :[
            'Empresa que ofrece cursos especializados en tecnologias web como HTML5, CSS3, JS siguiendo el stack MERN..',
        ]
    },
    {
        id: 2,
        image : {
            src: cotizadorcripto,
            alt: 'Criptomonedas'
        },
        name: 'Cotizador de criptomoneda ',
        description :[
            'Sitio para cotizar criptomonedas,elige tu moneda preferida y selecciona dentro de las diversas criptomonedas que ofrecemos.'
        ]
    },
    {
        id: 3,
        image : {
            src: buscadorbebidas,
            alt: 'Buscador de bebidas'
        },
        name: 'Buscador de bebidas',
        description :[
            'Escribe el ingrediente y selecciona la categoria de tu agrado. Visualiza las recetas de cada bebida.'
        ]
    },
    {
        id: 4,
        image : {
            src: musica_letras,
            alt: 'Letras de canciones'
        },
        name: 'Letras de canciones',
        description :[
            'Ten información sobre tu artista favorito y canción favorita.'
        ]
    },
    {
        id: 5,
        image : {
            src: breaking_bad,
            alt: 'Frases breaking bad'
        },
        name: 'Frases breaking bad',
        description :[
            'Obtén fácilmente frases de la popular serie Breaking Bad.'
        ]
    },
    {
        id: 6,
        image : {
            src: pixaAPI,
            alt: 'Pixaby API'
        },
        name: 'Pixaby API',
        description :[
            'Aplicación web que utiliza la API de Pixaby para buscar imagenes y descargarlas gratuitamente.'
        ]
    },
]

export default projects;