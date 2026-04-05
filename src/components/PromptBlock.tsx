'use client';

import { useState } from "react";

export default function PromptBlock({ title, prompts, children }: { title: string; prompts: string[]; children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#141414] border border-[#2A2A2A] p-6 mb-6">
      <h3 className="text-[#00F0FF] font-bold uppercase tracking-wide mb-4">{title}</h3>
      {prompts.map((prompt, i) => (
        <div key={i} className="relative">
          <pre className="bg-[#0D0D0D] text-[#B0B0B0] p-4 font-mono text-sm overflow-x-auto mb-2">{
            prompt
          }</pre>
          <button
            onClick={() => copyToClipboard(prompt)}
            className="absolute top-2 right-2 bg-[#00F0FF] text-[#0D0D0D] px-3 py-1 text-xs font-bold uppercase hover:bg-[#00A3AA] transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      ))}
      {children}
    </div>
  );
}
