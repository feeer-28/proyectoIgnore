const UsuarioService = require('../services/usuarioService');
class UsuarioController {
    static async listarUsuarios(req,res){
        try{
            let lista = await UsuarioService.listarUsuarios();
            res.json(lista);
        }
        catch(e){
            res.json({error:"error en la perticion"})
        }
    }
    static async crearUsuario(req, res){
        try{
            let {nombre,correo,contrasena} = req.body;
            let usuario = await UsuarioService.crearUsuario(nombre,correo,contrasena);
            res.json(usuario);
        }
        catch(e){
            res.json({error:"error crear"})
        }
    }
    static async buscarUsuario(req, res){
        try{
            let {correo} = req.params;
            let correoB = await UsuarioService.buscarUsuario(correo);
            res.json(correoB);
        }
        catch{
            res.json({error:"error buscar"})
        }
    }
    static async eliminarUsuario(req, res){
        try{
            let {id} = req.params;
            let eliminar = await UsuarioService.eliminarUsuario(id);
            res.json(eliminar);
        }
        catch{
            res.json({error:"error eliminar"})
        }
    }
    static async actualizarUsuario(req, res){
        try{
            let {id} = req.params;
            let {nombre,correo,contrasena} = req.body;
            let actualizar = await UsuarioService.actualizarUsuario(id,nombre,correo,contrasena);
            res.json(actualizar);
        }catch(e){
            res.json({error:"error en al peticion "});
        }
    }
}
module.exports= UsuarioController;