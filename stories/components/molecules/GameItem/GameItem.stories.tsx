/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, Meta } from '@storybook/react';
import GameItem from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Template: ComponentStory<typeof GameItem> = (args) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Mobile Legends',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
