//Interface con IProducto definiendo los atributos y el tipo a cada uno

export interface IProducto{
    nombre:String;
    estado:Boolean;
    precio:Number;
    costo:Number;
    minimo: Number;
    stock?:Number;
}