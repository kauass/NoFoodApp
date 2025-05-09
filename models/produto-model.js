'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    foto: { type: String, required: true },
    ativa: { type: Boolean, required: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey:false });

produtoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao) 
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Produto', produtoModel);