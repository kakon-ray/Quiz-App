import classes from "../styles/Form.module.css";

export default function Form({ children, classesName, ...rest }) {
  return (
    <div>
      <form classesName={`${classesName} ${classes.from}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}
