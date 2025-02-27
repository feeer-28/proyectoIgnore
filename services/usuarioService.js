const {Usuario} = require('../models');
const { use } = require('../router/usuarioRouter');

class UsuarioService{
    static async listarUsuarios(){
        try{
            return await Usuario.findAll();
        }
        catch (e){
            console.log("error en la consulta");
        }
    }
    static async crearUsuario(nombre,correo,contrasena){
        try{
            return await Usuario.create({nombre,correo,contrasena})
        }
        catch(e){
            console.log("error para guardar")
        }
    }
    static async eliminarUsuario(id){
        try{
            let resultadoB = await Usuario.findByPk(id);
            if(resultadoB){
                await resultadoB.destroy();
                return("eliminado")
            }
        }
        catch(e){
            console.log("error para eliminar")
        }
    }
    static async buscarUsuario(correo){
        try{
            return await Usuario.findOne({where:{correo}})
        }
        catch(e){
            console.log("error buscar")
        }
    }
    static async actualizarUsuario(id,nombre,correo,contrasena){
        try{
            return await Usuario.update({nombre,correo,contrasena},{where:{id}})
        }
        catch(e){
            console.log("error actualizar")
        }
    }
}
module.exports=UsuarioService;