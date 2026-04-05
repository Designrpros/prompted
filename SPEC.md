# Prompted 2.0 - Content Architecture Specification

## Overview

Prompted 2.0 is a comprehensive prompt engineering guide that evolves from basic single-prompt techniques to advanced multi-agent orchestration systems. The content architecture is designed to take users on a journey from simple prompt crafting to understanding how teams of specialized AI agents (Sovereign Swarms) collaborate to solve complex problems.

---

## Navigation Structure

```
/
├── (Landing - Hero & Quick Start)
├── basics/                    # Fundamentals of prompt engineering
├── patterns/                  # Reusable prompt patterns & strategies
├── advanced/                  # Advanced prompting techniques
├── examples/                  # Real-world prompt examples
├── resources/                 # Tools, libraries & references
├── faq/                       # Troubleshooting & Q&A
├── playground/                # Interactive AI testing environment
├── swarms/                    # NEW: Sovereign Swarms - Multi-Agent Systems
└── workflows/                # NEW: Agentic Workflows - Orchestration
```

---

## Page Specifications

### 1. Landing Page (`/`)

**Purpose:** Entry point that introduces Prompted 2.0 and guides users through the learning journey.

**Content Sections:**
- **Hero Section:** "Master Prompt Engineering" with tagline about evolving from simple prompts to agentic systems
- **Quick Navigation:** Visual cards linking to main sections
- **Learning Path:** Suggested route from basics → patterns → advanced → swarms/workflows
- **What's New:** Highlights the new Sovereign Swarms and Agentic Workflows sections

**Key Features:**
- Responsive grid layout for section cards
- Animated transitions between sections
- Progress indicator showing completion percentage

---

### 2. Basics (`/basics`)

**Purpose:** Establish foundational knowledge for prompt engineering beginners.

**Content Structure:**

#### 2.1 What is Prompt Engineering?
- Definition: The art of crafting effective inputs for AI models
- Key concepts: Clarity, Context, Specificity, Iteration
- Why it matters: Maximizes AI utility and output quality

#### 2.2 Anatomy of a Prompt
- **Instruction:** The core action (Write, Explain, List, Analyze)
- **Context:** Background information and constraints
- **Input Data:** The content to process
- **Output Format:** Desired structure (bullet points, paragraph, JSON)
- **Examples:** Optional few-shot demonstrations

#### 2.3 Types of Prompts
- **Open-Ended:** Creative, exploratory responses
- **Instructional:** Task-focused, structured outputs
- **Role-Based:** Persona-driven responses
- **Conversational:** Multi-turn dialogue
- **Chain-of-Thought:** Step-by-step reasoning

#### 2.4 Getting Started
- Step-by-step guide: Goal → Write → Add Context → Specify Format → Test & Refine
- Common pitfalls and how to avoid them
- Practice exercises

**Design:** Accordion-based expandable sections with code examples in dark panels.

---

### 3. Patterns (`/patterns`)

**Purpose:** Provide reusable strategies for consistent, high-quality AI outputs.

**Content Structure:**

#### 3.1 Prompt Pattern Foundations
- What are prompt patterns?
- Why use patterns?
- How to combine patterns

#### 3.2 Core Patterns
| Pattern | Purpose | Use Case | Example |
|---------|---------|----------|---------|
| Few-Shot | Set style via examples | Consistent output format | "Here are 2 summaries: [ex1], [ex2]. Summarize this..." |
| Chain-of-Thought | Step-by-step reasoning | Complex problem-solving | "Solve 2x+3=7, show each step" |
| Role-Play | Persona-driven context | Audience-specific content | "You are a historian explaining..." |
| Zero-Shot | Task completion without examples | Simple, well-defined tasks | "Translate to French: [text]" |

#### 3.3 Advanced Patterns
- **Critique then Improve:** Self-refinement loop
- **Tree of Thoughts:** Exploring multiple solution paths
- **ReAct:** Reasoning + Action combination
- **Hallucination Prevention:** Grounding with constraints

