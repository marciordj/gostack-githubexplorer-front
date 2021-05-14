import { Fragment, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

import logoImage from "../../assets/githubexplorer_logo.svg";

import { Header, Issues, RepositoryInfo } from "./styles";


interface IRepositoryParams {
  repository: string;
}

const Repository = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      console.log(response.data.full_name)
    })
  }, [params])

  return (
    <Fragment>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/69631?v=4"
            alt="Avatar img"
					/>

					<div>
						<strong>{params.repository}</strong>
						<p>ablue</p>
					</div>

        </header>

				<ul>
					<li>
						<strong>180321</strong>
						<span>Stars</span>
					</li>

          <li>
						<strong>48</strong>
						<span>Forks</span>
					</li>

          <li>
						<strong>67</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
      </RepositoryInfo>

      <Issues>
        <Link to='dsadsa' >

        <div>
          <strong>dsaeqw</strong>
          <p>dsaewqf</p>
        </div>

        <FiChevronRight size={20} />
        </Link>
      </Issues>
    </Fragment>
  );
};

export default Repository;

