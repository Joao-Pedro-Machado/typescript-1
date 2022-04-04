import { View } from './view.js'

export class MensagemView extends View<string> {

    private tipo = 'info';

    public definirTipoDaMensagem(tipo: string) {
        this.tipo = tipo
    }

    protected template(model: string): string {
        return `
            <p class="alert alert-${this.tipo}">${model}</p>
        `
    }

}