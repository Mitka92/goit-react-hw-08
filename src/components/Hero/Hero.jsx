import css from './Hero.module.css';
import logo from '../../assets/images/logo.png'; // Імпортуємо зображення

const Hero = () => {
  return (
    <div className={css.wrapper}>
      <img src={logo} alt="logo" width={200} />
      <h1 className={css.title}>
        <span className={css.span}>Keep your contacts in one place,</span>
        easily and safely!
      </h1>
      <p className={css.text}>
        Forget the chaos of the phone book. Our application will help you
        conveniently organize and quickly find the contacts you need. Everything
        you need is always at hand. Try it now and get maximum control over your
        contacts!
      </p>
    </div>
  );
};

export default Hero;
