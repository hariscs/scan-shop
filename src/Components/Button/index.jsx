import './style.scss';

const Button = ({ onClick, children, type, pid }) => {
  return (
    <button onClick={onClick} type={type} className='btn' id={pid}>
      {children}
    </button>
  );
};
export default Button;
