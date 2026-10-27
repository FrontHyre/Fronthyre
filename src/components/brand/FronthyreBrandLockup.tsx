import FronthyreIcon from '@/components/brand/FronthyreIcon';
import FronthyreWordmark from '@/components/brand/FronthyreWordmark';

export type FronthyreLockupSize = 'header' | 'footer' | 'compact';

const lockupRow: Record<FronthyreLockupSize, string> = {
  header: 'h-11 max-h-11',
  footer: 'h-12 max-h-12 sm:h-[3.35rem] sm:max-h-[3.35rem]',
  compact: 'h-10 max-h-10 sm:h-11 sm:max-h-11',
};

const iconClass: Record<FronthyreLockupSize, string> = {
  header: 'h-10 max-h-10 w-[2.35rem] max-w-[2.35rem]',
  footer: 'h-11 max-h-11 w-[2.6rem] max-w-[2.6rem] sm:h-12 sm:max-h-12 sm:w-[2.85rem] sm:max-w-[2.85rem]',
  compact: 'h-8 max-h-8 w-[2rem] max-w-[2rem] sm:h-9 sm:max-h-9 sm:w-[2.25rem] sm:max-w-[2.25rem]',
};

const wordmarkClass: Record<FronthyreLockupSize, string> = {
  header:
    'h-11 max-h-11 w-auto max-w-[min(50vw,220px)] sm:max-w-[260px] translate-y-[2px] object-[left_center]',
  footer:
    'h-12 max-h-12 w-auto max-w-[min(72vw,240px)] sm:h-[3.35rem] sm:max-h-[3.35rem] sm:max-w-[300px] translate-y-[2px] sm:translate-y-[3px] object-[left_center]',
  compact:
    'h-9 max-h-9 w-auto max-w-[120px] sm:h-10 sm:max-h-10 sm:max-w-[140px] translate-y-[3px] sm:translate-y-[3px] object-[left_center]',
};

interface FronthyreBrandLockupProps {
  size?: FronthyreLockupSize;
  className?: string;
}

/** Icon + wordmark row (same layout as header; no link). */
export default function FronthyreBrandLockup({
  size = 'header',
  className = '',
}: FronthyreBrandLockupProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-[5px] ${lockupRow[size]} ${className}`}
    >
      <span className={`flex items-center justify-center ${lockupRow[size]}`}>
        <FronthyreIcon className={iconClass[size]} />
      </span>
      <span className={`flex items-center justify-center ${lockupRow[size]}`}>
        <FronthyreWordmark className={wordmarkClass[size]} />
      </span>
    </span>
  );
}
