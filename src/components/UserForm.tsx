import { useState } from "react";
import { User } from "../utils/interfaces";

interface IOnAddUser {
  onAddUser?: (user: User) => void;
}

export const UserForm = ({ onAddUser }: IOnAddUser) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (onAddUser) onAddUser({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="nome"
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        data-testid="email"
        type="email"
        placeholder="email@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Cadastrar" />
    </form>
  );
};
