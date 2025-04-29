import Button from "./Button";

export default {
  title: "Componentes/Button",
  component: Button,
};

export const Primario = () => <Button variant="primary">Entrar</Button>;

export const Secundario = () => <Button variant="secondary">Cancelar</Button>;

export const Perigo = () => <Button variant="danger">Excluir</Button>;
