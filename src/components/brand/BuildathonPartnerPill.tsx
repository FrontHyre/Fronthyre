import FronthyreBrandLockup from '@/components/brand/FronthyreBrandLockup';
import {
  NITROSTACK_PARTNER_LOCKUP_HEIGHT_CLASS,
  NITROSTACK_PARTNER_LOCKUP_HEIGHT_PX,
} from '@/components/brand/partnerLockup';

const NITROSTACK_ICON_SRC = '/assets/brand/Logo_(2).svg';

/** Hero pill: Fronthyre × NitroStack — equal lockup height on both sides */
export default function BuildathonPartnerPill({ className = '' }: { className?: string }) {
  return (
    <div
      role="group"
      aria-label="Fronthyre in partnership with NitroStack"
      className={`inline-flex flex-wrap items-center justify-center gap-x-3 rounded-full border border-cyan-500/20 bg-fr-card px-4 py-2 sm:px-5 ${className}`}
    >
      <FronthyreBrandLockup />
      <span className="select-none px-0.5 text-xs font-mono font-semibold text-fr-muted" aria-hidden>
        ×
      </span>
      <div className={`flex ${NITROSTACK_PARTNER_LOCKUP_HEIGHT_CLASS} items-center gap-2`}>
        <img
          src={NITROSTACK_ICON_SRC}
          alt=""
          width={NITROSTACK_PARTNER_LOCKUP_HEIGHT_PX}
          height={NITROSTACK_PARTNER_LOCKUP_HEIGHT_PX}
          decoding="async"
          className={`${NITROSTACK_PARTNER_LOCKUP_HEIGHT_CLASS} w-[30px] shrink-0 rounded-md object-contain`}
          aria-hidden
        />
        <span className="whitespace-nowrap text-[13px] font-semibold leading-none tracking-tight text-fr-text">
          NitroStack
        </span>
      </div>
    </div>
  );
}
