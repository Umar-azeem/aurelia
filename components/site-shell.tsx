
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}


export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span /> {children}
    </p>
  );
}
