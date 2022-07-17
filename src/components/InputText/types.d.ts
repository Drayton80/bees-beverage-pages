export type InputTextProps = {
  label: string;
  warningLabel: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};
