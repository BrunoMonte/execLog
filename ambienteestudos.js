/*questao 42
n_empregado = 500
nas = 1980
ingresso = 1995
data = new Date();
ano_atual = data.getFullYear();
idade = ano_atual - nas
tempo_ing = ano_atual - ingresso
if(idade >= 60 && tempo_ing >= 25){
    console.log('Requerer aposentadoria')
}else{
    console.log('Não requerer')
} */

/*QUESTÃO 41
n1 = 6
n2 = 6
n3 = 8
media_exec = (n1 + n2 + n3) / 3
media_ap = (n1 + n2 * 2 + n3 * 3 + media_exec) / 7

if(media_ap >= 9){
    console.log('Sua média é '+media_ap+', seu conceito A')
}else if(media_ap >= 7.5 && media_ap < 9){
    console.log('Sua média é '+media_ap+', seu conceito B')
}else if(media_ap >= 6 && media_ap < 7.5){
    console.log('Sua média é '+media_ap+', seu conceito C')
}else if(media_ap < 6){
    console.log('Sua média é '+media_ap+', seu conceito D')
} */

/*questao 40
let produto = 'Pitu'
let qtd = 18
let preco = 2.5
let total = qtd * preco
let desconto = 0
if( qtd <= 5){
    desconto = (qtd * preco) * 2 / 100
    total_desc =total - desconto
    console.log('Seu produto é '+produto+', seu valor com desconto fica de R$'+desconto+', e no total de R$ '+total_desc+'')
}else if( qtd > 5 && qtd <= 10){
    desconto = (qtd * preco) * 3 / 100
    total_desc =total - desconto
    console.log('Seu produto é '+produto+', seu valor com desconto fica de R$'+desconto+', e no total de R$ '+total_desc+'')
}else if( qtd > 10){
    desconto = (qtd * preco) * 5 / 100
    total_desc =total - desconto
    console.log('Seu produto é '+produto+', seu valor com desconto fica de R$'+desconto+', e no total de R$ '+total_desc+'')    
}*/

/*questao 38
let cod = 1234
let senha = 9999
if (cod != 1234 || senha != 9999){
    console.log('Usuário ou senha inválido!')
}else{
    console.log('ACESSO PERMITIDO')
}*/

/*questao 36
let homem1 = 70
let homem2 = 60
let mulher1 = 20
let mulher2 = 30
if(homem1 > homem2 && mulher1 < mulher2){
    soma = homem1 + mulher1
    produto = homem2 * mulher2
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}else if(homem1 > homem2 && mulher2 < mulher1){
    soma = homem1 + mulher2
    produto = homem2 * mulher1
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}else if(homem2 > homem1 && mulher1 < mulher2){
    soma = homem2 + mulher1
    produto = homem1 * mulher2
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
}else if(homem2 > homem1 && mulher2 < mulher1){
    soma = homem2 + mulher2
    produto = homem1 * mulher1
    console.log('A soma do homem mais velho com a mulher mais nova  é de '+soma+', o produto homem mais novo com a mulher mais velha é de '+produto+'')
} */



/*questao 35
let lit_a = 50
let T_alc = 2.90 * lit_a
if(lit_a <= 20){
    des = T_alc * 3 /100
    pagarA = T_alc - des
    console.log('O total a pagar de alcool é R$' +pagarA+'')
}else if(lit_a > 20){
    des = T_alc * 5 /100
    pagarA = T_alc - des
    console.log('O total a pagar de alcool é R$ '+pagarA+'')
}
let lit_g = 50
let T_gas = 3.30 * lit_g
if(lit_g <= 20){
    des = T_gas * 4 /100
    pagarG = T_gas - des
    console.log('O total a pagar de gasolina é R$ '+pagarG+'')
}else if(lit_g > 20){
    des = T_gas * 6 /100
    pagarG = T_gas - des
    console.log('O total a pagar de gasolina é R$ '+pagarG+'')
} */


/* QUESTAO 34
x = 3
y = 2
z = x * y + 5
if( z <= 0){
    console.log(' A letra Z vale : '+z+'  (A)')
}else if( z <= 100){
    console.log(' A letra Z vale : '+z+'  (B)')
}else{
    console.log('A letra Z vale: '+z+'   (C)')
} */
// 11 - B
// 455 - C
// -2  - A
// -5  - A
// 155 - C

