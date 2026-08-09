import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-page heading="Welcome to Facetimefy">
      <s-section heading="Getting started">
        <s-paragraph>
          Use this page as the landing experience for merchants opening your app.
        </s-paragraph>
        <s-button href="/settings">
          Open settings
        </s-button>
      </s-section>
    </s-page>
  );
}