import {useState,useEffect} from 'react';

const Media = () => {
      const [media, setMedia] = useState(null);
;

const BASE_URL = process.env.REACT_APP_BASE_URL;  
    
      useEffect(
        () => {
          fetch(`${BASE_URL}/wp-json/wp/v2/posts/613?_embed`)
          .then(response => response.json())
          .then(
            data => {
              setMedia(data);
              console.log(data);
            }
          ) 
      }, []
      
    )

 if(!media)  return <p>Učitavanje...</p>
  return (
    <div className="container" dangerouslySetInnerHTML={{__html: media.content.rendered  }}></div>
  
  );
};

export default Media;

