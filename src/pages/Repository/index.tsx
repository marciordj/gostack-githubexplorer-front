import { useRouteMatch } from 'react-router-dom';

interface IRepositoryParams {
  repository: string;
}

const Repository = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  return (
    <h1>Repo: {params.repository}</h1>
  )
};


export default Repository;