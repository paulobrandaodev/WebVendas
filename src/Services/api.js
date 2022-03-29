export const apiVendas = axios.create({
    baseURL: 'https://62424fa0d126926d0c50178e.mockapi.io/',
    headers: {
        'Content-Type': 'application/json'
    }
});