import React, { useState, useEffect } from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";

const FilterCheckboxDropdown = ({ data }) => {
  const prepareData = (data) => {
    var cloned = data.slice(0);
    cloned.splice(0, 0, {
      label: "Select All",
      value: "selectAll",
      className: "select-all",
    });

    const dataWithExpanded = cloned.map(node => ({ ...node, expanded: true }));

    return dataWithExpanded;
  };

  const [treeData, setTreeData] = useState(prepareData(data));

  useEffect(() => {
    setTreeData(prepareData(data));
  }, [data]);

  const toggleAll = (checked) => {
    const updatedData = treeData.map((node, index) =>
      index === 0 ? node : { ...node, checked }
    );
    setTreeData(updatedData);
  };

  const handleChange = ({ value, checked }) => {
    if (value === "selectAll") toggleAll(checked);
  };

  return (
    <div className="selectDropdown">
      <DropdownTreeSelect
        data={treeData}
        onChange={handleChange}
        showDropdown
        inlineSearchInput
        texts={{ placeholder: 'Category/Product' }}
      />
    </div>
  );
};

export default FilterCheckboxDropdown;