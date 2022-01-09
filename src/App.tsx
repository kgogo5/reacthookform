import { Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const options = ["Selected Item 1", "Selected Item 2", "Selected Item 3"];

export default function App() {
  const { register, handleSubmit, getValues, setError } = useForm();
  const [selected, setSelected] = useState<any>([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    if (value === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    if (selected.indexOf(value) !== -1) {
      // if value already present
      const newSelected = selected.filter((s: any) => s !== value);
      setSelected(newSelected);
    } else {
      // if value not present
      setSelected([...selected, value]);
    }
  };

  // 비밀번호 유효성 검사
  const validate = () => {
    const values = getValues("password");

    if (
      !/^(?=^.{10,16}$)(((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))|((?=.*[!@#$%._])(?=.*[a-z])(?=.*[A-Z]))|((?=.*\d)(?=.*[!@#$%._])(?=.*[a-z])(?=.*[A-Z])))[a-zA-Z0-9!@#$%._]*$/.test(
        values
      )
    ) {
      console.log("비밀번호 형식에 안맞음");
      return false;
    }
    if (/.*(012|123|234|345|456|567|678|789).*/g.test(values)) {
      console.log("연속된 숫자");
      return false;
    }
    if (/.*(.)\1{2}.*/g.test(values)) {
      console.log("연속된 글자");
      return false;
    }
    return true;
    // if (!values.email) {
    //   setFormErrors({email:"Cannot be blank"})
    // } else if (!regex.test(values.email)) {
    //   setFormErrors({email:"Invalid email format"});
    // }
    // if (!values.password) {
    //   setFormErrors({password:"Cannot be blank"});
    // } else if (values.password.length < 4) {
    //   setFormErrors({password:"Password must be more than 4 characters"});
    // }
  };

  const listItem = options.map((option: any) => {
    return (
      <div key={option}>
        <Checkbox
          value={option}
          onChange={handleChange}
          checked={selected.includes(option)}
        />
        <span>{option}</span>
      </div>
    );
  });

  return (
    <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
      <Checkbox value="all" onChange={handleChange} checked={isAllSelected} />
      <span> Select All</span>
      {listItem}

      <form onSubmit={onSubmit}>
        <TextField
          size="small"
          label="비밀번호 *"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            // pattern: {
            //   value:
            //     /^(?=^.{10,16}$)(((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))|((?=.*[!@#$%._])(?=.*[a-z])(?=.*[A-Z]))|((?=.*\d)(?=.*[!@#$%._])(?=.*[a-z])(?=.*[A-Z])))[a-zA-Z0-9!@#$%._]*$/,

            //   message:
            //     "대소문자, 숫자, 특수문자 세가지 조합 이상 8자 이상의 비밀번호 구성",
            // },
            validate: {
              pattern: () => validate(),
            },
          })}
        />
        <button onClick={() => onSubmit()}>submit</button>
      </form>
    </div>
  );
}
