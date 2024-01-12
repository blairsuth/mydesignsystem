import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    tabContent: [
      {
        label: 'Tab 1',
        content: (
          <p>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed
            consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada
            magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Donec
            ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed
            consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia
            bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam
            porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
            fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum
            nulla sed consectetur.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean
            lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est
            at lobortis. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non
            metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean
            lacinia bibendum nulla sed consectetur.Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est
            at lobortis. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non
            metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean
            lacinia bibendum nulla sed consectetur.Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est
            at lobortis. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non
            metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean
            lacinia bibendum nulla sed consectetur.
          </p>
        ),
      },
      { label: 'Tab 2', content: <p>Goodbye World!</p> },
      { label: 'Tab 3', content: <p>Hello Mars</p> },
      { label: 'Tab 4', content: <p>Goodbye World!</p> },
      { label: 'Tab 5', content: <p>Hello World!</p> },
      { label: 'Tab 6', content: <p>Hello World!!</p> },
    ],
  },
};
