import { useEffect, useRef, useState } from "react";

export default function SelectBoxComp({
  optionList = [],
  value,
  onChange,
  className,
  dropDownIcon,
  width,
  triggerOnMount = false,
}) {
  const firstValue = optionList?.length > 0 ? optionList[0]?.Id : 0;
  const firstRender = useRef(true);
  const [selectedValue, setSelectedValue] = useState(
    value || firstValue
  );

  useEffect(() => {
    if (firstRender.current && selectedValue) {
      firstRender.current = false;

      if (triggerOnMount) onChange(selectedValue);
    }
  }, [selectedValue, onChange, triggerOnMount]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className={`relative ${width} mt-2`}>
      <select
        className={`${className}`}
        value={selectedValue}
        onChange={handleChange}
      >
        {optionList?.map((m, ix) => (
          <option key={ix} value={m.Id}>
            {m.Text}
          </option>
        ))}
      </select>
      {dropDownIcon}
    </div>
  )
}
