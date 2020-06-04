
function funcaoChange(elemento){
	console.log(elemento.value)
}


/* Quando carrega o Body já carrega a função */ 
function load(){
	alert("--> Pagina carregada <--");
}


/* Ao clicar no botão Clique Aqui, mostra mensagem de agradecimento */ 
function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b> Meu amigo: Thank you for click!</b>";
//	console.log(document.getElementById("agradecimento"));
//	alert("Obrigado por clicar")
}

/* Ao clicar na mensagem definida na função clicou, direciona para site externo */
function redirecionar(){
window.open("https://www.hce.com.br");
//	window.open("https://www.hce.com.br");  abre o site em nova aba
//	window.location.href = "https://www.hce.com.br"; abre o site na mesma aba
}

/* Ao passar mouse ativa mensagem Alert */
function trocar(elemento){
	elemento.innerHTML = "Obrigado por passar o mouse AQUI!";
//	document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse AQUI!"
//	alert("Trocar Texto");
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse AQUI!";
//	document.getElementById("mousemove").innerHTML = "Passe o mouse AQUI!"
}



/*var validar = 0;
function validaIdade(idade){
	var validar;  Função com variavel local -> validar
	if (idade >= 18){
		validar = true	
	}else{
		validar = false
	}
	return validar;
}
var idade = prompt("Qual é sua idade?");
validaIdade(idade);
console.log(validar);
/*

/*
var validar;
function validaIdade(idade){
	validar;  Função com variavel global -> validar 
	if (idade >= 18){
		validar = true	
	}else{
		validar = false
	}
	return validar;
}
var idade = prompt("Qual é sua idade?");
validaIdade(idade);
console.log(validar);
*/


/* função soma de 2 números
function soma(n1,n2){
	return n1 + n2;
}
alert(soma(5,10));*/

/* função Replace troca uma palavra por outra
function setReplace(frase, nome, novo_nome){
	return frase.replace(nome,novo_nome)
}
alert(setReplace("Jeep o melhor carro do Brasil!", "Brasil", "Argentina")); */




// Trabalhando com date 
//var d = new Date();
//alert(d); /* mostra a data completa */
//alert(d.getMonth()+1); /*Sempre é preciso somar +1 */
//alert(d.getMinutes()); /* Mostra os minutos corrente */
//alert(d.getDay()); /* Mostra o dia */
//alert(d.getHours()); /*Mostra a hora */

/* Estrutura de repetição com o For
var count;
for(count=0; count <=5; count++){
	alert(count);
}
*/


/* Lacos de repetiçao While e For 
var count = 0;
while (count < 5){
	console.log(count);
	alert(count);
	count ++;
}
*/


/* Condicional IF Else */
/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
	alert("MAIOR de idade!")
}else{
	alert("MENOR de idade!")
}
*/


//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta);      /* mostra nome da fruta e cor */
//console.log(fruta.nome); /*mostra o nome da fruta */
//alert(fruta.cor);        /* mostra o alerta com a cor da fruta */

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");  /* inclui elemento na lista */
//lista.pop();        /* retira o ultimo elemento da lista */
//console.log(lista.reverse()); /*traz os elementos ao contrário na lista */
//console.log(lista.length); /* mostra o tamanho da minha lista */
//console.log(lista);        /* mostra a lista toda */
//console.log(lista.toString()); /*mostra no formato de String */
//console.log(lista[0]); /* Imprime o primeiro elemento maçã */
//console.log(lista.toString()[0]); /*Imprime somente a letra m. Primeira posição na String */
//console.log(lista.join(" - ")); /* Mostra a lista em String separando por traço */

//console.log(lista[1]); /* lista primeiro item da lista */
//alert(lista[1]);

//var nome = "Neilor R. Marangoni";
//var n1 = 5; 
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo!";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
