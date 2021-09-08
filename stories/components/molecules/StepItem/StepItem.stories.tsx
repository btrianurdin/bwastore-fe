/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, Meta } from '@storybook/react';
import StepItem from '../../../../components/molecules/StepItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

const Template: ComponentStory<typeof StepItem> = (args) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  children: 'Pilih salah satu game<br />yang ingin kamu top up',
};
