import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [formValues, setFormValues] = useState({ name: '', book: '' });
  const [submittedValues, setSubmittedValues] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setSubmittedValues(null);
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const validateFirstInput = (value) => value.trimEnd().length >= 3;

  const validateSecondInput = (value) => value.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, book } = formValues;

    if (validateFirstInput(name) && validateSecondInput(book)) {
      setSubmittedValues({ name, book });
      setFormValues({ name: '', book: '' });
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  return (
    <div className='app'>
      <h1>Agrega un libro</h1>
      <form
        onSubmit={handleSubmit}
        className='form'
      >
        <input
          type='text'
          value={formValues.name}
          id='name'
          placeholder='Ingresa tu nombre'
          onChange={handleInput}
        />
        <input
          type='text'
          id='book'
          value={formValues.book}
          placeholder='Ingrega el nombre de tu libro'
          onChange={handleInput}
        />
        <button type='submit'>Enviar</button>
      </form>
      {showError && (
        <p className='error'>
          Por favor chequea que la información sea correcta
        </p>
      )}
      {submittedValues && (
        <Card
          name={submittedValues.name}
          book={submittedValues.book}
        />
      )}
    </div>
  );
}

export default App;
