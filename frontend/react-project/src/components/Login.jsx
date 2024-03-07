import React, { useState } from 'react';
import axios from 'axios';

function Navbar() {
  const [email, setEmail] = useState(''); //? État local pour l'e-mail
  const [password, setPassword] = useState(''); //? État local pour le mot de passe
  const [isLoggedIn, setIsLoggedIn] = useState(false); //? État local pour suivre l'état de connexion
  const [userFirstName, setUserFirstName] = useState(''); //? État local pour stocker le prénom de l'utilisateur connecté

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });

      if (response.data.token) {
        setIsLoggedIn(true); //? Définir l'état de connexion sur true
        setUserFirstName(response.data.first_name); //? Stocker le prénom de l'utilisateur connecté
      } else {
        console.error('La connexion a échoué :', response.data.message); //? Afficher un message d'erreur si la connexion échoue
      }
    } catch (error) {
      console.error('Erreur de connexion :', error); //? Afficher une erreur en cas d'échec de la requête
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
