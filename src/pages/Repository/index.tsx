import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi'

import logoImage from '../../assets/githubexplorer_logo.svg';

import { Header, RepositoryInfo } from './styles';
import { Fragment } from 'react';

interface IRepositoryParams {
  repository: string;
}

const Repository = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  return (
    <Fragment>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header></header>
      </RepositoryInfo>
    </Fragment>
  )
};


export default Repository;