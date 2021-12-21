import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { useForm, Controller, useWatch } from "react-hook-form";

type FormValues = {
  checked1: boolean;
  checked2: boolean;
  checked3: boolean;
  checked4: boolean;
};

function App() {
  const { register, setValue, getValues, handleSubmit, control } =
    useForm<FormValues>();

  console.log(getValues());
  const values = useWatch({
    control,
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        control={control}
        name="checked1"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Checkbox
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
          />
        )}
      />

      <Controller
        control={control}
        name="checked2"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Checkbox
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
          />
        )}
      />

      <Controller
        control={control}
        name="checked3"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Checkbox
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
          />
        )}
      />

      <Controller
        control={control}
        name="checked4"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Checkbox
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
          />
        )}
      />

      <input type="submit" />
    </form>
  );
}
export default App;
