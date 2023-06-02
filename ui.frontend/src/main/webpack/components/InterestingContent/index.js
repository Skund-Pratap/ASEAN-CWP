//Imports
import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';
import { Link } from "react-router-dom";

require('./InterestingContent.css');

//Define EditConfig object
/**
* Default Edit configuration for the InterestingContent component
*
* @type EditConfig
*/
const InterestingContentEditConfig = {
    emptyLabel: 'Interesting Content',

    isEmpty: function(props) {
        return !props || !props.interestingPages;
    }
};

//Define the React.js component
/**
* InterestingContent React component
*/
class InterestingContent extends Component {
    render() {
        return (
            <ul className="large">
                {this.props.interestingPages &&
                 this.props.interestingPages.map((page, index) => {
                    return (
                        <li key={index}>
                            <Link to={page.path} title={page.title}>{page.title}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

//Map the react component to the AEM component using its sling:resourceType
export default MapTo('wknd-muzik/components/interesting-content')(
    InterestingContent,
    InterestingContentEditConfig
);
