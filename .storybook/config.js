import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'

function loadStories() {
  require('../stories/index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);

setOptions({
  name: 'OC React Date Range Storybook',
  addonPanelInRight: true,
});