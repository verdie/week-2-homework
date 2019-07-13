const superagent = require('superagent')


function getTatooineResidents(){
    return superagent
    .get('https://swapi.co/api/planets/1/')
    .then(res => {
        return res.body.residents
    })
}

function promiseMeAString(a){
    const string = new Promise((resolveFunction, rejectFunction) => {  
        if (a =='I Promise!') { 
            resolveFunction("You kept the Promise!")   
        } 
        else {    
            rejectFunction("You have failed me!")  
        }
    })
    return string
}

module.exports =  {
    getTatooineResidents,
    promiseMeAString,
} 