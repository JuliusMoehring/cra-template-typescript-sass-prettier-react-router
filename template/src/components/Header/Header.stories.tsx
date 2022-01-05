import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {default as HeaderComponent} from './Header';

export default {
    title: 'components/Header',
    component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = args => <HeaderComponent {...args} />;

export const Header = Template.bind({});
Header.args = {};
