// script.js
function buscarCep() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('estado').value = data.uf;
        } else {
          alert("CEP não encontrado.");
        }
      })
      .catch(() => {
        alert("Erro ao buscar o CEP.");
      });
  } else {
    alert("Formato de CEP inválido.");
  }
}