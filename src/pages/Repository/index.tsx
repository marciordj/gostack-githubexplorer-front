import { Fragment, useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

import {
  IIssues,
  IRepositoryData,
  IRepositoryParams,
} from "../../interfaces/index";

import logoImage from "../../assets/githubexplorer_logo.svg";

import { Header, Issues, RepositoryInfo } from "./styles";

const Repository = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

  const [repository, setRepository] = useState<IRepositoryData | null>(null);
  const [issues, setIssues] = useState<IIssues[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });

    // async function loadRepositoryData(): Promise<void> {         //! Quando quiser fazer 2 chamadas ao mesmo tempo, usa Promisse.all
    //   const [repository, issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`)
    //   ])
    //   console.log(repository)
    //   console.log(issues)
    // }

    // loadRepositoryData()
  }, [params.repository]);

  return (
    <Fragment>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository?.owner.avatar_url} //! O nome desse ? é optional chainning, lembra sempre disso porque tu sempre esquece
              alt={repository?.owner.login} //! Aqui nao precisaria por causa da condicional de render, mas deixei pra lembrar depois
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user?.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </Fragment>
  );
};

export default Repository;
