interface IconProps {
  className?: string; // Accept className as an optional prop
}

const ItalicIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    fill="currentColor"
    stroke="currentColor"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.90977 2H4V1H13V2H8.92356L7.09023 13H11V14H2V13H6.07644L7.90977 2Z"
    />
  </svg>
);

export default ItalicIcon;
