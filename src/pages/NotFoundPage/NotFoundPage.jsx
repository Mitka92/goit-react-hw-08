import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <div className={css['wrapper']}>
        <Link to="/">Go Home</Link>
        <div className={css['container']} data-text="404">
          <div className={[css.title, css.glitch].join(' ')} data-text="404">
            404
          </div>
          <div
            className={[css.description, css.glitch].join(' ')}
            data-text="PAGE NOT FOUND"
          >
            PAGE NOT FOUND
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
