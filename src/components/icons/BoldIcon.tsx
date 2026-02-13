interface IconProps {
  className?: string; // Accept className as an optional prop
}

const BoldIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      id="primary"
      d="M5,3h7.5A4.49,4.49,0,0,1,17,7.5h0A4.49,4.49,0,0,1,12.5,12H7"
    ></path>
    <path
      id="primary-2"
      data-name="primary"
      d="M5,21h9.5A4.49,4.49,0,0,0,19,16.5h0A4.49,4.49,0,0,0,14.5,12H7"
    ></path>
    <line
      id="primary-3"
      data-name="primary"
      x1="7"
      y1="21"
      x2="7"
      y2="3"
    ></line>
  </svg>
);

export default BoldIcon;
