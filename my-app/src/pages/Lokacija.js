import {useState,useEffect} from 'react';

const Lokacija = () => {
      const [lokacija, setLokacija] = useState(null);
;
    
      useEffect(
        () => {
          fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/posts/613?_embed`)
          .then(response => response.json())
          .then(
            data => {
              setLokacija(data);
              console.log(data);
            }
          ) 
      }, []
      
    )

 if(!lokacija)  return <p>Učitavanje...</p>
  return (
    <div className="container" dangerouslySetInnerHTML={{__html: lokacija.content.rendered  }}></div>

  );
};

export default Lokacija;
