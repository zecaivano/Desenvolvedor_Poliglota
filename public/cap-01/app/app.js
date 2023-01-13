import { Conta } from "./models/conta.js";
import { calculaImc } from "./oms.js";

const imc = calculaImc({altura: 1.78, peso: 78})
console.log(imc);

const conta = new Conta ({
    banco: '123',
    numero: '789',
    agencia: '456',
    titular: 'Jose'
})

console.log(conta);