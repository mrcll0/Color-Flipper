// Array de dígitos hexadecimais
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// Selecionando o botão com o ID "btn" e a tag com a classe "color"
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    
    // Atualizando o texto da tag com a classe "color" com o código de cor hexadecimal gerado
    color.textContent = hexColor;

    // Alterando a cor de fundo do corpo da página para a cor hexadecimal gerada
    document.body.style.backgroundColor = hexColor;
});

// Função que gera um número aleatório para acessar um valor no array "hex"
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
