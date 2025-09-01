export default function Button({ children, ...props }) {
  return (
    <button
      className="px-6 py-3 text-base md: text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100 bg-stone-600"
      {...props}
    >
      {children}
    </button>
  );
}
