function criarCampos(){
//Criar variavel para receber o elemento div
    let div = document.queryselector('#notas');
    let qtd = document.queryselector('#campos').value;
    div.innerHTML = "";
//
    for(let i = 0; i < qtd; i++){
        let input = document.createElement('imput');
        input.type = 'number';
        input.className = 'nota';
        input.placeholder = 'Nota' + (1 + 1);
        div.appendChild(input);
    }
    let btn = document.createElement('button');
    btn.innerHTML = 'Calcular media';
    btn.onclick = calcularMedia;
    div.appendChild(btn);
}
//
    function calcularMedia(){
        let notas = document.querySelectorAll('.nota');
        let soma = 0;
        for(let i = 0; i < notas.length; i++){
            soma += parseFloat(notas[i].value);
        }
        let media = soma / notas. length;
        let div = document.querySelector('#resultado');
        div.innerHTML = 'Média: '+ media.toFixed(2);
}