import { Imagem } from "./models/imagem.model";

export class Util {
    public static lerDadosImagem(blob: File) {
        return new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                var imagem : Imagem = new Imagem();
                
                imagem.mime = blob.type;
                imagem.titulo = blob.name;
                imagem.imagem = fileReader.result as string;

                resolve(imagem);
            }
            
            fileReader.readAsDataURL(blob);
        });
    }
}