import { useState } from 'react';

function useCheckbox(initialState = []) {
  const [checkedItems, setCheckedItems] = useState(initialState);

  //thakes the value from a checked box and either adds or removes it for an array ( ie an array of catagories)
  const handleCheckboxChange = (value) => {
    setCheckedItems((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  //returns the array of checked items
  const isChecked = (value) => {
    return checkedItems.includes(value);
  };

  return {
    checkedItems,
    handleCheckboxChange,
    isChecked,
  };
}

export default useCheckbox;