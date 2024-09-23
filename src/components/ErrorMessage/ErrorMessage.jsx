import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.errorDiv}>
      <p className={s.errorMessage}>Something went wrong! Try again...</p>
    </div>
  );
};

export default ErrorMessage;
