export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const styles = {
    primary: \`\${base} bg-blue-600 hover:bg-blue-700\`,
    secondary: \`\${base} bg-green-500 hover:bg-green-600\`,
    danger: \`\${base} bg-red-500 hover:bg-red-600\`,
  };
  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
