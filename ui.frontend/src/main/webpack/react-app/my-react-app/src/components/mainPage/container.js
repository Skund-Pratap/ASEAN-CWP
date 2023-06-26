import React from 'react';
import './container.css';

const Container = ({ itemsOrder, items }) => {
  const renderComponent = (component) => {
    switch (component[':type']) {
      case 'wknd-muzik/components/teaser':
        return (
          <div key={component.id} className="teaser">
            <h3 dangerouslySetInnerHTML={{ __html: component.title }} />
            <p dangerouslySetInnerHTML={{ __html: component.description }} />
            {/* Add additional teaser component elements */}
          </div>
        );
      case 'wknd-muzik/components/title':
        return (
          <div key={component.id} className="title">
            <h2 dangerouslySetInnerHTML={{ __html: component.text }} />
            {/* Add additional title component elements */}
          </div>
        );
      case 'wknd-muzik/components/list':
        return (
          <div key={component.id} className="list">
            <ul>
              {component.items.map((item) => (
                <li key={item.id}>
                  <a href={item.path} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  {/* Add additional list component elements */}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {itemsOrder.map((itemKey) => {
        const component = items[itemKey];
        if (component) {
          return renderComponent(component);
        }
        return null;
      })}
    </div>
  );
};

export default Container;