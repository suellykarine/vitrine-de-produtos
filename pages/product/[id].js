import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Imagem, Info, Button, Naviagation } from "./style";
import { buscarProdutoPorId } from "../../service/apiPorProduto";

export default function Produto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (id) {
      buscarProdutoPorId(id)
        .then(setProduto)
        .catch((err) => console.error("Erro ao buscar produto:", err));
    }
  }, [id]);

  if (!produto) return <p> Carregando... </p>;

  return (
    <>
      <Naviagation>
        <Link href="/" passHref>
          <Button> Voltar </Button>{" "}
        </Link>{" "}
      </Naviagation>{" "}
      <Container>
        <Imagem src={produto.image} alt={produto.title} loading="lazy" />
        <Info>
          <h1> {produto.title} </h1> <p> {produto.description} </p>{" "}
          <strong> R$ {produto.price} </strong>{" "}
        </Info>{" "}
      </Container>{" "}
    </>
  );
}
