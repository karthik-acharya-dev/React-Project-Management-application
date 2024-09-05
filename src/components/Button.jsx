export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-gray-600 text-xs text-slate-400 font-bold hover:text-gray-300 rounded-md px-4 py-2 md:text-base "
      {...props}
    >
      {children}
    </button>
  );
}
