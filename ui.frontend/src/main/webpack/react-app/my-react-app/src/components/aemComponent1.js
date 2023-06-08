import React from 'react';

export default function TextComponent(props) {
 console.log('AEM props', props.data);

 const createMarkup = () => {
   return { __html: props.data.text };
 };

 return React.createElement(
   'div',
   null,
   props.data.richText ? React.createElement('div', {
     dangerouslySetInnerHTML: createMarkup()
   }) : React.createElement('div', null, 'No data from AEM')
 );
}