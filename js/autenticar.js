let Usuario = $("input[type='text']")
let Senha = $("input[type='password']")
let Enviar = $("input[type='submit']")

let Users = {

}

$('form').submit(function(){
    if(Usuario.val() in Users){
        Usuario.css('border-bottom','3px solid rgb(100,255,100)')
        if(Users[Usuario.val()] === Senha.val()){
            Senha.css('border-bottom','3px solid rgb(100,255,100)')
            alert('Acesso concedido')
        }
        else{
            Senha.css('border-bottom','3px solid rgb(255,100,100)')
        }
    }
    else{
        Usuario.css('border-bottom','3px solid rgb(255,100,100)')
    }
    return false
})