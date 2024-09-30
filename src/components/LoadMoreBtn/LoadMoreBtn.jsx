import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreFu }) => {
  return (
    <div className={s.loadMoreDiv}>
      <button className={s.loadMoreBtn} onClick={() => loadMoreFu()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
