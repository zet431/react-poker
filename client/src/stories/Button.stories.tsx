import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story = (args) => <Button variant={args.variant} text={args.text} />;

export const Success = Template.bind({});
Success.args = {variant: "success", text: "Create Account"}

export const Danger = Template.bind({});
Danger.args = {variant: "danger", text: "Leave Game"};