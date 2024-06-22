import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(`https://api.github.com/users/Israelestherfavour/repos`);
      setRepos(response.data);
    };
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'forks' && repo.fork) || (filter === 'sources' && !repo.fork);
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search Repositories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="forks">Forks</option>
          <option value="sources">Sources</option>
        </select>
      </div>
      <ul>
        {filteredRepos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
