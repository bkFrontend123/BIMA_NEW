import React from 'react';

const CustomOption = ({ data, selectOption }) => (
  <div>
    <input
      type="checkbox"
      onChange={() => {
        if (data.options) {
          data.options.forEach((option) => {
            selectOption(option);
          });
        } else {
          selectOption(data);
        }
      }}
      checked={data.isChecked}
    />
    {data.label}
  </div>
);

export default CustomOption;