#### 3.4 Pattern Combinations
- Few-Shot + Chain-of-Thought: Guided multi-step tasks
- Role-Play + Chain-of-Thought: Expert reasoning
- Critique + Improve + Few-Shot: Iterative refinement

#### 3.5 Practical Applications
- Creative writing patterns
- Problem-solving patterns
- Code generation patterns
- Data analysis patterns

**Design:** Card-based layout with interactive examples. Each pattern has a "Try It" button that opens the Playground.

---

### 4. Advanced (`/advanced`)

**Purpose:** Move beyond basic prompting to sophisticated techniques.

**Content Structure:**

#### 4.1 Prompt Chaining
- Breaking complex tasks into sequential prompts
- State management between prompts
- Example: Research → Summarize → Analyze → Present

#### 4.2 Self-Reflection & Improvement
- Teaching AI to critique its own outputs
- Iterative refinement loops
- Confidence scoring

#### 4.3 Multi-Modal Prompting
- Combining text with images, audio, video
- Image-to-text workflows
- Cross-modal reasoning

#### 4.4 Context Management
- Long context handling
- Sliding window techniques
- Information retrieval optimization

#### 4.5 Prompt Optimization
- A/B testing prompts
- Performance metrics
- Iterative refinement strategies

#### 4.6 Handling Edge Cases
- Ambiguous inputs
- Hallucination mitigation
- Safety and content filtering

**Design:** Split-screen layout showing prompt on left, output analysis on right.

---

### 5. Examples (`/examples`)

**Purpose:** Demonstrate prompt engineering in action through real-world use cases.

**Content Structure:**

#### 5.1 Creative Writing
- Story generation with character development
- Poetry with specific meter and style
- Script writing with dialogue formatting

#### 5.2 Technical Tasks
- Code generation and debugging
- Documentation creation
- Technical explanation simplified

#### 5.3 Business Applications
- Email drafting and personalization
- Report generation and summarization
- Market analysis and insights

#### 5.4 Educational Use Cases
- Concept explanation for different ages
- Quiz and test generation
- Study guide creation

#### 5.5 Research & Analysis
- Literature review synthesis
- Data interpretation
- Hypothesis generation

**Design:** Interactive cards with expandable prompt/output pairs. Each example includes copy-to-playground functionality.

---

### 6. Resources (`/resources`)

**Purpose:** Curated collection of tools, libraries, and references for prompt engineering.

**Content Structure:**

#### 6.1 Prompt Libraries
- Awesome Prompts (GitHub collection)
- PromptHero (AI art prompts)
- FlowGPT (community-driven)

#### 6.2 Tools & Platforms
- PromptBase (marketplace)
- PromptPerfect (optimization)
- Neuronic (prompt management)

#### 6.3 Learning Resources
- Learn Prompting (comprehensive guide)
- DAIR.AI Prompt Engineering Guide
- Anthropic Documentation

#### 6.4 Communities
- Reddit r/PromptEngineering
- Hacker News
- Discord servers

#### 6.5 Templates
- Pre-built prompt templates
- Industry-specific solutions
- Custom template creation

**Design:** Categorized accordion sections with external links opening in new tabs.

---

### 7. FAQ (`/faq`)

**Purpose:** Address common issues and questions from prompt engineering practitioners.

**Content Structure:**

#### 7.1 Getting Started FAQ
- "How do I write my first prompt?"
- "What's the difference between open-ended and instructional?"
- "How many examples do I need for Few-Shot?"

#### 7.2 Troubleshooting
- "Why does the AI give vague answers?"
- "How do I reduce hallucinations?"
- "What if the output is too long/short?"
- "How do I handle sensitive content?"

#### 7.3 Advanced Questions
- "When should I use Chain-of-Thought?"
- "How do I combine multiple patterns?"
- "What's the best way to handle long contexts?"

#### 7.4 Best Practices
- Prompt version control
- Output validation strategies
- Performance optimization

