import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Card } from '../components/Card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const Template: Story = (args) => <Card rank={args.rank} symbol={args.symbol} />;

export const Default = Template.bind({});
Default.args = {rank: "A", symbol: "diamond"};
