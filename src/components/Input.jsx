import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "shadow-xl p-3 w-full border-b-2 rounded-sm border-gray-400 bg-gray-300 focus:outline-none";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-gray-600">{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
});
export default Input;
