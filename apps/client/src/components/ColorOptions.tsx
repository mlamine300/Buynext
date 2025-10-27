/* eslint-disable @typescript-eslint/no-explicit-any */
interface ColorOptionProps {
  colorList: string[];
  color: string;
  setColor: any;
}

const ColorOptions = ({ colorList, color, setColor }: ColorOptionProps) => {
  return (
    <div className="flex gap-1">
      {colorList.map((col, index) => (
        <button
          onClick={() => setColor(col)}
          key={index}
          style={{ backgroundColor: col, outlineColor: col }}
          className={`w-4 h-4 rounded-full cursor-pointer ${
            color === col ? "border-1 p-1 border-white outline-1  " : ""
          }`}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;
