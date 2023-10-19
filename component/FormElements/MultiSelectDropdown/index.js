import React, { useState } from 'react';
import Select from 'react-select';
import CustomOption from './CustomOption';

export default function MultiSelectDropdown({ options, groups }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Select
      options={groups}
      isMulti
      closeMenuOnSelect={false}
      components={{
        Option: CustomOption,
      }}
      onChange={(selectedGroups) => {
        const selectedOptions = selectedGroups.reduce((acc, group) => {
          if (group.options && Array.isArray(group.options)) {
            return acc.concat(
              group.options.map((option) => ({
                value: option.value,
                label: option.label,
                isChecked: group.isChecked,
              }))
            );
          }
          return acc;
        }, []);
        setSelectedOptions(selectedOptions);
      }}
      value={selectedOptions}
      className="basic-multi-select"
    classNamePrefix="select"
    />
  );
}
