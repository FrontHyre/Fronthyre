import { Fragment, type ReactNode } from 'react';

/** Inline links: [label](https://...) or [label](mailto:email@example.com) */
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const linkClassName = 'font-medium text-fr-accent hover:underline';

function normalizeHref(href: string): string {
  const trimmed = href.trim();
  if (trimmed.startsWith('http') || trimmed.startsWith('mailto:')) {
    return trimmed;
  }
  if (trimmed.includes('@')) {
    return `mailto:${trimmed}`;
  }
  return trimmed;
}

export function linkifyPlainText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let linkIndex = 0;

  MARKDOWN_LINK_PATTERN.lastIndex = 0;

  while ((match = MARKDOWN_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const href = normalizeHref(match[2]);
    const isExternal = href.startsWith('http');

    nodes.push(
      <a
        key={`link-${linkIndex++}-${href}`}
        href={href}
        className={linkClassName}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </a>,
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

interface LinkifiedTextProps {
  text: string;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export default function LinkifiedText({
  text,
  className = '',
  as: Tag = 'span',
}: LinkifiedTextProps) {
  return (
    <Tag className={className}>
      {linkifyPlainText(text).map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </Tag>
  );
}
