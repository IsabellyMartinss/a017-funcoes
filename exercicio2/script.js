//Parte A

const soma = (num1,num2) =>{
    return num1+num2
}

console.log(soma(1,1))
console.log(soma(2,6))
console.log(soma(5,15))

//Parte B

const booleano = (num1,num2) =>{
    if(num1>=num2){
        console.log('é maior ou igual')
    }else{
        console.log('digite um número maior')
    }
}

booleano(6,3)

// Parte C

const ImparOuPar = (array) =>{
        if(array % 2 == 0) {
            console.log(`O número ${array} é par`)
        }else{
            console.log(`O número ${array} é ímpar`)
        }
}

ImparOuPar(6)

//Parte D

function mensagem(string){
    console.log(string)
    console.log('Tamanho:', string.length)
    console.log(string.toUpperCase())
}

mensagem('Que conteúdo massa!')
