'use strict' 

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriaModel = new schema({
    titulo: { type: String, trim: true, index: true, required: true },
    descricao: { type: String },
    foto: { type: String, required: true },
    ativo: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey:false });

categoriaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao) 
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Categoria', categoriaModel);