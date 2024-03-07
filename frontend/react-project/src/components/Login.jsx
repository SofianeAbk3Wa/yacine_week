import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  //? VARIABLES D'ETAT
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      //? ENVOYER LA REQUETE AVEC PARAMS DE : onChange={(e) => setEmail(e.target.value)} & password
      const response = await axios.post('http://localhost:8000/login', { email, password });

      //* SUCCESS : ON AJOUTE ETAT CONNECTÉ + ON SET LE FIRST NAME POUR RENVOYER DANS L'AFFICHAGE
      if (response.data.token) {
        setErrorMessage('');
        setIsLoggedIn(true);
        setUserFirstName(response.data.first_name);
      } else {
        //! ERREUR DE CONNEXION
        setErrorMessage('Identifiants incorrects');
      }
    } catch (error) {
      setErrorMessage('Erreur de connexion :', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        //* SI AUTHENTIFIÉ
        <div>
          <h1>Bienvenue {userFirstName}</h1>
          <button onClick={() => setIsLoggedIn(false)}>Déconnexion</button>
        </div>
      ) : (
        //! SI NON AUTHENTIFIÉ
        <div>
          <h1>Connexion</h1>

          <form>

            <div>
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="button" onClick={handleLogin}>Se connecter</button>

            {/* //! GESTION ERREURS */}
            {errorMessage !== '' && (
              <p>{errorMessage}</p>
            )}
          </form>

        </div>
      )}
    </div>
  );
}

export default Login;
