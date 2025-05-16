export const Switch = ({
  defaultChecked = false,
}: {
  defaultChecked?: boolean;
}) => (
  <label className="inline-flex items-center cursor-pointer relative">
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="sr-only peer"
    />
    <div
      className="
          w-11 h-6 rounded-full transition-all 
          bg-gray-700 border border-gray-500 
          relative
          
          after:content-[''] after:absolute after:top-1/2 after:left-0.5
          after:-translate-y-1/2
          after:w-5 after:h-5 after:rounded-full after:transition-all 
          after:bg-gray-400 peer-checked:after:bg-cyan-400
          peer-checked:after:translate-x-full
        "
    />
  </label>
);
