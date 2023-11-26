import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  className?: string;
  ariaLabel?: string;
  action?: () => void;
}

const Button = ({ className, ariaLabel, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} className={className} aria-label={ariaLabel}>
      <img src="./arrow.png" width="35" height="35" alt="arrow" />
    </ButtonStyled>
  );
};

export default Button;
