function adicionarBimestre() {
    let tabela = document.getElementById('tabela-medias');
    let thead = tabela.getElementsByTagName('thead')[0];
    let tbody = tabela.getElementsByTagName('tbody')[0];
  
    let numColunas = thead.getElementsByTagName('th').length;
    let novoBimestre = numColunas - 1;
  
    let coluna = document.createElement('th');
    coluna.innerHTML = `Bimestre ${novoBimestre}`;
  
    for (let i = 0; i < tbody.rows.length; i++) {
      let novaCelula = tbody.rows[i].insertCell(-1);
      novaCelula.innerHTML = `<input type="number" class="nota" min="0" max="10">`;
    }
  
    thead.insertBefore(coluna, thead.lastChild);
  }
  
  function removerBimestre() {
    let tabela = document.getElementById('tabela-medias');
    let thead = tabela.getElementsByTagName('thead')[0];
    let tbody = tabela.getElementsByTagName('tbody')[0];
  
    let numColunas = thead.getElementsByTagName('th').length;
  
    if (numColunas > 3) {
      thead.removeChild(thead.lastChild);
  
      for (let i = 0; i < tbody.rows.length; i++) {
        tbody.rows[i].deleteCell(-1);
      }
    }
  }
  
  function calcularMedias() {
    let tabela = document.getElementById('tabela-medias');
    let linhas = tabela.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  
    for (let i = 0; i < linhas.length; i++) {
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
  