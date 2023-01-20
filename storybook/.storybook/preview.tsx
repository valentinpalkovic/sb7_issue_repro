import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from "react-redux"


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const store = configureStore({reducer: {}});

// @ts-ignore
export const decorators = [
  (Story: React.FC) => [
    <Provider store={store}> 
        <Story />
    </Provider>
  ]
];
