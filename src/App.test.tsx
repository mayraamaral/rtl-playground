import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "./App";

test("cadastra novo usuario e mostra na lista", async () => {
  render(<App />);

  const nomeInput = screen.getByTestId("nome");
  const emailInput = screen.getByTestId("email");
  const submitButton = screen.getByRole("button");

  await user.click(nomeInput);
  await user.keyboard("vem ser");
  await user.click(emailInput);
  await user.keyboard("vemser@vemser.com");

  await user.click(submitButton);

  const nome = screen.getByRole("cell", { name: "vem ser" });
  expect(nome).toBeInTheDocument();

  const email = screen.getByRole("cell", { name: "vemser@vemser.com" });

  expect(email).toBeInTheDocument();
});
