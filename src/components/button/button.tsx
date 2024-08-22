interface SimpleButtonProps {
  title: string;
  onClickAction?: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  title,
  onClickAction,
}) => {
  return (
    <div>
      <button onClick={onClickAction}>{title}</button>
    </div>
  );
};

export default SimpleButton;
