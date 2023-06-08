import React, { useState, useEffect } from 'react';
import TextComponent from './aemComponent1';
import CarouselComponent from './carouselComponent';
import data from './data';

export default function MyReactComponent() {
  const API_URL = 'http://localhost:4502/content/wknd-muzik/language-masters/en/home-page.model.json';
  const username = 'admin';
  const password = 'giN+_#WPh4eCm84';
  const [aemData, setAemData] = useState(null);
  const [loading, setLoading] = useState(false);

  const aemData1 = data;
  let objectsWithText = [];

  if (aemData1[':items']?.root[':items']?.container[':items']) {
    const items = aemData1[':items'].root[':items'];

    objectsWithText = Object.keys(items)
      .filter(key => key.includes('text'))
      .map(key => items[key]);
  }

  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

  useEffect(() => {
    const fetchAEMData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: headers,
          // credentials: 'include'
        });
        const jsonData = await response.json();
        setAemData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAEMData();
  }, []);

  return (
    <div>
      <CarouselComponent />
      {objectsWithText.length > 0 ? (
        objectsWithText.map(obj => <TextComponent key={obj.id} data={obj} />)
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}