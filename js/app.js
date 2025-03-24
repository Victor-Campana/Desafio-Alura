let totalGeral= 0
document.getElementById('lista-produtos').innerHTML= '';
document.getElementById("valor-total").textContent = 'R$ 0';

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value; 
    let nomeProduto = produto.split('-')[0];
    let ValorUnitario= produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if(ValorUnitario<=0){
      alert ("insira um Produto Valido");
      carrinho.innerHTML = '';
    }
    if(quantidade<=0){
      alert ("Insira uma quantidade valida");
      carrinho.innerHTML = '';
    }
    //calcular preço
    let valorTotal= ValorUnitario*quantidade;
    //adicionar carrinho
    let carrinho= document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valorTotal}</span>
  </section>`;
    //atualizar valor total
  totalGeral = totalGeral + valorTotal;
  let campoTotal= document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value=0;

    }
function limpar(){
  totalGeral= 0
  document.getElementById('lista-produtos').innerHTML= '';
  document.getElementById("valor-total").textContent = 'R$ 0';

}
