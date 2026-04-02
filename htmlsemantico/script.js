function alterarNome() {
    let trocarNome = document.getElementById('inputNOME').value;
    if (trocarNome === ''){
        alert('digite um nome!')  
       } else {
            document.getElementById('nome usuario').innerHTML = trocarNome;

        }  
        
    }
    