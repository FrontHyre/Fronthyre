const PLACEHOLDER_URL = /^(na|n\/a|-)$/i;

export function appendIfPresent(fd: globalThis.FormData, key: string, value: string) {
  const trimmed = value.trim();
  if (trimmed) fd.append(key, trimmed);
}

/** Returns false if URL is present but invalid (sets fieldErrors). Omits empty/placeholder values. */
export function appendUrl(
  fd: globalThis.FormData,
  key: string,
  value: string,
  setFieldError: (key: string, message: string) => void,
): boolean {
  const v = value?.trim();
  if (!v || PLACEHOLDER_URL.test(v)) return true;
  if (!/^https?:\/\//i.test(v)) {
    setFieldError(key, 'Please enter a full URL starting with https://');
    return false;
  }
  fd.append(key, v);
  return true;
}
