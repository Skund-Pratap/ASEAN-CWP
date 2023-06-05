
import { EditableComponent, MapTo } from "@adobe/aem-react-editable-components";
import DOMPurify from "dompurify";
import React from "react";
import extractModelId from "../../../../utils/extract-model-id";

// require("./Text.scss");

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {
  emptyLabel: "Text",

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

const Text = (props) => {
  const richTextContent = () => {
    return (
      <div
        id={extractModelId(props.cqPath)}
        data-rte-editelement
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.text),
        }}
      />
    );
  };

  const textContent = () => {
    return <div>{props.text}</div>;
  };

  return props.richText ? richTextContent() : textContent();
};

const EditableText = (props) => {
  return (
    <EditableComponent config={TextEditConfig} {...props}>
      <Text {...props} />
    </EditableComponent>
  );
};

export default MapTo("wknd-spa-react/components/text")(EditableText);