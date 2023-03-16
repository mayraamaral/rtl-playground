import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "./App";

test("cadastra novo usuario e mostra na lista", () => {
  render(<App />);

  const nomeInput = screen.getByTestId("nome");
  const emailInput = screen.getByTestId("email");
  const submitButton = screen.getByRole("button");

  act(() => {
    user.click(nomeInput);
    user.keyboard("vem ser");
    user.click(emailInput);
    user.keyboard("vemser@vemser.com");

    user.click(submitButton);
  });

  const nome = screen.getByRole("cell", { name: "vem ser" });
  const email = screen.getByRole("cell", { name: "vemser@vemser.com" });

  expect(nome).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
