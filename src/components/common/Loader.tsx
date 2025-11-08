// src/components/common/Loader.tsx
const Loader: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <div
    style={{ width: size, height: size }}
    className="animate-spin border-4 border-muted rounded-full border-t-accent"
  />
);

export default Loader;
