interface ButtonProps {
  text?: string;
  icon?: JSX.Element;
  className?: string;
  ariaLabel?: string;
  action?: () => void;
}

const Button = ({ className, ariaLabel, action }: ButtonProps): JSX.Element => {
  return (
    <button onClick={action} className={className} aria-label={ariaLabel}>
      Submit
    </button>
  );
};

export default Button;
