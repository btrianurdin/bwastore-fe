/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, Meta } from '@storybook/react';
import Input from '../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
};
