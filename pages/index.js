import Link from "next/link";
import { useEffect, useState } from "react";

import { Button, Card, Grid, Main, Price, ProductImage, Title } from "./style";
import { buscarProdutos } from "../service/api";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos().then(setProdutos);
  }, []);

  return (
    <Main>
      <h1> Produtos </h1>{" "}
      <Grid>
        {" "}
        {produtos.map((produto) => (
          <Card key={produto.id}>
            <ProductImage
              src={produto.image}
              alt={produto.title}
              loading="lazy"
            />
            <Title> {produto.title} </Title> <Price> $ {produto.price} </Price>{" "}
            <Link href={`/product/${produto.id}`} passHref>
              <Button> Ver detalhes </Button>{" "}
            </Link>{" "}
          </Card>
        ))}{" "}
      </Grid>{" "}
    </Main>
  );
}
