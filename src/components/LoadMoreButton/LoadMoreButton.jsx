import s from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ loadMoreFu }) => {
  return (
    <div className={s.loadMoreDiv}>
      <button className={s.loadMoreButton} onClick={() => loadMoreFu()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
