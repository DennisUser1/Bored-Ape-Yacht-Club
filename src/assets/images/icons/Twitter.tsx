import { IIconProps } from '../../../types';

const Twitter: React.FC<IIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_51_856)">
        <path d="M14.2833 10.1571L23.2178 0H21.1006L13.3427 8.81931L7.14656 0H0L9.36984 13.3364L0 23.9877H2.11732L10.3098 14.6742L16.8534 23.9877H24L14.2827 10.1571H14.2833ZM11.3833 13.4538L10.4339 12.1258L2.88022 1.55881H6.1323L12.2282 10.0867L13.1776 11.4147L21.1016 22.4998H17.8495L11.3833 13.4544V13.4538Z" />
      </g>
      <defs>
        <clipPath id="clip0_51_856">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Twitter;