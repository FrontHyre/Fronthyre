export type ApiFieldError = { field: string; message: string };

export type ApiErrorBody = {
  success: false;
  error: string;
  errors?: ApiFieldError[];
  details?: string[];
};

export function parseApiErrorBody(data: unknown): ApiErrorBody {
  const d = data as ApiErrorBody;
  return {
    success: false,
    error: d?.error || 'Something went wrong. Please try again.',
    errors: d?.errors?.length
      ? d.errors
      : d?.details?.map((message) => ({ field: '_form', message })) || [
          { field: '_form', message: d?.error || 'Request failed.' },
        ],
    details: d?.details,
  };
}

export function errorsByField(errors: ApiFieldError[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const e of errors) {
    if (!map[e.field]) map[e.field] = e.message;
  }
  return map;
}

export function isApiErrorBody(e: unknown): e is ApiErrorBody {
  return (
    typeof e === 'object' &&
    e !== null &&
    'success' in e &&
    (e as ApiErrorBody).success === false &&
    typeof (e as ApiErrorBody).error === 'string'
  );
}
