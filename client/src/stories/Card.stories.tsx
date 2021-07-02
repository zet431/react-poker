import React from 'react'
import { Meta } from '@storybook/react';
import { Card } from '../components/Card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { rank: "A", symbol: "diamond" };
