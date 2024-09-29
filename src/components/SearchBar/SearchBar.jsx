import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({onSubmit}) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === "") {
      toast.error("Write some text!");
      return;
    } else if (topic.length < 3) {
      toast.error("The number of characters must be at least three!");
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  return (
    <>
      <header className={s.header}>
        <form onSubmit={handlerSubmit} className={s.form}>
          <input
            name="topic"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
