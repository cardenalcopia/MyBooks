import { Usuario } from "./usuario";

export class Libro {
    constructor(public id_libro:number=0,public id_usuario:number=0,public titulo:string,public tipoLibro:string, public autor :string,public precio:number,public photo:string)
    {
        this.id_libro= id_libro;
        this.id_usuario= id_usuario;
        this.titulo=titulo;
        this.tipoLibro=tipoLibro;
        this.autor=autor;
        this.precio=precio;
        this.photo=photo;
    }
}
