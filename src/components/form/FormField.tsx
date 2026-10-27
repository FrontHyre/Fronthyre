type FieldType = 'text' | 'email' | 'tel' | 'select' | 'textarea';

interface BaseFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
  type?: FieldType;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  autoComplete?: string;
  inputMode?: 'text' | 'email' | 'tel' | 'numeric';
  rows?: number;
}

export default function FormField(props: BaseFieldProps) {
  const {
    label,
    name,
    required = false,
    error,
    hint,
    type = 'text',
    placeholder,
    value,
    onChange,
    options,
    autoComplete,
    inputMode,
    rows = 4,
  } = props;

  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const hintId = `${fieldId}-hint`;

  const baseInputClasses = `w-full px-4 py-3 text-sm bg-fr-elevated border rounded-xl text-fr-text placeholder:text-fr-muted transition-colors duration-200 ${
    error
      ? 'border-fr-error focus:border-fr-error'
      : 'border-fr-border focus:border-fr-accent'
  }`;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label htmlFor={fieldId} className="text-sm font-medium text-fr-text">
          {label}
          {required && <span className="text-fr-accent ml-1">*</span>}
        </label>
        {!required && (
          <span className="text-xs text-fr-muted">Optional</span>
        )}
      </div>

      {type === 'select' && options ? (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
        >
          <option value="">{placeholder ?? 'Select...'}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${baseInputClasses} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={baseInputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
        />
      )}

      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-fr-error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="mt-1.5 text-xs text-fr-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
