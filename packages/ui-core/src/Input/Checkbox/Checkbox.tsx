import React, {
  ChangeEvent,
  FC,
  useCallback,
} from 'react';

export type CheckboxProps = {
  label: string;
  onChange: (value: boolean) => void;
  value?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  label,
  onChange,
  value,
}) => {
  const handleChange = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
      onChange(checked);
    },
    [onChange],
  );

  return (
    <label>
      <input
        checked={Boolean(value)}
        onChange={handleChange}
        type="checkbox"
      />
      {label}
    </label>
  );
};

export default Checkbox;
