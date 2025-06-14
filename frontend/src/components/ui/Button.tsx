type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className = '' }: Props) => (
  <button className={`px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition ${className}`}>
    {children}
  </button>
);
