export class RetornoPadrao<T> {
    mensagem: string;
    resultado: T;
    sucesso: boolean;

    constructor(sucesso: boolean, resultado: T, mensagem: string) {
        this.mensagem = mensagem;
        this.resultado = resultado;
        this.sucesso = sucesso;
    }
}
