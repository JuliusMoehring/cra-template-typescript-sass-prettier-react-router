import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export const parameters = {};

export const decorators = [
    Story => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    ),
];
