import { Meta, StoryObj } from '@storybook/react';
import ButtonCustom from 'shared/ui/Button';

const meta: Meta<typeof ButtonCustom> = {
  title: 'UI/Button',
  component: ButtonCustom,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof ButtonCustom>;

export const DefaultStory: Story = {
  render: ({ ...args }) => (
    <ButtonCustom {...args}></ButtonCustom>
  ),
  args: {
    text: 'Button',
    color: 'primary',
    size: 'md',
    disabled: false,
    auto: false
  },
};

export const LinkStory: Story = {
  render: ({ ...args }) => (
    <ButtonCustom {...args}></ButtonCustom>
  ),
  args: {
    ...DefaultStory.args
  },
}