**Design:** Accordion FAQ with search functionality. Questions grouped by category with difficulty indicators.

---

### 8. Playground (`/playground`)

**Purpose:** Interactive environment for testing and refining prompts in real-time.

**Content Structure:**

#### 8.1 Interface Overview
- Chat-style interface
- Prompt input with Markdown support
- Response display with syntax highlighting

#### 8.2 Features
- Real-time AI responses (LLaMA-4 Maverick via OpenRouter)
- Conversation history
- Prompt templates quick-access
- Copy/export functionality

#### 8.3 Guided Experiments
- Suggested experiments for each pattern
- A/B testing interface
- Response comparison tool

#### 8.4 History & Analytics
- Save favorite prompts
- Track improvements over time
- Performance metrics

**Design:** Dark-themed chat interface with floating action buttons. Responsive across devices.

---

### 9. Sovereign Swarms (`/swarms`) - NEW

**Purpose:** Introduce the concept of multi-agent AI systems where specialized agents collaborate to solve complex problems. This section bridges single-prompt techniques with advanced agent orchestration.

**Content Structure:**

#### 9.1 What Are Sovereign Swarms?
**Definition:** A Sovereign Swarm is a system of autonomous, specialized AI agents that collaborate under a unified goal. Unlike a single AI responding to one prompt, a swarm comprises multiple agents, each with distinct roles, responsibilities, and expertise—like a team of specialists working together.

**Key Characteristics:**
- **Autonomy:** Each agent operates independently within its role
- **Specialization:** Agents are optimized for specific tasks (e.g., research, writing, coding)
- **Collaboration:** Agents communicate, share context, and coordinate actions
- **Sovereignty:** Each agent has its own "brain" (model instance) and cannot be controlled by other agents
- **Goal-Oriented:** All agents work toward a common objective defined by the orchestrator

**Comparison:**
| Single Prompt | Traditional Chat | Sovereign Swarm |
|---------------|------------------|-----------------|
| One input → One output | Multi-turn, single agent | Multiple agents, shared goal |
| Limited context | Conversational continuity | Agent-to-agent communication |
| Static response | Dynamic but singular | Collaborative, multi-perspective |
| No specialization | Generalist approach | Specialized expertise per agent |

#### 9.2 The Architecture of a Sovereign Swarm

**Core Components:**

1. **The Orchestrator (Sovereign Leader)**
   - Defines the overall goal and strategy
   - Assigns tasks to specialized agents
   - Synthesizes outputs from agents
   - Maintains the "north star" objective

2. **Specialized Agents**
   - **Research Agent:** Gathers, validates, and summarizes information
   - **Coder Agent:** Writes, debugs, and optimizes code
   - **Writer Agent:** Crafts clear, engaging content
   - **Analyst Agent:** Interprets data, identifies patterns
   - **Reviewer Agent:** Evaluates outputs, suggests improvements

3. **Communication Layer**
   - Agent-to-agent messaging
   - Shared context and memory
   - Task status updates

4. **Output Synthesizer**
   - Combines agent outputs into coherent results
   - Ensures consistency and quality

**Example Swarm Structure:**
```
User Query: "Create a comprehensive business plan for a tech startup"

Orchestrator
├── Research Agent → Market analysis, competitor intel
├── Writer Agent → Executive summary, company description
├── Analyst Agent → Financial projections, risk assessment
├── Coder Agent → Financial models, data visualizations
└── Reviewer Agent → Quality check, final polish
         ↓
    Final Output: Complete Business Plan
```

#### 9.3 From Single Prompt to Swarm: The Evolution

**Stage 1: Single Prompt**
```
User: "Write a blog post about AI"
→ Single AI responds with generic blog post
```
**Limitation:** One perspective, limited depth, generalist output.

**Stage 2: Multi-Turn Conversation**
```
User: "Write a blog post about AI"
AI: "What aspect of AI would you like to focus on?"
User: "Machine learning in healthcare"
AI: [Generates blog post]
```
**Improvement:** Iterative refinement, but still single-agent.

