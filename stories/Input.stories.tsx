import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { Input } from '../src';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="Bruno César Angst"
        placeholder="Bruno César Angst"
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="Bruno César Angst"
        icon={<MdSearch />}
        placeholder="Bruno César Angst"
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });
