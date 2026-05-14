import { HeartIcon } from "./HeartIcon";

export const Footer = () => (
  <footer className="py-12 px-6 text-center bg-background border-t border-border/50">
    <div className="flex justify-center items-center gap-2 text-muted-foreground">
      <span>Feito com</span>
      <HeartIcon className="w-4 h-4 text-primary animate-shimmer" />
      <span>só para você</span>
    </div>
  </footer>
);