**Stage 3: Prompt Chaining**
```
Prompt 1: "Research latest ML healthcare applications"
Prompt 2: "Summarize findings in bullet points"
Prompt 3: "Write blog post based on summary"
→ Sequential processing, but same agent
```
**Improvement:** Structured workflow, but still one "brain."

**Stage 4: Basic Multi-Agent (Shared Model)**
```
Agent A (Research): Gathers info
Agent B (Writer): Uses Agent A's output to write
→ Multiple agents, but same underlying model
```
**Improvement:** Task distribution, but agents lack true sovereignty.

**Stage 5: Sovereign Swarms (Peak AI Approach)**
```
Orchestrator: "Create a business plan"
├── Agent-1 (Research): Specialized model for web scraping & analysis
├── Agent-2 (Writer): Specialized model for business writing
├── Agent-3 (Analyst): Specialized model for financial modeling
└── Agent-4 (Review): Specialized model for quality assurance
→ Each agent has its own "sovereign" model instance, truly independent
```
**Result:** Expert-level output from each agent, combined into superior whole.

#### 9.4 Why Sovereign Swarms Outperform Single Agents

**1. Specialization**
- Each agent is optimized for its domain (not a generalist trying to do everything)
- Example: Research agent uses model trained/optimized for data retrieval; Writer agent uses model optimized for prose

**2. Parallel Processing**
- Multiple agents work simultaneously (not sequentially)
- Time-to-output significantly reduced

**3. Quality Through Collaboration**
- Reviewer agent catches errors that would otherwise pass
- Writer agent incorporates feedback from Analyst agent
- Final output is refined by multiple experts

**4. Scalability**
- Add more agents for complex tasks
- Swap agents for different workflows
- Reconfigure swarm for new domains

**5. Robustness**
- If one agent fails, others continue
- Failure doesn't cascade (sovereignty prevents single point of failure)

**Real-World Analogy:**
- **Single Agent:** One doctor performing surgery, managing anesthesia, and doing follow-up care
- **Sovereign Swarm:** Surgical team (surgeon, anesthesiologist, nurses) each doing specialized role with full autonomy within their domain

#### 9.5 Implementing Sovereign Swarms

**Prerequisites:**
1. **Multiple Model Instances:** Access to various AI models or endpoints
2. **Orchestration Logic:** System to coordinate agent activities
3. **Communication Protocol:** Defined message format between agents
4. **State Management:** Tracking progress, context, and outputs

**Simple Implementation Steps:**

1. **Define the Goal:** "Create a comprehensive market research report"
2. **Identify Roles:**
   - Researcher (gathers data)
   - Analyst (processes data)
   - Writer (creates report)
   - Editor (reviews and refines)
3. **Assign Models:**
   - Researcher: Claude for web scraping + analysis
   - Analyst: GPT-4 for data interpretation
   - Writer: LLaMA for prose generation
   - Editor: Gemini for quality check
4. **Create Prompts for Each Agent:**
   - Researcher: "Find top 5 competitors in [industry] and summarize their strategies"
   - Analyst: "Based on research data, identify market trends and opportunities"
   - Writer: "Write executive summary based on analyst's findings"
   - Editor: "Review draft for clarity, consistency, and completeness"
5. **Orchestrate Flow:**
   - Orchestrator sends initial task to Researcher
   - Researcher output feeds into Analyst
   - Analyst output feeds into Writer
   - Writer output feeds into Editor
   - Editor output returns to Orchestrator for final synthesis

**Code Example (Pseudocode):**
```typescript
// Simple Orchestrator
class Orchestrator {
  async createMarketReport(industry: string) {
    const researcher = new ResearchAgent();
    const analyst = new AnalystAgent();
    const writer = new WriterAgent();
    const editor = new EditorAgent();

    // Parallel task assignment (where possible)
    const researchTask = researcher.investigate(industry);
    const analysisTask = analyst.process(await researchTask);
    const writingTask = writer.compose(await analysisTask);
    const reviewTask = editor.refine(await writingTask);

    return await reviewTask;
  }
}
```

