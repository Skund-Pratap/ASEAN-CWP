import { Page, withModel } from '@adobe/cq-react-editable-components';
 import React from 'react';
 import Text from '../Text/index';
 import Header from '../Header/Header'
 
 require('./App.css');
 
 // This component is the application entry point
 class App extends Page {
   render() {
     return (
       <div>
        <Text/>
        <Header/>
         {this.childComponents}
         {this.childPages}
       </div>
     );
   }
 }
 
 export default withModel(App);
 