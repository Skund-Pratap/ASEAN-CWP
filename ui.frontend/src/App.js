import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Header from './main/webpack/components/Header/header';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <Header/>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
