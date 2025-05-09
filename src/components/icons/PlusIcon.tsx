interface IconProps {
  className?: string; // Accept className as an optional prop
}

const PlusIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
    stroke="currentColor"
    className={className}
  >
    <path
      id="plus"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.034,29.948l0,-21.983l3.741,0l0,21.983l22.203,0l0,3.741l-22.203,0l0,22.203l-3.741,0l0,-22.203l-22.008,0l0,-3.741l22.008,0Z"
    />
  </svg>
);

export default PlusIcon;
