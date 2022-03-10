import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WgN5xnCw16t_a9TiqwilDTBd5YC4eqH-_IA1VA4HN5A'
    }
})