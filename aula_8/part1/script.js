function calcularMedias() {
    let linhas = document.getElementsByTagName('tr');
  
    for (let i = 1; i < linhas.length; i++) {
      let notas = linhas[i].getElementsByClassName('nota');
      let mediaSpan = linhas[i].getElementsByClassName('media')[0];
  
      let soma = 0;
      let contador = 0;
  
      for (let j = 0; j < notas.length; j++) {
        if (notas[j].value !== '') {
          soma += parseFloat(notas[j].value);
          contador++;
        }
      }
  
      if (contador > 0) {
        let media = soma / contador;
        mediaSpan.innerText = media.toFixed(2);
      } else {
        mediaSpan.innerText = '';
      }
    }
  }
               