import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  className?: string;
  ariaLabel?: string;
  action?: () => void;
  type?: string;
}

const Button = ({ className, ariaLabel, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      onClick={action}
      className={className}
      aria-label={ariaLabel}
      name="find"
    >
      <img src="./arrow.png" width="35" height="35" alt="arrow" />
    </ButtonStyled>
  );
};

export default Button;
