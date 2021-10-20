import React from 'react';
import type {
  FC,
} from 'react';
import {
  Input,
} from '@example/ui-core';
import type {
  CheckboxProps as ThisShouldNotBeInlined,
} from '@example/ui-core';

export type CheckboxProperties = ThisShouldNotBeInlined;

const Checkbox: FC<CheckboxProperties> = Input.Checkbox;

export default Checkbox;
