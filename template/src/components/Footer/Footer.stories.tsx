import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {default as FooterComponent} from './Footer';

export default {
    title: 'components/Footer',
    component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = args => <FooterComponent {...args} />;

export const Footer = Template.bind({});
Footer.args = {};
