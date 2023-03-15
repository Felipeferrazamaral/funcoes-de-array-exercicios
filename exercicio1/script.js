const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function primeiraFuncao(obj) {
    const novoObj = {}
    // novoObj.nome = 'Felipe'
    // novoObj.profissao = 'Dev'
    // console.log(novoObj)
     for(let prop in obj) {
        novoObj[prop] = obj[prop].toUpperCase()
        //console.log(prop)
     }
return novoObj
}
//console.log(primeiraFuncao(objeto))




function segundaFuncao(obj) {

return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, 
o username é ${obj.username} e a senha é ${obj.senha}.`;


}
//console.log(segundaFuncao(objeto))


function terceiraFuncao(obj,callback) {

    const valor = callback(objeto)

    console.log(valor)



}

console.log(terceiraFuncao(objeto,primeiraFuncao))
console.log(terceiraFuncao(objeto,segundaFuncao))


