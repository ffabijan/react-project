import Korisnik from './data/korisnik.json';

    //Funkcija za prikaz profila korisnika
const Profil = () => {



// Ova komponenta trenutno samo prikazuje naslov "Profil korisnika"
  return (
   <div className="container">
    <h1>Profil korisnika</h1>
    <p> Ime: {Korisnik.ime}</p>
    <p> Prezime: {Korisnik.prezime}</p>
    <p> Godine: {Korisnik.godine}</p>
    <p> Grad: {Korisnik.grad}</p>

    <div> 
        Vještine:
        <ul>
        
            {
                //Prolazak kroz niz vještina i prikaz svake vještine kao stavke u listi
            Korisnik.vjestine.map(
                (vjestina, index) => (
                <li>{index+1}. {vjestina}</li>
            ))}
        </ul>


    </div>

    <p>Ulica: {Korisnik.adresa.ulica} </p>
    <p>Grad: {Korisnik.adresa.grad} </p>
    <p>Postanski broj: {Korisnik.adresa.postanskiBroj} </p>
   </div>

  )

};



export default Profil
