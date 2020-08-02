import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32181918?s=460&u=33515903926c96c56e2ffbbb9104bb9edcbe2fcb&v=4"
            alt="Lucas Vieira"
          />
          <div>
            <strong>lucasvtiradentes</strong>
            <p>A marine documents organizer</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32181918?s=460&u=33515903926c96c56e2ffbbb9104bb9edcbe2fcb&v=4"
            alt="Lucas Vieira"
          />
          <div>
            <strong>lucasvtiradentes</strong>
            <p>A marine documents organizer</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32181918?s=460&u=33515903926c96c56e2ffbbb9104bb9edcbe2fcb&v=4"
            alt="Lucas Vieira"
          />
          <div>
            <strong>lucasvtiradentes</strong>
            <p>A marine documents organizer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
