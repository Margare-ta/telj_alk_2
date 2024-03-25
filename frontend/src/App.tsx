import { useEffect, useState } from 'react'
import { getfruit, addfruit } from './Api.ts';
import './App.css'

interface Fruit {
  id: number;
  nev: string;
  ar: number;
  megjegyzés: string;
}

const App: React.FC = () => {
  const [fruits, setfruit] = useState<Fruit[]>([]);
  const [newNev, setNewNev] = useState('');
  const [newAr, setNewAR] = useState('');
  const [newMeg, setNewMeg] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const data = await getfruit();
      setfruit(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addfruit(newNev, parseFloat(newAr), newMeg);
    const updatedfruits = await getfruit();
    setfruit(updatedfruits);
    setNewNev('');
    setNewAR('');
    setNewMeg('');
  };

  return(
    <div>
      <h1>Gyümölcsök hozzáadása</h1>
      <form onSubmit={handleSubmit}>
        <table >
          <tbody>
            <tr>
              <td>Név:</td>
              <td><input type="text" value={newNev} onChange={(e) => setNewNev(e.target.value)} /></td>
            </tr>

            <tr>
              <td>Ár:</td>
            <td><input type="number" value={newAr} onChange={(e) => setNewAR(e.target.value)} /></td>
            </tr>

            <tr>
              <td>Megjegyzés:</td>
            <td><input type="string" value={newMeg} onChange={(e) => setNewMeg(e.target.value)} /></td>
            </tr>

            <tr >
              <td colSpan={2}><button type="submit">Add a listához</button></td>
            
            </tr>
          </tbody>
        </table>
      </form>

      <h2>Gyümik eddig:</h2>
      <table>
        <thead>
          <tr className='tdd'>
            <th>ID</th>
            <th>Név</th>
            <th>Ár</th>
            <th>Megjegyzés</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map(fruit => (
            <tr  key={fruit.id}>
              <td className='tdd'>{fruit.id}</td>
              <td className='tdd'>{fruit.nev}</td>
              <td className='tdd'>{fruit.ar}</td>
              <td className='tdd'>{fruit.megjegyzés}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App
