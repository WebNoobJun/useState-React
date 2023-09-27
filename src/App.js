import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import Out from './components/Out';

function App() {

  const [name, setName] = useState('John Cuba');
  const [title, setTitle] = useState('hello how are u');
  const [city, setCity] = useState('from uk');
  const [image, setImage] = useState('https://i.imgur.com/SwXIjEP.gif');


  return (
    <div className="App">
      <Input name={'Name: '} value={name} onChange={e => setName(e.target.value)}/>
      <Input name={'Title: '} value={title} onChange={e => setTitle(e.target.value)}/>
      <Input name={'City: '} value={city} onChange={e => setCity(e.target.value)}/>
      <Input name={'Image url: '} value={image} onChange={e => setImage(e.target.value)}/>
      <Out url={image} name={name} title={title} city={city}/>
    </div>
  );
}

export default App;
