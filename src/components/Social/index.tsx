// Corrigir a importação de tipo
import type { ReactNode } from "react";

interface SocialProps {
  url: string;
  children: ReactNode;
}

// Anotar o tipo do parâmetro da função
export function Social({ url, children }: SocialProps) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
