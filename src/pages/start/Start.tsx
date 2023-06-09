import { useForm, FormProvider } from "react-hook-form";
import { isValid } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import DateInput from "../../components/DateInput";
import useDate from "../../stores/store";
import classes from "./start.module.css";

type FormValues = {
  year: string;
  month: string;
  day: string;
};

function Start() {
  const navigate = useNavigate();
  const { date, setDate } = useDate();
  const methods = useForm<FormValues>();
  const [error, setError] = useState<string>("");
  const onSubmit = methods.handleSubmit((data) => {
    const formattedData = `${data.year}-${data.month}-${data.day}`;
    const date = new Date(formattedData);
    const isValidDate = isValid(date);
    if (isValidDate) {
      setDate(date);
      console.log(date);
      navigate("/bubble");
    } else {
      setError("Invalid Date 🤨");
    }
  });
  console.log(date);

  return (
    <div className={classes.start__container}>
      <div className={classes.start__wrapper}>
        <h1 className={classes.start__h1}>Born Date</h1>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className={classes.start__form}>
            <DateInput />
            <button type="submit" className={classes.start__button}>
              Calculate
            </button>
          </form>
          {!!error.length && <p className={classes.start__p}>{error}</p>}
        </FormProvider>
      </div>
    </div>
  );
}

export default Start;
