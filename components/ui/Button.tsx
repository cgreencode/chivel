import { spawn } from 'child_process';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
}
export default function Button({
  children,
  loading = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        className +
        ' bg-green-600 px-4 py-2 hover:bg-green-700 rounded mt-2 text-white flex items-center gap-1 ' +
        (loading ? 'opacity-50 cursor-not-allowed' : '')
      }
      disabled={loading || props.disabled}
      type={props.type}
      {...props}>
      {loading ? (
        <span className='animate-spin text-xl'>
          <CgSpinner></CgSpinner>
        </span>
      ) : (
        ''
      )}
      {children}
    </button>
  );
}
