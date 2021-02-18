import { Fragment } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/githubexplorer_logo.svg';


import { Title, Form, Repositories } from './styles';


const Dashboard = () => {
  return (
    <Fragment>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form action="" >
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img 
          src="https://avatars.githubusercontent.com/u/54960643?s=460&u=7e71446520cc286dc189118454c3c59ca52a718b&v=4" 
          alt="Usuário"
          />
          <div>
            <strong>Rocketset/Unform</strong>
            <p>Teste do mussum</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img 
          src="https://avatars.githubusercontent.com/u/54960643?s=460&u=7e71446520cc286dc189118454c3c59ca52a718b&v=4" 
          alt="Usuário"
          />
          <div>
            <strong>Rocketset/Unform</strong>
            <p>Teste do mussum</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img 
          src="https://avatars.githubusercontent.com/u/54960643?s=460&u=7e71446520cc286dc189118454c3c59ca52a718b&v=4" 
          alt="Usuário"
          />
          <div>
            <strong>Rocketset/Unform</strong>
            <p>Teste do mussum</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href='teste'>
          <img 
          src="https://avatars.githubusercontent.com/u/54960643?s=460&u=7e71446520cc286dc189118454c3c59ca52a718b&v=4" 
          alt="Usuário"
          />
          <div>
            <strong>Rocketset/Unform</strong>
            <p>Teste do mussum</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </Fragment>
  )
}


export default Dashboard;