import { useFormContext } from "react-hook-form";
import classes from "./dateInput.module.css";

function DateInput() {
  const { register, setValue } = useFormContext();

  const handleDay = (e) => {
    if (e.target.value.length > 2) {
      setValue("day", 0);
    }
    if (e.target.value > 31) {
      setValue("day", 31);
    }
    if (e.target.value < 0) {
      setValue("day", 0);
    }
  };

  const handleMonth = (e) => {
    if (e.target.value > 12) {
      setValue("month", 12);
    }
    if (e.target.value < 1) {
      setValue("month", 0);
    }
  };
  const handleYear = (e) => {
    const date = new Date();
    if (e.target.value.length === 4) {
      if (e.target.value > date.getFullYear()) {
        setValue("year", date.getFullYear());
      }
      if (e.target.value < date.getFullYear() - 90) {
        setValue("year", date.getFullYear() - 90);
      }
    }
    if (e.target.value.length > 4) {
      setValue("year", date.getFullYear());
    }
  };

  return (
    <div className={classes.date}>
      <input
        type="number"
        {...register("day")}
        onChange={handleDay}
        className={`${classes.date__input}`}
        placeholder="DD"
      />
      <p className={classes.date__slash}>/</p>
      <input
        type="number"
        {...register("month")}
        onChange={handleMonth}
        className={`${classes.date__input}`}
        placeholder="MM"
      />
      <p className={classes.date__slash}>/</p>
      <input
        type="number"
        {...register("year")}
        onChange={handleYear}
        className={`${classes.date__input} ${classes["date__input--year"]}`}
        placeholder="YYYY"
      />
    </div>
  );
}

export default DateInput;
