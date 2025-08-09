// Array global para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um novo amigo à lista.
 */
function adicionarAmigo() {
    // Pega o elemento do input e o valor digitado
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // .trim() remove espaços em branco no início e fim

// 1. Validação combinada: Verifica se o nome tem pelo menos 3 caracteres.
// Isso já cobre o caso de um campo vazio (length 0).
if (nomeAmigo.length < 3) {
    alert('O nome deve ter pelo menos 3 caracteres.');
    return; // Interrompe se for vazio ou muito curto.
}

       const regexLetras = /^[a-zA-Z\sà-úÀ-ÚçÇ]+$/;
    if (!regexLetras.test(nomeAmigo)) {
        alert('Nome inválido. Digite apenas letras e espaços.');
        inputAmigo.value = ''; // Limpa o campo
        return; // Para a execução da função
    }

    // Validação extra: Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado à lista!');
        inputAmigo.value = ''; // Limpa o campo de entrada
        return; // Para a execução
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos visível na página
    atualizarListaAmigos();

    // Limpa o campo de entrada para o próximo nome
    inputAmigo.value = '';
    
    // Devolve o foco para o campo de entrada para facilitar a digitação
    inputAmigo.focus();
}

/**
 * Função para sortear um amigo da lista.
 */
function sortearAmigo() {
    // Pega o elemento onde o resultado será exibido
    const resultadoElement = document.getElementById('resultado');

    // Validação: Verifica se há pelo menos 2 amigos para o sorteio
    if (amigos.length < 2) {
        resultadoElement.textContent = 'Adicione pelo menos 2 amigos para realizar o sorteio!';
        return; // Para a execução da função
    }

    // Gera um índice aleatório dentro do tamanho do array 'amigos'
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Pega o nome do amigo no índice sorteado
    const amigoSecreto = amigos[indiceSorteado];

    // Exibe o resultado na tela
    resultadoElement.textContent = `O amigo secreto é: ${amigoSecreto}`;
}

/**
 * Função auxiliar para atualizar a lista de nomes na tela.
 */
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpa a lista atual para não duplicar nomes
    listaAmigosElement.innerHTML = ''; 

    // Adiciona cada amigo como um item de lista (<li>)
    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento <li> para cada amigo
        const item = document.createElement('li');
        item.textContent = amigos[i];
        
        // Adiciona o item à lista <ul>
        listaAmigosElement.appendChild(item);
    }
}