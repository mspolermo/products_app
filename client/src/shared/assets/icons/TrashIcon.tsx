import React from "react";

interface TrashIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({
  width = 18,
  height = 18,
  color = "#333333",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.5 4v14h-13V4h-2V3h5V0h7v3h5v1h-2zm-4-3h-5v2h5V1zm3 3h-11v13h11V4zm-8 10h-1V8h1v6zm3 0h-1V6h1v8zm3 0h-1V8h1v6z" />
    </svg>
  );
};

export default TrashIcon;