#### 9.6 Challenges & Considerations

**1. Complexity Management**
- More agents = more potential failure points
- Requires robust orchestration logic
- Need for clear error handling

**2. Communication Overhead**
- Agent-to-agent messaging adds latency
- Context sharing can be challenging
- Need for efficient protocols

**3. Cost Implications**
- Multiple model calls = higher costs
- Optimize for efficiency (not just quality)
- Balance cost vs. benefit per use case

**4. Consistency**
- Multiple agents may have style inconsistencies
- Need for style guides or shared parameters
- Editor agent helps maintain consistency

**5. Security & Privacy**
- Sensitive data shared across agents
- Need for secure communication channels
- Data handling policies per agent

**Best Practices:**
- Start simple: 2-3 agents, then scale
- Define clear interfaces between agents
- Implement robust error handling
- Monitor agent performance individually
- Iterate on orchestration based on results

#### 9.7 When to Use Sovereign Swarms

**Ideal For:**
- Complex, multi-domain tasks (business plans, research reports)
- Tasks requiring diverse expertise (technical + creative)
- High-stakes outputs requiring quality assurance
- Time-sensitive projects benefiting from parallel processing

**Not Ideal For:**
- Simple, single-task queries (still better with single prompt)
- Real-time interactions requiring speed (orchestration overhead)
- Limited budget scenarios (cost vs. benefit)

**Decision Framework:**
```
Start with Single Prompt
    ↓
Task becomes complex?
    → No: Continue with single prompt
    → Yes: Consider Prompt Chaining
            ↓
    Multiple domains?
        → No: Continue with chaining
        → Yes: Consider Sovereign Swarms
```

---

### 10. Agentic Workflows (`/workflows`) - NEW

**Purpose:** Detail the patterns and practices for orchestrating AI agents in production workflows. This section bridges the gap between understanding Sovereign Swarms and implementing them in real applications.

**Content Structure:**

#### 10.1 Understanding Agentic Workflows

**Definition:** An Agentic Workflow is a predefined sequence of actions, decisions, and communications that AI agents perform to accomplish a goal. Unlike ad-hoc prompting, workflows are structured, repeatable, and often automated.

**Key Properties:**
- **Sequence:** Defined order of operations
- **Conditions:** Branching logic based on outputs
- **State:** Persistent context across steps
- **Automation:** Little to no human intervention during execution

**Comparison with Traditional Automation:**
| Traditional Automation | Agentic Workflows |
|----------------------|-------------------|
| Rule-based (if/else) | AI-driven decisions |
| Static process | Adaptive process |
| Limited flexibility | Responds to context |
| Human-defined logic | Agent-determined actions |

#### 10.2 Core Workflow Patterns

**1. Sequential Workflow**
- Agents execute tasks one after another
- Output of one agent feeds into the next
- Example: Research → Analyze → Write → Edit

**2. Parallel Workflow**
- Multiple agents work simultaneously
- Results are synthesized at the end
- Example: Research Agent + Competitor Agent both running at once

**3. Hierarchical Workflow**
- Orchestrator delegates to sub-agents
- Sub-agents may delegate further
- Example: Project Manager → Team Lead → Specialists

**4. Conditional Workflow**
- Branch based on agent output
- Different paths for different scenarios
- Example: If sentiment is negative → Escalate Agent; else → Standard Response

**5. Feedback Loop Workflow**
- Output is cycled back for refinement
- Continues until quality threshold met
- Example: Write → Review → Revise → (if not good) → Review again → ...

#### 10.3 Building an Agentic Workflow

**Step 1: Define the Objective**
- Clear, measurable goal
- Success criteria established
- Constraints identified

**Step 2: Decompose into Tasks**
- Break goal into atomic tasks
- Identify dependencies
- Group related tasks

