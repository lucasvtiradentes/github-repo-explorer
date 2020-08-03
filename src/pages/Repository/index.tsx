import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './style';
import logoImg from '../../assets/logo.svg';

/* <h1>Repository:{params.repository}</h1> */

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/32181918?s=460&u=33515903926c96c56e2ffbbb9104bb9edcbe2fcb&v=4"
            alt=""
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdasd">
          <div>
            <strong>asd</strong>
            <p>description</p>
          </div>
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
