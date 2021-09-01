//Escolher entre Cesar e Base 64
function opcoesCifra() {
    if (document.getElementById("escolhaCifra").value == "cesar") {
        document.getElementById("cesar").style.display = "flex";
        document.getElementById("base64").style.display = "none";
    }
    else if (document.getElementById("escolhaCifra").value == "base64") {
        document.getElementById("base64").style.display = "flex";
        document.getElementById("cesar").style.display = "none";
    }

    else {
        document.getElementById("cesar").style.display = "none";
        document.getElementById("base64").style.display = "none";
    }
}

//Código Cesar
function codCesar(array, key){
    return array.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c
    }).join('')    
}

function decodCesar(array, key){
    return array.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c
    }).join('')    
}

// Base 64
function base64 (input, decisao) {
    return (decisao)? btoa(input) : atob(input)
}

//Codificar e Decodificar
escolhaCifra.addEventListener('change',()=>{
    (escolhaCifra.value == "base64")? base64() : cesar(); 
});

document.getElementById("mensagemCesar").addEventListener("keyup", (c)=>{
    let input = document.getElementById("mensagemCesar").value.split('');
    let output = document.getElementById("resultadoCesar");
    let incremento = parseInt(document.getElementById("incremento").value);
    let decisao = document.getElementById("codCesar").checked

    if(decisao){
        output.value = codCesar (input, incremento);
    } else {
        output.value = decodCesar(input, incremento);
    }
       
})

document.getElementById("mensagem64").addEventListener("keyup", (c)=>{
    let input = document.getElementById("mensagem64").value
    let output = document.getElementById("resultado64");
    let decisao = document.getElementById("codBase").checked
    
    output.value = base64(input, decisao)
})