**Step 3: Assign Agents**
- Match tasks to agent capabilities
- Define agent roles and responsibilities
- Establish communication protocols

**Step 4: Design the Flow**
- Choose workflow pattern (sequential, parallel, etc.)
- Define decision points
- Set up error handling

**Step 5: Implement & Test**
- Code the orchestration logic
- Test with various inputs
- Iterate based on failures

**Step 6: Monitor & Optimize**
- Track performance metrics
- Identify bottlenecks
- Continuously improve

**Example Workflow: Automated Code Review**

```typescript
// Workflow Definition
const codeReviewWorkflow = {
  name: "Automated Code Review",
  goal: "Provide comprehensive code review with suggestions",

  agents: {
    parser: CodeParserAgent,
    securityScanner: SecurityAgent,
    performanceAnalyst: PerformanceAgent,
    reviewer: HumanReviewerAgent,
  },

  flow: [
    {
      agent: "parser",
      action: "parseCode",
      input: "sourceCode",
      output: "parsedStructure",
    },
    {
      agent: "securityScanner",
      action: "scanVulnerabilities",
      input: "parsedStructure",
      output: "securityReport",
    },
    {
      agent: "performanceAnalyst",
      action: "analyzePerformance",
      input: "parsedStructure",
      output: "performanceReport",
    },
    {
      agent: "reviewer",
      action: "compileReview",
      inputs: ["securityReport", "performanceReport"],
      output: "finalReview",
      conditions: {
        ifLowQuality: "requestHumanReview",
      },
    },
  ],
};
```

#### 10.4 Workflow Orchestration Tools

**1. LangGraph**
- Graph-based workflow definition
- Built on LangChain
- Supports complex branching and loops

**2. AutoGen (Microsoft)**
- Multi-agent conversation framework
- Built-in agent collaboration patterns
- Integration with Azure AI

**3. CrewAI**
- Role-based agent design
- Task delegation and coordination
- Focus on simplicity

**4. Custom Solutions**
- Build your own orchestrator
- Use workflow engines (Temporal, Airflow)
- Integration with existing systems

#### 10.5 Real-World Workflow Examples

**Example 1: Customer Support Automation**

```
User Query: "I can't log into my account"

Workflow:
1. Intent Detection Agent → Identifies "login issue"
2. Verification Agent → Checks account status
3. Resolution Agent → Provides solution based on issue type
4. Follow-up Agent → Ensures resolution + offers additional help

Outcome: Resolved ticket without human intervention
```

**Example 2: Content Creation Pipeline**

```
Topic: "The Future of Renewable Energy"

Workflow:
1. Research Agent → Gathers latest news, statistics, expert opinions
2. Trend Analyst → Identifies key trends and predictions
3. Writer Agent → Creates article based on research + trends
4. SEO Agent → Optimizes for search engines
5. Editor Agent → Final review and fact-check

Outcome: Comprehensive, optimized article in minutes
```

**Example 3: Data Analysis Pipeline**

```
Dataset: Sales data for Q1

Workflow:
1. Data Ingestion Agent → Loads and cleans data
2. Exploration Agent → Identifies patterns and anomalies
3. Modeling Agent → Runs statistical analysis
4. Visualization Agent → Creates charts and graphs
5. Insights Agent → Generates actionable recommendations

Outcome: Data-driven report ready for stakeholders
```

#### 10.6 Best Practices for Agentic Workflows

**1. Start with Clear Objectives**
- Ambiguous goals lead to chaotic workflows
- Define success metrics upfront

**2. Keep Tasks Atomic**
- Small, focused tasks are easier to manage
- Composable into larger workflows

**3. Implement Robust Error Handling**
- Every agent should handle failures gracefully
- Define fallback strategies

**4. Maintain State Properly**
- Use persistent memory for context
- Avoid losing important information

**5. Monitor Everything**
- Log agent activities and outputs
- Track performance metrics
- Identify optimization opportunities

**6. Plan for Scale**
- Design workflows that can handle more agents
- Consider queue systems for heavy loads

