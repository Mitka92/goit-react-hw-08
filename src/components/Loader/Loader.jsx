import GridLoader from 'react-spinners/GridLoader';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.backdrop}>
        <GridLoader color="rgb(0, 123, 255)" size={24} />
      </div>
    </div>
  );
};
export default Loader;
