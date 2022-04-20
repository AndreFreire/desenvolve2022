import {Prato} from "./Prato.js"

export class Pizza extends Prato {
    constructor(molho, borda) {
        this.molho = molho
        this.borda = borda
    }
}