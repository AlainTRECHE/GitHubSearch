// == Import
import { useState } from 'react';
import axios from 'axios';

import logo from 'src/assets/images/logo-github.png';
import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';

import './styles.scss';

// == Composant
function App() {
  // le state pour mon champ controllé de recherche
  const [searchInput, setSearchInput] = useState('');
  // le state qui contiendra nos résultats de recherche
  const [results, setResults] = useState([]);
  // le state qui nous dira si les datas sont en cours de chargements
  const [isLoading, setIsLoading] = useState(false);
  // le nombre de résultats trouvés par l'api (si null => on n'a pas encore fait de requête)
  const [totalCount, setTotalCount] = useState(null);

  // lorsque on tape dans le champ controlé
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  // soumission du formulaire
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // si le champ controlé est vide, pas de requete  !
    if (searchInput === '') {
      return;
    }

    // début de la requete
    setIsLoading(true);
    // lancement de la requete api
    axios.get(`https://api.github.com/search/repositories?q=${searchInput}`).then((response) => {
    // verification du resultat de la requete
      console.log('le serveur a répondu : ', response);
      // stockage des data reçu dans le state
      setResults(response.data.items);
      // nombre de resultats
      setTotalCount(response.data.total_count);
      // fin de la requete
      setIsLoading(false);
    });
  };
  return (
    <div className="app">
      <img
        className="app-logo"
        src={logo}
        alt="logo GitHub"
      />
      <div className="app-search">
        <SearchBar
          isLoading={isLoading}
          searchValue={searchInput}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>
      <Message
        text={totalCount !== null
          ? `La recherche a donné ${totalCount} résultat(s)`
          : 'Utilisez le champ pour faire une recherche et validez avec entrée'}
      />
      <ReposResults results={results} />
    </div>
  );
}

// == Export
export default App;
