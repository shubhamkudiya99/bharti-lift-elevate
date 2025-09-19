import { Phone } from "lucide-react";

interface PhoneButtonProps {
  number: string;
  children: React.ReactNode;
  className?: string;
}

export const PhoneButton = ({ number, children, className = "" }: PhoneButtonProps) => {
  return (
    <a
      href={`tel:${number}`}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <Phone className="h-4 w-4" />
      {children}
    </a>
  );
};