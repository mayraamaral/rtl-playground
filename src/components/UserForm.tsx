import { useState } from "react";
import { User } from "../utils/interfaces";

interface IOnAddUser {
  onAddUser: (user: User) => void;
}

export const UserForm = ({ onAddUser }: IOnAddUser) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onAddUser({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="email@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Cadastrar" />
    </form>
  );
};
