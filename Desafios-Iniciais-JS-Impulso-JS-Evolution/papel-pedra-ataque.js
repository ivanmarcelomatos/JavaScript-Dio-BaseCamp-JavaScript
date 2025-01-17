// Desafio

// Pedra, Papel, Ataque Aéreo é um jogo antigo mas que é popular até hoje. Nele, duas ou mais pessoas fazem gestos com a mão para vencer o adversário. 

// As partidas são muito simples. Os jogadores podem escolher entre o sinal de uma Pedra (o punho), o sinal de um Papel (a palma aberta), e o sinal para o Ataque Aéreo (igual o do Papel, mas com apenas o polegar e o mindinho estendidos). 



// Uma partida, com dois jogadores, possuem as seguintes regras para se definir um vencedor:

//     Ataque Aéreo vs. Pedra: Neste caso, o jogador com o Ataque Aéreo derrota o jogador com a Pedra, por razões óbvias.
//     Pedra vs. Papel: Neste caso, o jogador com a Pedra derrota o com Papel, porque a Pedra machuca muito mais.
//     Papel vs. Ataque Aéreo: Aqui o Ataque Aéreo ganha, porque Ataque Aéreo sempre ganha e o Papel é patético.
//     Papel vs. Papel: Nesta variação, ambos os jogadores ganham, porque o Papel é inútil e ninguém que enfrenta o Papel pode perder.
//     Pedra vs. Pedra: Para este caso não há ganhador, porque depende do que os jogadores decidem fazer com a Pedra e normalmente não fazem nada.
//     Ataque Aéreo vs. Ataque Aéreo: Quando isto acontece, todos os jogadores perdem, devido a Aniquilação Mútua.

// Agora desenvolva um programa que, dada as escolhas de dois jogadores, informe quem venceu o jogo.







// Entrada

// A entrada consiste de N (1 ≤ N ≤ 1000) casos de teste. N deve ser lido na primeira linha da entrada. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. A primeira string representa o sinal escolhido pelo jogador 1 e a segunda string representa o sinal escolhido pelo jogador 2. Essas strings podem ser:

//     “ataque”: para representar o Ataque Aéreo
//     “pedra”: para representar a Pedra
//     “papel”: para representar o Papel





// Saída

// A saída deve conter o seguinte:

//     “Jogador 1 venceu”: se o Jogador Um tiver vencido a partida
//     “Jogador 2 venceu”: se o Jogador Dois tiver vencido a partida
//     “Ambos venceram”: se os dois jogadores tiverem vencido a partida
//     “Sem ganhador”: se não houver ganhador
//     “Aniquilacao mutua”: se ocorrer Aniquilação Mútua

// Cada saída de um caso de teste deve estar em uma linha.
 
// Exemplo de Entrada 	Exemplo de Saída

// 2
// pedra
// pedra
// ataque
// papel
	

// Sem ganhador
// Jogador 1 venceu





// // código inicial no desafio
// // a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// // Abaixo segue um exemplo de código que você pode ou não utilizar

// let N = parseInt(gets());
// let jogador1, jogador2;
// for (let i = 0; i < N; i++) {
//     jogador1 = gets();
//     jogador2 = gets();
    		
// //TODO: Complete os espaços em branco com uma possível solução para o desafio

//     if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
//         print("Aniquilacao mutua");
//     else if (                                                )
//     	print("Ambos venceram");
//     else if (                                               ) print("Jogador 1 venceu");
//     else if                                                 ) print("Jogador 2 venceu");
//     else if (                                               ) print("Jogador 1 venceu");
//     else if (                                               ) print("Jogador 2 venceu");
//     else print("Sem ganhador");
// }











// // Solução do forum de usuários
// https://web.dio.me/topics/desafio-pedra-papel-ataque-aereo?back=%2Ftrack%2Fimpulso-javascript-evolution&page=1&order=oldest

let N = parseInt(gets());

let jogador1, jogador2;

for (let i = 0; i < N; i++) {


//foi preciso usar .trim() para remover um espaço que tava bugando a entrada
  jogador1 = gets().trim(); 
  jogador2 = gets().trim();

  

//TODO: Complete os espaços em branco com uma possível solução para o desafio

  

  if (jogador1.toUpperCase() === "ATAQUE") {

   if (jogador2.toUpperCase() === "ATAQUE") {

    print("Aniquilacao mutua");

   }

   else {

    print("Jogador 1 venceu");

   }

  }

  else if (jogador1.toUpperCase() === "PEDRA") {

   if (jogador2.toUpperCase() === "PEDRA") {

    print("Sem ganhador");

   }

   else if (jogador2.toUpperCase() === "PAPEL") {

    print("Jogador 1 venceu");

   }

   else {

    print("Jogador 2 venceu");

   }

  }

  else if (jogador1.toUpperCase() === "PAPEL") {

   if (jogador2.toUpperCase() === "PAPEL") {

    print("Ambos venceram");

   }

   else {

    print("Jogador 2 venceu");

   }

  }

}






