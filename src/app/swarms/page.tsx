'use client';

export default function SwarmsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Sovereign Swarms</h1>
        <p className="text-xl text-[#757575] mb-12">
          One agent is good. Multiple agents working together is power.
        </p>
        
        <div className="space-y-8">
          <div className="border-l-4 border-[#00F0FF] pl-8">
            <h2 className="text-2xl font-bold mb-2">The Swarm Concept</h2>
            <p className="text-[#AAAAAA]">
              A swarm is a team of specialized agents that collaborate on complex tasks.
              Each agent has a specific role, tools, and expertise.
            </p>
          </div>
          
          <div className="border-l-4 border-[#FF00FF] pl-8">
            <h2 className="text-2xl font-bold mb-2">Example: Code Review Swarm</h2>
            <ul className="list-disc list-inside text-[#AAAAAA] space-y-2">
              <li>Security Agent: Checks for vulnerabilities</li>
              <li>Performance Agent: Optimizes for speed</li>
              <li>Style Agent: Enforces code standards</li>
              <li>Orchestrator: Coordinates and synthesizes results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
