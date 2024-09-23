import { BeatLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderDiv}>
      <BeatLoader color="rgb(117, 117, 251)" />
    </div>
  );
};

export default Loader;
