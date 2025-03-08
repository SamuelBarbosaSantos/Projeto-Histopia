function entrar(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    if(login == "Admin" && senha == "Admin"){
        window.location.href='index.html';
    }else{
        alert ('Senha ou login esta errado')
    }
}