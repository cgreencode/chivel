import { FormikProps } from 'formik';
import { type } from 'os';
import { HTMLInputTypeAttribute } from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  formik: FormikProps<any>;
  id: string;
  helperText?: React.ReactNode;
  label: string;
  type?: HTMLInputTypeAttribute;
  isTextarea?: boolean;
}
const FormGroup = ({
  formik,
  id,
  helperText,
  label,
  type = 'text',
  isTextarea = false,
  ...props
}: Props) => {
  return (
    <div className={` flex-col flex gap-2`}>
      <label htmlFor='channelId' className='font-bold'>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[id]}
          id={id}
          className='input'
          rows={15}
        />
      ) : (
        <>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            type={type}
            id={id}
            className='rounded'
            {...props}
          />
        </>
      )}
      {formik.touched[id] && formik.errors[id] ? (
        <span className='text-sm text-red-500'>{formik.errors[id]}</span>
      ) : null}
      {helperText && <small>{helperText}</small>}
    </div>
  );
};

export default FormGroup;
