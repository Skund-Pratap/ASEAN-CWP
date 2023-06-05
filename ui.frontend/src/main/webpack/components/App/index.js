import { Page, withModel } from '@adobe/cq-react-editable-components';
 import React from 'react';
 import Text from '../Text/index';
 import Header from '../Header/Header';
 import ModelData from './modelData.json'
 require('./App.css');
 

const App = (ModelData) => (

    <Page {...ModelData}/>
)

export default App;

 // This component is the application entry point
//  class App extends Page {

//   constructor(props) {
//     super(props);
//   }
//    render() {
//      return (
//        <div>
//         {/* <Text {} /> */}
//         <Header/>
//          {this.childComponents}
//          {this.childPages}
//        </div>
//      );
//    }
//  }
 
//  export default withModel(App);
 


// import { Page } from '@adobe/aem-react-editable-components';
// import React from 'react';
// import Header from '../Header/Header';

// /**
//  * This component is the application entry point.
//  * 
//  * Optionally the index.js's use of <App ../> can be replaced with <Page ../>
//  * 
//  * We'll keep this broken out in case we need to do more complex App-level configurations
//  * like setting context, etc.
//  */
// const App = (props) => (

//     <Page {...props}/>
// )

// export default App;