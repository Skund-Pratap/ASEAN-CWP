//Imports
import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';

//Define EditConfig object
/**
* Default Edit configuration for the BasicComponent component
*
* @type EditConfig
*/
const BasicComponentEditConfig = {
    emptyLabel: 'Basic Component',

    isEmpty: function(props) {
        return !props || !props.text;
    }
};

//Define the React.js component
/**
* BasicComponent React component
*/
class BasicComponent extends Component {
    render() {
        return (
            <div>
                My Text Property Value: {this.props.text},
                and checkbox: {this.props.checkbox ? 'checked' : 'unchecked'}
            </div>
        );
    }
}

//Map the react component to the AEM component using its sling:resourceType
export default MapTo('wknd-muzik/components/basic-component')(
    BasicComponent,
    BasicComponentEditConfig
);

