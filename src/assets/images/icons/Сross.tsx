import { IIconProps } from "../../../types";

const Cross: React.FC<IIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3334 7.22716L7.72684 17.8338L6.66618 16.7731L17.2728 6.1665L18.3334 7.22716Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.72722 6.1665L18.3338 16.7731L17.2732 17.8338L6.66656 7.22716L7.72722 6.1665Z"
        fill="white"
      />
    </svg>
  );
};

export default Cross;
