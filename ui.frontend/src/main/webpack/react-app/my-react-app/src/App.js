import './App.css';
import Carousel from '../src/components/carousel/carousel';

const App = () => {
  const images = [
    'https://www.freeimages.com/photo/newport-bridge-sunset-1634627',
    '<https://example.com/image2.jpg>',
    '<https://example.com/image3.jpg>',
  ];

  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
