import { parseApiErrorBody } from '@/lib/apiError';

const API_BASE =
  `${import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:3000'}/api/v1/professionals`;

export type FormOption = { value: string; label: string };

export interface EarlyAccessFormOptionsData {
  experience_level: FormOption[];
  work_preference: FormOption[];
  job_search_status: FormOption[];
  notice_period: FormOption[];
}

interface ApiSuccess<T> {
  success: true;
  data: T;
}

async function parseJsonSafe(res: Response): Promise<unknown> {
  try {
    return await res.json();
  } catch {
    return {};
  }
}

async function handleJsonResponse<T>(res: Response): Promise<T> {
  const data = await parseJsonSafe(res);
  if (!res.ok) {
    throw parseApiErrorBody(data);
  }
  return data as T;
}

export async function fetchEarlyAccessFormOptions(): Promise<EarlyAccessFormOptionsData> {
  const res = await fetch(`${API_BASE}/early-access/form-options`);
  const json = await handleJsonResponse<ApiSuccess<EarlyAccessFormOptionsData>>(res);
  return json.data;
}

export async function submitEarlyAccess(form: FormData): Promise<{ public_id?: string }> {
  const res = await fetch(`${API_BASE}/early-access`, {
    method: 'POST',
    body: form,
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) {
    throw parseApiErrorBody(data);
  }
  const json = data as ApiSuccess<{ public_id?: string }>;
  return json.data;
}
