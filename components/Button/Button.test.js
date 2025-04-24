import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renderiza botão com texto", () => {
  render(<Button>Entrar</Button>);
  expect(screen.getByText("Entrar")).toBeInTheDocument();
});
