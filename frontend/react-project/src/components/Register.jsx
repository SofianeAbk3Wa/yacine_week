import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/register', {
        first_name,
        last_name,
        email,
        password
      });

      if (response.data.message) {
        setErrorMessage(response.data.message);
      } else {
        setIsRegistered(true);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setErrorMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <div>
      {isRegistered ? (
         //* SI INSCRIT
        <div>
          <h1>Inscription réussie</h1>

          <p>Votre inscription a réussi. Vous pouvez maintenant vous connecter.</p>

          <h2>Rappel des champs de connexion</h2>

          <form>
            <div>
              <p>Email : {email}</p>
            </div>

            <div>
              <p>Mot de passe : {password}</p>
            </div>
          </form>
        </div>
      ) : (
        //! SI NON INSCRIT
        <div>
          <h1>Inscription</h1>

          <form>
            <div>
              <label htmlFor="first_name">Prénom :</label>
              <input type="text" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div>
              <label htmlFor="last_name">Nom de famille :</label>
              <input type="text" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="button" onClick={handleRegister}>S'inscrire</button>

             {/* //! GESTION ERREURS */}
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
