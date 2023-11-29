const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");
let usuarios = [];

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você logou!";
            window.location.href = "tabela.html";
            break;
        }
    }
    alert(mensagem);
}

function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva os usuários no LocalStorage
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("As senhas são diferentes!");
    }
}

function cadastro(){
    window.location.href = "cadastro.html";
}

// Verifica se existem usuários salvos no LocalStorage
const savedUsuarios = localStorage.getItem('usuarios');
if (savedUsuarios) {
    usuarios = JSON.parse(savedUsuarios); // Recupera os usuários do LocalStorage
}