
const Origins = {
    development: 'http://localhost:3000',
    production: 'https://myapp.com',
};

const DevRoutes = [
    "/api/docs/",
    "api/webhook/clerk"
]

const config = {
    Origins,
    DevRoutes
};



export default config;