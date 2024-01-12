import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import Button from '../Button/Button';

const radioOptions = [
  { selected: false, htmlFor: 'radio1', label: 'Squid', isDisabled: false },
  { selected: false, htmlFor: 'radio2', label: 'Octopus', isDisabled: false },
  { selected: false, htmlFor: 'radio3', label: 'Sharks', isDisabled: false },
  { selected: false, htmlFor: 'radio4', label: 'Turtles', isDisabled: false },
  { selected: false, htmlFor: 'radio5', label: 'Jelly Fish', isDisabled: false },
  { selected: false, htmlFor: 'radio6', label: 'Star Fish', isDisabled: false },
  { selected: false, htmlFor: 'radio7', label: 'Whale', isDisabled: false },
];

const RadioGroup = () => {
  const [options, setOptions] = useState(radioOptions);

  const disabledSelected = () => {
    const newOptions = options.map((o, i) => {
      return { ...o, isDisabled: o.selected && !o.isDisabled };
    });
    setOptions(newOptions);
  };

  const handleSelection = (index: number) => {
    const newOptions = options.map((o, i) => {
      return { ...o, selected: index === i };
    });
    setOptions(newOptions);
  };

  const clear = () => {
    setOptions(radioOptions);
  };

  return (
    <div>
      <form>
        {options.map((o, index) => {
          return (
            <div style={{ margin: 8 }}>
              <Radio
                label={o.label}
                isSelected={o.selected}
                htmlFor={o.htmlFor}
                onClick={() => handleSelection(index)}
                isDisabled={o.isDisabled}
              />
            </div>
          );
        })}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Button buttonType={'outline'} onClick={clear} label={'Clear'} />
          <Button onClick={disabledSelected} label={'Disable'} />
        </div>
      </form>
    </div>
  );
};

const meta = {
  title: 'RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {},
};
