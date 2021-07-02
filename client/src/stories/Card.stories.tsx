import React from 'react'
import { Meta } from '@storybook/react';
import { Card } from '../components/Card';

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

export const Default: React.VFC<{}> = () => <Card />;
