import {useState,useEffect} from 'react';

const Voditelj = () => {
      const [voditelj, setVoditelj] = useState(null);
;
    
      useEffect(
        () => {
          fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/posts/607?_embed`)
          .then(response => response.json())
          .then(
            data => {
              setVoditelj(data);
              console.log(data);
            }
          ) 
      }, []
      
    )

 if(!voditelj)  return <p>Učitavanje...</p>
  return (
    <div className="container" dangerouslySetInnerHTML={{__html: voditelj.content.rendered  }}></div>
  
  );
};

export default Voditelj;