/* questao 33
var n1 = 5
var n2 = 5
if(n1 == n2){
    console.log('OS NUMEROS SÃO IGUAIS')
}else if( n1 > n2){
    console.log('O primeiro numero é maior que o segundo')
}else{
    console.log('O segundo numero é maior que o primeiro')
} */

/*questao 32
var time_1 = 'tabajara'
var time_2 = 'vaca'
var gol1 = 21
var gol2 = 25
if(gol1 == gol2){
    console.log('EMPATE')
}else if(gol1 > gol2){
    console.log('O time '+time_1+' ganhou de '+gol1+' a '+gol2+'')
}else{
    console.log('O time '+time_2+' ganhou de '+gol2+' a '+gol1+'')
} */

/*questao 31 nao entendi a questao
var a = 10
var b = 10
var c = 10
if( ) */


/*questao 30
var a = 30
var b = 25
var c = 250
if(a < b && b < c){
    console.log(`${a} ${b} ${c}`)
}else if( b < a && a < c){
    console.log(''+b+' '+a+' '+c+'')
}else if( c < b && b < a){
    console.log( ''+c+' '+b+' '+a+'')
}else if( a < c && c < b){
    console.log(''+a+' '+c+' '+b+'')
}else if( b < c && c < a){
    console.log(''+b+' '+c+' '+a+'')
}else if(c < a && a < b){
    console.log(''+c+' '+a+' '+b+'')
} */


/*questao 29
var n1 = 10
var n2 = 8
var n3 = 15
if(n1 > n3 && n2 > n3){
    total = n1 + n2
    console.log(' '+total+'')
}else if(n1 > n2 && n3 > n2){
    total = n1 + n3
    console.log(''+total+'')
}else if(n2 > n1 && n3 > n1){
    total = n2 + n3
    console.log(''+total+'')
} */


/* questao 28
var n1 = 6
var n2 = 5
var n3 = 650
if(n1 > n2 && n1 > n3){
    console.log(''+n1+' é maior que numero entre eles!')
}else if(n2 > n1 && n2 > n3){
    console.log(''+n2+' é maior numero entre eles! ')
}else if( n3 > n1 && n3 > n2){
    console.log(''+n3+' é o maior numero entre eles! ')
} */



/*questao 27
var valor = -15
if(valor == 0){
    console.log('SALDO ZERO')
}else if( valor > 1){
    console.log('SALDO POSITIVO')
}else if( valor < 0 ){
    console.log('SALDO NEGATIVO')
} */

/*QUESTAO 26
var q_atual = 750
var max = 1300
var min = 100
var med = (max + min) / 2
if( q_atual >= med){
    console.log('NÃO EFETUAR COMPRA')
}else{
    console.log('EFETUAR COMPRA')
} */

/*QUESTAO 25
var n_conta = 15130.08
var saldo = 2500
var debito = 3000
var credito = 100
var s_atual = (saldo - debito) + credito
if(s_atual >= 0){
    console.log('SALDO POSITIVO')
}else{
    console.log('SALDO NEGATIVO')
} */


/*questao 23
var nome = 'Bruno'
var sex = 'masculino'
var alt = 2
if(sex == "masculino"){
    pesoi = (72.7 * alt) - 58
    console.log('O meu nome é '+nome+', sou do sexo '+sex+' e meu peso ideal é '+pesoi+'Kg.')
}else{
    pesoi = (62.1 * alt) - 44.7
    console.log('O meu nome é '+nome+', sou do sexo Feminino e meu peso ideal é '+pesoi+'Kg.')
}   */


/*QUESTAO 24
var sal = 1800
var vvenda = 1400
if(vvenda <= 1.500){
    var comissao = vvenda * 3 / 100
}else{
    var comissao = vvenda * 8 / 100
}
var salf = sal + comissao                            
console.log('O salário é de R$ '+sal+', minha comissão é de R$ '+comissao+', e meu salário final é de '+salf+'') */

/*questao 22
var salario =  2500
var vhora = salario / 160 
var hextra = 20
var vextra = vhora * 50 /100 * hextra
var salariof = salario + vextra
console.log('Seu salario é de R$ '+salario+', seu valor extra é de R$ '+vextra+', seu salario final é R$ '+salariof+'.') */


/*questao 21 pendente */

/*questao 20
console.log('Vamos contar ..')
for(c = 5; c <= 7; c++){
    console.log(c)
} console.log('FIM DA CONTAGEM !')  //NESSA QUESTAO, ENTENDI QUE PODERIA USAR FOR (PROCEDE DR?)
*/

