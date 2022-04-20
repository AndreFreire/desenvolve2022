import { Prato } from "./Prato.js";

export class Pedido {
       constructor(nomeCliente, taxaDeServico, itens) {
        this.nomeCliente = nomeCliente
        this.taxaDeServico = taxaDeServico
        this.itens = itens
    }
    
    calcularTotal() {
        return 0
    }

    mostrarFatura() {
        console.log("----- Fatura -----")
        console.log("Nome do cliente: " + this.nomeCliente)
        console.log("Taxa de Serviço: " + this.taxaDeServico)
    }
}