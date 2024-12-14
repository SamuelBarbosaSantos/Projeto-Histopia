function entrar(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    if(login == "Samuel" && senha == "12345"){
        window.location.href='index.html';
    }else{
        alert ('Senha ou login errado')
    }
}