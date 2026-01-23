import tecaji from './data/tecaj.json';


const Tecaj = () => {
  return (  
    
    <div className="container mb-5 mt-5">
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Država</th>
      <th scope="col">Kupovni tečaj</th>
      <th scope="col">Srednji tečaj</th>
      <th scope="col">Prodajni tečaj</th>
      <th scope="col">Datum</th>
    </tr>
  </thead>
 
{tecaji.map((tecaj) => (
  <tbody>
    <tr>
      <td>{tecaj.drzava}</td>
      <td>{tecaj.kupovni_tecaj}</td>
      <td>{tecaj.srednji_tecaj}</td>
      <td>{tecaj.prodajni_tecaj}</td>
      <td>{tecaj.datum_primjene}</td>
    </tr>
 </tbody>
 )) }
 </table>
 </div>


)}

export default Tecaj

