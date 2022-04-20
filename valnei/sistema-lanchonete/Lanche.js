import { Prato } from "./Prato.js"

export class Lanche extends Prato {
    constructor(pao, molho) {
        this.pao = pao
        this.molho = molho
    }
}