export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const styles = {
    primary: `${base} bg-[#007E85] hover:bg-[#006B73]`, 
    secondary: `${base} bg-[#EE0202] hover:bg-[#CC0101]`,
    danger: `${base} bg-[#EE0202] hover:bg-[#CC0101]`,
  };
  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
