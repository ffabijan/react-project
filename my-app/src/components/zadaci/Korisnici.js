// import korisnici from './components/zadaci/data/korisnici.json';
import {useState} from 'react';

const Korisnici = () => {

    const [korisnici, setKorisnici] = useState([]);

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(
        data => {
          setKorisnici(data);
          console.log(data);
        }
    )

    return (
        <div className='container'>
          <h1>Popis korisnika</h1>
            <table className='table mt-3 mb-5'>

  <thead>
    <tr>
      <th scope="col">Država</th>
      <th scope="col">Kupovni tečaj</th>
      <th scope="col">Srednji tečaj</th>
      <th scope="col">Prodajni tečaj</th>
      <th scope="col">Datum</th>
    </tr>
  </thead>
 
{korisnici.map((tecaj) => (
  <tbody>
    <tr>
      <td>{tecaj.drzava}</td>
      <td>{tecaj.kupovni_tecaj}</td>
      <td>{tecaj.srednji_tecaj}</td>
      <td>{tecaj.prodajni_tecaj}</td>
      <td>{tecaj.datum_primjene}</td>
    </tr>
 </tbody>

 </table>
            
       </div>
      )
}   

export default Korisnici;