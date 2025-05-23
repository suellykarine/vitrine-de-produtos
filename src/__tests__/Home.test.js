import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home", () => {
  it("renderiza título Produtos", () => {
    render(<Home />);
    expect(screen.getByText("Produtos")).toBeInTheDocument();
  });
});
