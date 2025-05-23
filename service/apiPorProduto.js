export async function buscarProdutoPorId(id) {
  const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!resposta.ok) {
    throw new Error("Erro ao buscar produto");
  }
  const produto = await resposta.json();
  return produto;
}
