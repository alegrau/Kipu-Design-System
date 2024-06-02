import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

const meta: Meta<TabsComponent> = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  args: {

  }
} as Meta;

export default meta;
type Story = StoryObj<TabsComponent>;

export const Tabs: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Contenido de la pestaña 1' },
      { label: 'Tab 2', content: 'Contenido de la pestaña 2' },
      { label: 'Tab 3', content: 'Contenido de la pestaña 3', disabled: true },
    ],

  }
}