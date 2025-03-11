import { IIconProps } from "../../../types";

const Arrow: React.FC<IIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.9593 12H36V33.0406H29.5259V23.052L16.5778 36L12 31.4222L24.9481 18.474H14.9593V12Z"
        fill="white"
      />
    </svg>
  );
};

export default Arrow;