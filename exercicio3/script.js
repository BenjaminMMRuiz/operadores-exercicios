//console.log((5>20), (5<2));

//console.log(5===5 || 5==="5");

//console.log(20 >! 50);

//console.log(20 >! 50 || 50 > 60);

//const operacao1 = 20 < 50 && 50 > 90;
//console.log(operacao1);

//--------------------------------

//**O funcionário Fulano de Silva, 
//com CPF: 000.000.000-00, 
//nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. 
//Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, 
//mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

//a) Auxílio creche por filho:  R$45,50

//b) Comissão de 10% sobre o total de vendas mensal

//c) Total de vendas dos meses de janeiro a junho:

//- Janeiro: R$ 5.784,50
//    - Fevereiro: R$ 3.418,41
//    - Março: R$ 4.124,10
//   - Abril: R$ 1.874,00
//    - Maio: R$ 7.000,00
//    - Junho: R$ 9.450,00

//d)  Desconto do INSS 5% do salário

Calcule:

//1) O salário fixo mais o auxílio creche

//2) Quanto Fulano de Silva receberá de comissão em janeiro 
//(dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
//(o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
//5) A média do salário em  seis meses (de janeiro a junho), 
//levando em consideração as comissões e auxílio. 
//(Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. 
//Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

let sal = 2000
let filhos = 2
let auxCreche = 45.50
let comissao = 10/100
let inss = 5/100
let venJan = 5784.50
let venFev = 3418.41
let venMar = 4124.10
let venAbr = 1874.00
let venMai = 7000.00
let venJun = 9450.00

//R1)
let resposta1 = sal + (filhos * auxCreche)
console.log(`R1) R$${resposta1}`)

//R2)
let resposta2 = venJan*comissao
console.log(`R2) R$${resposta2}`)

//R3)
let resposta3 = (sal +(venJan*comissao))*inss
console.log(`R3) RS${resposta3}`)

//R4)
let salMesJan = ((sal + venJan - (sal +(venJan*comissao))*inss)+filhos*auxCreche)
let salMesFev = ((sal + venFev - (sal +(venFev*comissao))*inss)+filhos*auxCreche)
let salMesMar = ((sal + venMar - (sal +(venMar*comissao))*inss)+filhos*auxCreche)
let salMesAbr = ((sal + venAbr - (sal +(venAbr*comissao))*inss)+filhos*auxCreche)
let salMesMai = ((sal + venMai - (sal +(venMai*comissao))*inss)+filhos*auxCreche)
let salMesJun = ((sal + venJun - (sal +(venJun*comissao))*inss)+filhos*auxCreche)

console.log(`R4) Janeiro: ${salMesJan}`)
console.log(`Fevereiro: ${salMesFev}`)
console.log(`Março: ${salMesMar}`)
console.log(`Abril: ${salMesAbr}`)
console.log(`Maio: ${salMesMai}`)
console.log(`Junho: ${salMesJun}`)

//R5)
let mediaSalSemestre = (salMesJan + salMesFev + salMesMar + salMesAbr + salMesMai + salMesJun)/6
console.log(`R5) A media semestral salarial: ${mediaSalSemestre}`)