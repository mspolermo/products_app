import React from "react";

interface EditIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const EditIcon: React.FC<EditIconProps> = ({
  width = 17,
  height = 18,
  color = "#333333",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.68 16.26L.01 17.455l1.01-6.852L11.63-.003l5.65 5.656zm-4.25-1.414l3.54-.707 5.65-5.658-2.82-2.83-5.66 5.658zM10.21 4.24l2.83 2.828 1.41-1.415-2.82-2.828z" />
    </svg>
  );
};

export default EditIcon;
