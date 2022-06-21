export class Usuario {
    public id_usario:number
    public nombre:string
    public apellidos:string
    public correo:string
    public url :string
    public password :string
    constructor(id_usuario:number,nombre:string,apellidos:string,correo:string,url:string,password:string)
    {
        this.id_usario= id_usuario;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.correo=correo;
        this.url=url;
        this.password=password
    }
}


