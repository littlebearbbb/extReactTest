import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { launch } from '@sencha/ext-react'
import App from '@containers/App'
require('./i18n.js');
import '@styles/common'

let viewport;

import {ExtReact} from '@sencha/ext-react';
const render = (Component, target) => {
  ReactDOM.render(
    <ExtReact>
      <AppContainer>
        <Component/>
      </AppContainer>
    </ExtReact>,
    target
  )
}

launch(target => render(App, viewport = target));

if (module.hot) {
  module.hot.accept('@containers/App', () => render(App, viewport));
}

//go({element:App, callback: render});