import './style.scss';

const Button = ({ onClick, children, btnStyle, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${btnStyle ? 'btn__secondary' : 'btn__primary'}`}
    >
      {children}
    </button>
  );
};
export default Button;
