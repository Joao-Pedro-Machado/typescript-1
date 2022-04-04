import { View } from './view.js';
export class MensagemView extends View {
    constructor() {
        super(...arguments);
        this.tipo = 'info';
    }
    definirTipoDaMensagem(tipo) {
        this.tipo = tipo;
    }
    template(model) {
        return `
            <p class="alert alert-${this.tipo}">${model}</p>
        `;
    }
}
