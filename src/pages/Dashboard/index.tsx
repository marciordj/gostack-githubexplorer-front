import { Fragment, useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImage from '../../assets/githubexplorer_logo.svg';


import { Title, Form, Repositories } from './styles';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}


const Dashboard = () => {
  const [newRepository, setNewRepository] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const response = await api.get<IRepository>(`repos/${newRepository}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepository('');

    console.log(response.data);
  }


  return (
    <Fragment>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form onSubmit={handleAddRepository} >
        <input 
        placeholder="Digite o nome do repositório" 
        value={newRepository} 
        onChange={event => setNewRepository(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href='teste'>
            <img 
            src={repository.owner.avatar_url} 
            alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </Fragment>
  )
}


export default Dashboard;