'use client';

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Agent Workflows</h1>
        <p className="text-xl text-[#757575] mb-12">
          From prompt to result: The complete agentic pipeline.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-[#00F0FF] pl-8 bg-[#111] p-6">
            <h2 className="text-2xl font-bold mb-4">Single Agent Workflow</h2>
            <ol className="list-decimal list-inside text-[#AAAAAA] space-y-2">
              <li>Define the task</li>
              <li>Configure tools</li>
              <li>Execute prompt</li>
              <li>Review output</li>
            </ol>
          </div>
          
          <div className="border-l-4 border-[#FF00FF] pl-8 bg-[#111] p-6">
            <h2 className="text-2xl font-bold mb-4">Multi-Agent Workflow</h2>
            <ol className="list-decimal list-inside text-[#AAAAAA] space-y-2">
              <li>Decompose task</li>
              <li>Assign specialists</li>
              <li>Parallel execution</li>
              <li>Synthesize results</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
