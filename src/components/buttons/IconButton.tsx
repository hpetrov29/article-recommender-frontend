interface IconButtonProps {
  icon: React.ReactNode; // Accept the icon as an element
  label?: string; // Optional label for the button
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label }) => {
  return (
    <div className="h-full">
      <button className="group h-full flex items-center gap-[0.375rem] px-2 rounded-full select-none hover:bg-[rgba(238,238,238,1)] transition duration-200">
        {icon} {/* Render the icon element directly */}
        {label && (
          <div className="font-normal text-[0.8125rem] leading-[1.25rem] text-gray-400 group-hover:text-black transition-colors duration-200">
            {label}
          </div>
        )}
      </button>
    </div>
  );
};

export default IconButton;
