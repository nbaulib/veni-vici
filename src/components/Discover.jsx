import React, { useState } from 'react';
import axios from 'axios';
const YOUR_API_KEY = 'live_GrWEInWkYzXDfi8pbQAclA4bt4exmNiKruC9vcCi2IfCCZZXVA5llEShkuoBiofb';

const Discover = () => {
  const [ImageUrl, setImageUrl] = useState('');
  const [dogInfo, setDogInfo] = useState({});

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/images/search?api_key=${YOUR_API_KEY}`);
      
      const breed = response.data[0].breeds.length > 0 ? response.data[0].breeds[0].name : '';
      if (!breed) {
        console.log('Skipping image with blank breed name');
        return handleClick();
      }

      const lifeSpan = response.data[0].breeds[0].life_span;
      const weight = response.data[0].breeds[0].weight.imperial;
      const imageUrl = response.data[0].url;
      setDogInfo({ breed, lifeSpan, weight });
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const banClick = () => {

  };

  return (
    <div>
      <h3>{dogInfo.name}</h3>

      <button type="attribute" className="attribute-buttons" onClick={banClick}>{dogInfo.breed}</button>
      <button type="attribute" className="attribute-buttons" onClick={banClick}>{dogInfo.lifeSpan}</button>
      <button type="attribute" className="attribute-buttons" onClick={banClick}>{dogInfo.weight} lbs</button>

      <br/><br/>

      {ImageUrl && <img src={ImageUrl} alt="Random Dog" height={300} />}

      <br/><br/>

      <button onClick={handleClick}>Discover!</button>
    </div>
  );
};

export default Discover;