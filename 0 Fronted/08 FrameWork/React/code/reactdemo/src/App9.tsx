import { ChangeEvent, useRef, useEffect, useState } from "react";
// 提供了两种模式的基础组件-非受控组件

interface CalendarProps {
  defaultValue?: Date
  value?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {

  const { value:propsValue, defaultValue, onChange} = props;

  const [value, setValue] = useState(() => {
    if (propsValue !== undefined) {
      return propsValue
    } else {
      return defaultValue
    }
  })

  const isFirstRender = useRef(true);


  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setValue(defaultValue)
    }

    isFirstRender.current = false;
  }, [propsValue])

  const mergedValue = propsValue === undefined ? value : propsValue;

  function changeValue(date: Date) {
    if (propsValue === undefined) {
      setValue(date);
    }

    onChange?.(date);
  }

  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <div onClick={() => changeValue(new Date("2024-5-1"))}>2023-5-1</div>
      <div onClick={() => changeValue(new Date("2024-5-2"))}>2023-5-2</div>
      <div onClick={() => changeValue(new Date("2024-5-3"))}>2023-5-3</div>
    </div>
  );
}

function App() {
  const [value ,setValue] = useState(new Date("2024-5-1"));


  return <Calendar value={new Date("2024-5-1")} onChange={date => {
    console.log(date.toLocaleDateString());
    setValue(date)
    
  }} />;
}

export default App;
