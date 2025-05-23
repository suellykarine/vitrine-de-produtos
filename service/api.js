export async function buscarProdutos() {
  try {
    const result = await fetch("https://fakestoreapi.com/products");
    if (!result.ok) throw new Error("Erro na requisição");
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    return [];
  }
}
