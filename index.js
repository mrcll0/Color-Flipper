// Definindo um array de cores
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Selecionando o botão com o ID "btn" e a tag com a classe "color"
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Adicionando um evento de clique ao botão
btn.addEventListener("click", function () {
    // Gerando um número aleatório entre 0 e 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // Alterando a cor de fundo do corpo da página para a cor escolhida
    document.body.style.backgroundColor = colors[randomNumber];

    // Atualizando o texto da tag com a classe "color" com o nome da cor escolhida
    color.textContent = colors[randomNumber];
});

// Função que gera um número aleatório entre 0 e o comprimento do array "colors"
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
