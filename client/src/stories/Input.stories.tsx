import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Input } from '../components/Input';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

const Template: Story = (args) => <Input placeholder={args.placeholder}/>;

export const Default = Template.bind({});
Default.args = {placeholder: "Username..."};