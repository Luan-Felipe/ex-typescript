"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = false;
let nome = 'Luan';
let idade = 28;
let altura = 1.83;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = false;
let produto = {
    name: 'Luan',
    cidade: 'Itumbiara',
    idade: 28,
};
let meuProduto = {
    nome: 'Tênis',
    preco: 89.99,
    unidades: 5,
};
let dados = ['Luan', 'Samera', 'Kiki'];
let dados2 = ['Luan', 'Samera', 'Kiki'];
let infos = ['Luan', 28];
let boleto = ['agua conta', 199.9, 43243525];
dados.map;
dados.reduce;
dados.pop;
dados.filter;
let aniversario = new Date("2023-02-16 12:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Luan"));
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(111111111));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Luan";
    });
}
;
const bot = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayhello: function () {
        return "Hello !";
    }
};
console.log(bot, bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayhello() {
        return `Hello I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Luan");
console.log(p);
p.sayhello;
console.log(p.sayhello());
class Personagem {
    constructor(nome, forca, skill) {
        this.nome = nome;
        this.forca = forca;
        this.skill = skill;
    }
    attack() {
        console.log(` Atacando com ${this.forca} pontos de forca`);
    }
}
const p1 = new Personagem("Goku", 98, 70);
p1.attack();
class Mago extends Personagem {
    constructor(nome, forca, skill, pontosMagicos) {
        super(nome, forca, skill);
        this.pontosMagicos = pontosMagicos;
    }
}
const p2 = new Mago("Luan", 8001, 8001, 8001);
console.log(p2);
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Luan", "Goku"], ["Vegeta"]);
console.log(numArray);
console.log(stgArray);