/*QUESTAO 19
var n1 = 7
var n2 = 8
if(n1 > n2){
    console.log('O primeiro numero é MAIOR que segundo.')
}else{
    console.log('O segundo numero é MAIOR que o primeiro.')
} */


/*questao 18
var anoa = 2020
var anon = 2002
var idade = anoa - anon
if(idade < 16){
    console.log('Voce tem '+idade+' anos. NAO VOTA')
}else if(idade >= 16 && idade < 18 || idade > 65){
    console.log('Voce tem '+idade+' anos. VOTO OPCIONAL')
}else{
    console.log('Voce tem '+idade+' anos. VOTO OBRIGATORIO!')
} */


/*questao 17
var av1 = 5
var av2 = 5
var media = (av1 + av2) / 2
if(media >= 6){
    console.log('Primeira nota: '+av1+', a segunda nota: '+av2+': ALUNO APROVADO')
}else{
    console.log('Primeira nota: '+av1+', a segunda nota: '+av2+': ALUNO REPROVADO')
}
*/

/*questao 16
var fruta = 11
var total = 0
if(fruta == 0){
    console.log('Ele nao quer fruta, ta de palhaçada!!!')
}else if(fruta < 12){
    total = fruta * 1.30
    console.log('O valor total de frutas é de R$'+total+'')
}else if(fruta >= 12){
    total = fruta * 1.00
    console.log('O valor total de frutas é de R$ '+total+'')
} */


/*questao 15
var n = -5
if( n >= 0){
    console.log('Esse numero é positivo!')
}else{
    console.log('Esse numero é negativo!')
} */
 

/*questao 14
var n = 1
if(n >= 10){
    console.log('Esse valor é maior que 10')
}else{
    console.log('Não é maior que 10')
} */


/*questao 13
var n1 = 6
var n2 = 5
var n3 = 8
var mediaf = (n1 * 2 + n2 * 3 + n3 * 5) /10
console.log(' Sua média final é: '+mediaf+' ') */
//mandar apartir daqui//

/* questao 12
var cel = 60
var conv = 9 / 5 * cel + 32  //formula de conversão//
var f = conv
console.log('O grau Celsius é de: '+cel+', e a conversão de Fahrenheit é de : '+f+' ') */


/* questao 11
var Qcarro = 20
var Vcarro = 12000
var valorv = Qcarro * Vcarro  //valor total das vendas//
var salario = 1200
var vcom = valorv * 5 / 100
var salf = salario + vcom
console.log('O valor da sua comisão é de R$ '+vcom+', e seu salário final é de R$ '+salf+'.  ') /*
/* Nessa questão tem que fazer numero invetario para valor do carro unitário*/


/*QUESTAO 10
var cfab = 50000
var pdis = 28
var imp = 45
var valordis = cfab * pdis / 100
var valorimp = cfab * imp / 100
var clienteF = cfab + valordis + valorimp
console.log(`O valor do veiculo para consumidor final é R$ ${clienteF} `)  */


/* questão 9
var salatual = 1000
var porcentagem = 15
var reajuste = salatual * porcentagem / 100
var salnovo = salatual + reajuste
console.log('Seu novo salario é: '+salnovo+'') */


/*questao 8
var vbranco = 223
var vnulo = 133
var val = 1280
var eleitores = val + vnulo + vbranco
var porbranco = vbranco / eleitores * 100
var pornulo = vnulo / eleitores * 100
var porval = val / eleitores * 100
console.log('O total de eleitores são: '+eleitores+'')
console.log('Votos validos são: '+porval+'%')
console.log('Votos brancos são: '+porbranco+'%')
console.log('Votos nulos são: '+pornulo+'%')  */


/*questao 7
var aAtual = 2020
var aNas = 1995
var anos = aAtual - aNas
var dias = 365 * anos
console.log('Você tem '+anos+' anos, e '+dias+' dias de nascido. ') */


/*questao 6
var base = 22
var alt = 30
var area = base * alt
console.log('A area do retangulo é: '+area+' m².') */

/*questao 5
var n = 12000
var suc = n + 1
var ant = n - 1
if(n => 0){
    console.log('O numero atual é: '+n+', o seu sucessor é: '+suc+', e seu antecessor é: '+ant+'. ')
} */