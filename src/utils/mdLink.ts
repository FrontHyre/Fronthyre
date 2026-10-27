/** Inline link markup for LinkifiedText: [label](href) */
export function mdLink(label: string, href: string): string {
  return `[${label}](${href})`;
}
