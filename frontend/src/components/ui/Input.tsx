type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => (
  <input
    className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:ring focus:ring-primary"
    {...props}
  />
);
