import React, { useState, useEffect } from 'react';
import TextComponent from './aemComponent1';
import CarouselComponent from './carouselComponent';
import HeaderComponent from './headerComponent';
import MainPage from './mainPage/mainPage'; 
import Footer from './Footer/footer';
import data from './data';

export default function MyReactComponent() {
  const API_URL = 'http://localhost:4502/content/wknd-muzik/language-masters/en/home-page.model.json';
  const username = 'admin'; /* use the username for local AEM instance */ 
  const password = 'giN+_#WPh4eCm84'; /* use the password for local AEM instance */ 
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

  function carouselFunction(data) {
   return (<CarouselComponent data={data}/>)  
  }
  useEffect(() => {
    const containers = [];
    const fetchAEMData = async () => { 
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: headers,
          // credentials: 'include'
        });
        const jsonData = await response.json();

        const filteredData = Object.entries(jsonData[':items'].root[':items']).reduce((acc, [key, value]) => {
          if (key.includes("container")) {
            containers.push(key);
            acc[key] = value;
          }
          return acc;
        }, {});
        

        

        containers.forEach(container => {
          if (filteredData.hasOwnProperty(container)) {
               console.log(`Data under ${container}:`, filteredData[container]);
               if (filteredData[container][":itemsOrder"].includes("carousel")) {
                const carouselData = filteredData[container][":items"]["carousel"];
                carouselFunction(carouselData);
              }
          
          }
      });


;
      
      } catch (error) {
        console.error(error);
      }
    };

    fetchAEMData();
  }, []);

  return (
    <div>
      <HeaderComponent/>
      <CarouselComponent />
      <MainPage/>
      <Footer/>
      {/* {console.log('AEM DATA is \n', )} */}
      {/* {objectsWithText.length > 0 ? (
        objectsWithText.map(obj => <TextComponent key={obj.id} data={obj} />)
      ) : (
        <div>No data available.</div>
      )} */}
    </div>
  );
}