**7. Security First**
- Validate inputs at each step
- Secure agent communication
- Audit trail for compliance

**8. Document Thoroughly**
- Workflow diagrams
- Agent role descriptions
- Decision logic explanations

#### 10.7 Testing & Optimization

**Testing Strategies:**
- Unit tests for individual agents
- Integration tests for agent interactions
- End-to-end tests for complete workflows
- Chaos testing for failure scenarios

**Optimization Techniques:**
- Reduce unnecessary agent calls
- Implement caching for repeated tasks
- Use parallel processing where possible
- Optimize prompt templates per agent

**Metrics to Track:**
- Time to completion
- Cost per execution
- Error rate
- User satisfaction (if applicable)
- Quality of output

#### 10.8 The Future of Agentic Workflows

**Emerging Trends:**
1. **Self-Optimizing Workflows:** AI adjusts workflow based on performance
2. **Natural Language Workflow Definition:** Describe workflow in plain English, AI builds it
3. **Federated Swarms:** Multiple organizations' agents collaborating
4. **Autonomous Learning:** Agents improve workflows without human intervention

**Peak AI Vision:**
- Workflows that adapt in real-time
- Agents that learn from each other
- Seamless human-agent collaboration
- Fully autonomous operations for routine tasks

---

## Technical Implementation

### File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with navbar
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── basics/
│   │   └── page.tsx            # Basics content
│   ├── patterns/
│   │   ├── page.tsx            # Patterns overview
│   │   └── [slug]/             # Individual pattern pages (future)
│   ├── advanced/
│   │   └── page.tsx            # Advanced techniques
│   ├── examples/
│   │   └── page.tsx            # Real-world examples
│   ├── resources/
│   │   └── page.tsx            # Resource library
│   ├── faq/
│   │   └── page.tsx            # FAQ and troubleshooting
│   ├── playground/
│   │   └── page.tsx            # Interactive playground
│   ├── swarms/
│   │   └── page.tsx            # Sovereign Swarms content
│   └── workflows/
│       └── page.tsx            # Agentic Workflows content
├── components/
│   ├── Toolbar.tsx             # Navigation toolbar
│   ├── Sidebar.tsx             # Sidebar navigation
│   ├── Footer.tsx              # Footer component
│   ├── ContentCard.tsx         # Reusable content card
│   ├── Accordion.tsx           # Expandable sections
│   └── CodeBlock.tsx           # Syntax highlighted code
├── lib/
│   ├── constants.ts            # Theme colors, breakpoints
│   └── utils.ts                # Helper functions
└── types/
    └── index.ts                # TypeScript definitions
```

### Styling Approach

- **CSS Variables:** For theming (colors, spacing, typography)
- **Styled Components:** For component-level styling
- **Responsive Design:** Mobile-first with breakpoints at 320px, 400px, 600px, 768px, 1024px, 1200px
- **Dark Mode Support:** Future consideration with CSS variables

### Performance Considerations

- Lazy loading for heavy components
- Code splitting per route
- Optimized images with next/image
- Skeleton loading states

---

## Content Guidelines

### Writing Style
- **Beginner-friendly:** Avoid jargon, explain terms
- **Practical:** Focus on actionable advice
- **Code examples:** Every concept should have working examples
- **Visual aids:** Include diagrams, flowcharts, and screenshots

### Code Standards
- Use TypeScript for all code
- Include comments explaining complex logic
- Provide copy-paste ready snippets
- Test code before including

### Accessibility
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

---

## Future Enhancements (Phase 2)

- Interactive tutorials with progress tracking
- User accounts for saving prompts and workflows
- Community contributions section
- API documentation for integrating Prompted tools
- Mobile app with offline access

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-15 | Initial SPEC.md creation |
| 1.1 | 2025-01-20 | Added Sovereign Swarms and Agentic Workflows sections |

---

*This specification serves as the source of truth for Prompted 2.0 development. All content and design decisions should align with this document.*