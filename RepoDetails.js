import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(`https://api.github.com/repos/Israelestherfavour/${repoName}`);
      setRepo(response.data);
    };
    fetchRepo();
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>
        <strong>Stars:</strong> {repo.stargazers_count}
      </p>
      <p>
        <strong>Forks:</strong> {repo.forks_count}
      </p>
      <p>
        <strong>Language:</strong> {repo.language}
      </p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default RepoDetails;
