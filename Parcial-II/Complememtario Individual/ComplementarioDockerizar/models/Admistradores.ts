//importamos moongose como parte de la base de datos que se va a usar

//Importamos IAdministrador de la carpeta de interfaces
import mongoose,{Mongoose} from "mongoose";
import { Schema, model } from "mongoose";
import { IAdministradores } from "../interfaces";

const AdministradoresSchema: mongoose.
Schema = new Schema<IAdministradores>({
    nombre:{
        type: String,
        required: [true, `El nombre del administrador es obligatorio`],
        unique: true
    },
    nusuario: {
        type: String,
        required:[true, `El nombre de usuario es obligatorio`],
        unique: true
    },
    correo: {
        type: String,
        required: [true, `El correo es obligatorio`],
        unique: true
    },
    contrasena:{
        type: String,
        required:[true, `La contraseña es obligatoria`],
        unique: true
    }

})
const Administrador: mongoose.Model<IAdministradores> = model<IAdministradores>
('Administrador', AdministradoresSchema);

export{
    Administrador
}
