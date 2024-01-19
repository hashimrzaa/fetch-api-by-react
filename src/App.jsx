import { useState, useEffect } from 'react';
const Fetch = () => {
  const [photo, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      {photo.map((photo) => {
        return (
          <img key={photo.id} src={photo.url} alt={photo.title} width={100} />

        )
      })
      }
    </div>
  );
};
export default Fetch;