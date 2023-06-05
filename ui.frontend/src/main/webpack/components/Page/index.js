
 import {
    MapTo,
    Page,
    withComponentMappingContext
  } from '@adobe/cq-react-editable-components';
  import { withRoute } from '../RouteHelper';
  
  require('./page.css');
  
  // This component is a variant of a Page component mapped to the "react-simple-example/components/page" resource type
  // For now, the rendering is the same as the RootPage; this is more for illustration purposes
  class AppPage extends Page {
    get containerProps() {
      const attrs = super.containerProps;
      attrs.className =
        (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
      return attrs;
    }
  }
  
  export default MapTo('wknd-muzik/components/page')(
    withComponentMappingContext(withRoute(AppPage))
  );
  
