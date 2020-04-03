const crypto = require('crypto');
const connection = require('../database/connection')  //Importa o "connection" para onde eu vou precisar me comunicar com o banco de dados.

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        //const paramsQuery = request.query;       //ter acesso aos parâmetros vindos pela rota (Query params).
        //const paramsRoute = request.params;      //ter acesso aos Rute params
        //const paramsBody = request.body;         //ter acesso ao Request body

        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};