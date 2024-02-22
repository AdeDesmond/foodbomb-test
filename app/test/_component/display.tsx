interface DisplayProps {
  input?: React.ReactNode;
  textarea?: React.ReactNode;
}

export const Display = ({ input, textarea }: DisplayProps) => {
  return (
    <div>
      <div>{input}</div>
      <div>{textarea}</div>
    </div>
  );
};
