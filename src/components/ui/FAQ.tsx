import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LinkifiedText from '@/components/ui/LinkifiedText';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'FAQ' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-fr-text tracking-tight text-center mb-12">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`card-fr overflow-hidden ${isOpen ? 'border-fr-border-hover' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-medium text-fr-text pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-fr-secondary transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-fr-secondary leading-relaxed">
                  <LinkifiedText text={item.a} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
