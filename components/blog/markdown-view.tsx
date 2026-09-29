import * as React from 'react';

interface MarkdownViewProps {
  content: string;
}

export function MarkdownView({ content }: MarkdownViewProps) {
  // Simple, robust markdown-to-elements renderer
  const renderFormattedText = (text: string) => {
    // Bold formatting: **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="my-5 space-y-2 list-disc list-inside text-slate-700">
          {currentList.map((item, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {renderFormattedText(item)}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={i} className="text-3xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={i} className="text-4xl font-extrabold text-slate-900 mt-10 mb-6 tracking-tight">
          {line.replace('# ', '')}
        </h1>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      currentList.push(line.replace(/^[-*]\s+/, ''));
    } else if (/^\d+\.\s+/.test(line)) {
      currentList.push(line.replace(/^\d+\.\s+/, ''));
    } else {
      flushList();
      elements.push(
        <p key={i} className="my-4 text-slate-700 leading-relaxed text-base sm:text-lg">
          {renderFormattedText(line)}
        </p>
      );
    }
  }

  flushList();

  return <div className="prose-container max-w-none">{elements}</div>;
}
