import React, { useState } from 'react';
import axios from 'axios';

function Navbar() {

  //? VARIABLES D'ETAT
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');

  //? FONCTION DE CONNEXION
  const handleLogin = async () => {
    try {
      //? ENVOYER LA REQUETE AVEC PARAMS DE : onChange={(e) => setEmail(e.target.value)} & password
      const response = await axios.post('http://localhost:8000/login', { email, password });

      if (response.data.token) {
        //? ETAT CONNCTÉ
        setIsLoggedIn(true);
        setUserFirstName(response.data.first_name); //? Stocker le prénom de l'utilisateur connecté pour la renvoyer dans l'affichage
      } else {
        console.error('La connexion a échoué :', response.data.message);
      }
    } catch (error) {
      console.error('Erreur de connexion :', error);
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
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
