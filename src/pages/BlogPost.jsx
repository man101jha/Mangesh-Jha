import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

/* ─── Blog content data ─────────────────────────────────────── */
export const blogPosts = [
  {
    id: 'prompt-engineering-masterclass',
    title: '🧠 Stop Talking to AI Like It\'s Google — Master Prompt Engineering',
    excerpt:
      'Most people treat AI like a search bar. The ones who treat it like a programmable brain? They get 10x better results. Learn Zero-shot, Few-shot, Chain-of-Thought, System Prompts, and the ReAct pattern — with real code and real examples.',
    date: 'May 1, 2026',
    readTime: '15 min read',
    tags: ['Prompt Engineering', 'LLM', 'AI', 'Gen AI', 'Tutorial'],
    heroImage: '/blog_prompt_hero.png',
    content: 'prompt-engineering',
  },
  {
    id: 'genai-agentic-roadmap',
    title: '🗺️ Study Roadmap — Gen AI & Agentic AI Engineer',
    excerpt:
      'A comprehensive 12-week self-study roadmap covering Transformers, Prompt Engineering, RAG, LangChain, Agentic AI, Fine-Tuning, and LLMOps — all with free resources.',
    date: 'Apr 30, 2026',
    readTime: '18 min read',
    tags: ['Gen AI', 'Agentic AI', 'LangChain', 'RAG', 'Roadmap'],
    heroImage: '/blog_hero.png',
    content: 'genai-roadmap',
  },
];

/* ─── Resource link component ───────────────────────────────── */
function ResourceLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="bp-resource-link">
      <span className="bp-resource-icon">↗</span>
      {children}
    </a>
  );
}

/* ─── Code block component ──────────────────────────────────── */
function CodeBlock({ code, language = 'python' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="bp-code-block">
      <div className="bp-code-header">
        <span className="bp-code-lang">{language}</span>
        <button className="bp-code-copy" onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="bp-code-pre"><code>{code}</code></pre>
    </div>
  );
}

/* ─── Technique card component ──────────────────────────────── */
function TechniqueCard({ number, emoji, title, tagline, accentColor, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bp-phase-card" style={{ '--phase-accent': accentColor }}>
      <div className="bp-phase-header" onClick={() => setOpen(o => !o)}>
        <div className="bp-phase-header-left">
          <span className="bp-phase-badge">TECHNIQUE {number}</span>
          <span className="bp-phase-emoji">{emoji}</span>
          <div>
            <div className="bp-phase-title">{title}</div>
            <div className="bp-phase-weeks">{tagline}</div>
          </div>
        </div>
        <span className={`bp-phase-chevron ${open ? 'bp-phase-chevron--open' : ''}`}>›</span>
      </div>
      {open && <div className="bp-phase-body">{children}</div>}
    </div>
  );
}

/* ─── Prompt Engineering blog content ──────────────────────── */
function PromptEngineeringContent() {
  return (
    <article className="bp-article">

      {/* ── Hero ── */}
      <div className="bp-hero-image-wrap">
        <img
          src="/blog_prompt_hero.png"
          alt="Prompt Engineering Masterclass"
          className="bp-hero-image"
          onError={e => { e.target.style.background = 'linear-gradient(135deg,#1e1b4b,#4c1d95)'; }}
        />
        <div className="bp-hero-overlay">
          <div className="bp-hero-badge">✍️ PROMPT ENGINEERING</div>
          <h1 className="bp-hero-title">Stop Talking to AI Like It's Google</h1>
          <p className="bp-hero-sub">Zero-shot · Few-shot · CoT · System Prompts · ReAct — with real code</p>
        </div>
      </div>

      {/* ── Meta ── */}
      <div className="bp-meta-bar">
        <div className="bp-meta-left">
          <div className="bp-avatar">MJ</div>
          <div>
            <div className="bp-author">Mangesh Jha</div>
            <div className="bp-meta-info">May 1, 2026 · 15 min read</div>
          </div>
        </div>
        <div className="bp-tags">
          {['Prompt Engineering', 'LLM', 'AI', 'Gen AI', 'Tutorial'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="bp-prose">
        <p>
          Here's a brutal truth: <strong>90% of people using AI are leaving 80% of its power on the table.</strong>{' '}
          They type a vague question, get a mediocre answer, and conclude "AI isn't that smart."
        </p>
        <p>
          The other 10%? They treat AI like a programmable collaborator. They give it a role, a format,
          a reasoning process, and real tools. They get results that feel like magic. The difference
          isn't the model — it's the <strong>prompt</strong>.
        </p>
        <p>
          In this post, I'll walk you through the 4 core prompt engineering techniques every AI
          practitioner must know — with real analogies, real Python code, and real examples you can
          copy-paste today.
        </p>

        <div className="bp-callout bp-callout--info">
          <span className="bp-callout-icon">🎯</span>
          <div>
            <strong>What you'll learn:</strong> Zero-shot & Few-shot prompting, Chain-of-Thought reasoning,
            System vs User prompts, and the ReAct pattern — the same techniques used by teams at
            Google, Anthropic, and OpenAI to build production AI systems.
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="bp-stats-row">
        {[
          { value: '4', unit: 'techniques', label: 'you need to master' },
          { value: '10x', unit: 'better', label: 'results with right prompts' },
          { value: '5', unit: 'code', label: 'examples you can use now' },
          { value: '0', unit: 'cost', label: 'all concepts are free' },
        ].map(s => (
          <div key={s.label} className="bp-stat-item">
            <div className="bp-stat-value">{s.value}<span className="bp-stat-unit"> {s.unit}</span></div>
            <div className="bp-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Techniques overview diagram ── */}
      <div className="bp-phase-image-wrap" style={{ margin: '8px 0 28px' }}>
        <img
          src="/blog_prompt_techniques.png"
          alt="Overview of 4 prompt engineering techniques: Zero-shot, Few-shot, CoT, ReAct"
          className="bp-phase-image"
          loading="lazy"
          style={{ borderRadius: '14px', maxHeight: '380px', objectFit: 'cover', width: '100%' }}
        />
        <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
          The 4 core prompt engineering techniques at a glance
        </p>
      </div>

      {/* ── Technique 1: Zero-shot & Few-shot ── */}
      <div className="bp-phases">

        <TechniqueCard
          number="1"
          emoji="🎯"
          title="Zero-shot & Few-shot Prompting"
          tagline="The difference between asking and teaching"
          accentColor="#3b82f6"
        >
          <div className="bp-phase-columns">
            <div>
              <div className="bp-col-label">💡 The Concept</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  <strong>Zero-shot:</strong> Ask directly. No examples. The model uses its training to figure out what you want.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  <strong>Few-shot:</strong> Show 2–5 examples of input→output, then ask. The model learns your exact format and style.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  Think of it like briefing a new employee. Zero-shot = "just do it." Few-shot = "here are 3 examples of how we do it here."
                </div>
              </div>
            </div>
            <div>
              <div className="bp-col-label">🌍 Real-world Use Cases</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />Zero-shot: Summarize articles, answer FAQs, translate text</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Few-shot: Classify support tickets, extract structured data, match your brand's writing tone</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Few-shot shines when the <em>format</em> of the output matters more than the content</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="bp-col-label">🐍 Code Example — Email Classifier</div>
            <CodeBlock language="python" code={`import anthropic

client = anthropic.Anthropic()

# ── Zero-shot: just ask ──────────────────────────────────────────
zero_shot_prompt = """
Classify this customer email as: complaint, question, or praise.

Email: "Your app keeps crashing every time I try to checkout!"
Category:"""

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=50,
    messages=[{"role": "user", "content": zero_shot_prompt}]
)
print("Zero-shot:", response.content[0].text)
# → complaint


# ── Few-shot: show examples first ───────────────────────────────
few_shot_prompt = """
Classify each email. Examples:

Email: "I love how fast your support responds!" → praise
Email: "How do I reset my password?" → question  
Email: "I've been charged twice for the same order." → complaint

Now classify this:
Email: "Your app keeps crashing every time I try to checkout!"
Category:"""

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=50,
    messages=[{"role": "user", "content": few_shot_prompt}]
)
print("Few-shot:", response.content[0].text)
# → complaint  (more consistent format, matches your label style)`} />
          </div>

          <div className="bp-callout bp-callout--tip" style={{ marginTop: '16px' }}>
            <span className="bp-callout-icon">💡</span>
            <div>
              <strong>Pro tip:</strong> When your few-shot examples are inconsistent or wrong,
              the model copies your mistakes. Always double-check your examples — they are the
              ground truth the model learns from.
            </div>
          </div>
        </TechniqueCard>

        {/* ── Technique 2: CoT ── */}
        <TechniqueCard
          number="2"
          emoji="🧩"
          title="Chain-of-Thought (CoT) Reasoning"
          tagline="Four magic words that cut AI errors in half"
          accentColor="#8b5cf6"
        >
          <div className="bp-phase-columns">
            <div>
              <div className="bp-col-label">💡 The Concept</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  LLMs generate text token-by-token, left to right. When you force intermediate reasoning steps,
                  each step becomes context — making the final answer far more accurate.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  <strong>Zero-shot CoT:</strong> Add <em>"Let's think step by step"</em> — that's it. Google Research showed this single phrase dramatically reduces errors on math and logic tasks.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  <strong>Few-shot CoT:</strong> Include the full reasoning chain in your examples, not just the final answer.
                </div>
              </div>
            </div>
            <div>
              <div className="bp-col-label">🌍 Where CoT Wins</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />Multi-step maths &amp; logic puzzles</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Medical or legal reasoning with multiple conditions</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Code debugging — "explain what each line does then find the bug"</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Financial analysis with multiple variables</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Any task where the answer depends on <em>order of reasoning</em></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="bp-col-label">🐍 Code Example — Word Problem Solver</div>
            <CodeBlock language="python" code={`import anthropic

client = anthropic.Anthropic()

problem = """
A store sells apples for ₹12 each and mangoes for ₹25 each.
Priya buys 5 apples and some mangoes and pays ₹185 total.
How many mangoes did she buy?
"""

# ── Without CoT ─────────────────────────────────────────────────
response_direct = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=100,
    messages=[{"role": "user", "content": problem}]
)
print("Direct:", response_direct.content[0].text)
# Might say: "5 mangoes" (wrong, skipped reasoning)


# ── With Zero-shot CoT ───────────────────────────────────────────
response_cot = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=300,
    messages=[{
        "role": "user",
        "content": problem + "\\nLet's think step by step."
    }]
)
print("CoT:", response_cot.content[0].text)
# Step 1: Cost of 5 apples = 5 × ₹12 = ₹60
# Step 2: Remaining amount = ₹185 - ₹60 = ₹125
# Step 3: Number of mangoes = ₹125 ÷ ₹25 = 5
# Answer: 5 mangoes  ✓


# ── Few-shot CoT: teach the reasoning pattern ────────────────────
few_shot_cot = """
Q: A box has 3 red and 5 blue balls. I remove 2 red. How many balls remain?
A: Start: 3 red + 5 blue = 8 total. Remove 2 red → 1 red + 5 blue = 6 balls.

Q: A shop has 20 shirts. They sell 7 and get 12 more. How many now?
A: Start: 20. Sold 7 → 13 left. Add 12 → 25 shirts.

Q: {problem}
A:""".format(problem=problem.strip())

response_few_cot = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=300,
    messages=[{"role": "user", "content": few_shot_cot}]
)
print("Few-shot CoT:", response_few_cot.content[0].text)`} />
          </div>

          <div className="bp-callout bp-callout--info" style={{ marginTop: '16px' }}>
            <span className="bp-callout-icon">⚠️</span>
            <div>
              <strong>Don't overuse CoT.</strong> Asking "What's the capital of France? Let's think
              step by step" is overkill and wastes tokens. Reserve CoT for genuinely complex,
              multi-step problems.
            </div>
          </div>
        </TechniqueCard>

        {/* ── Technique 3: System vs User ── */}
        <TechniqueCard
          number="3"
          emoji="🎛️"
          title="System vs User Prompts"
          tagline="The architecture every AI product is built on"
          accentColor="#f59e0b"
        >
          <div className="bp-phase-columns">
            <div>
              <div className="bp-col-label">💡 The Concept</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  <strong>System prompt</strong> = the standing instructions you give the AI before any conversation.
                  Think of it as the job description you hand a new employee on Day 1.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  <strong>User prompt</strong> = what the actual end user types in real time. The live task.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  The model sees both — system first, then user. System prompt shapes
                  <em> everything</em> that follows, silently and persistently.
                </div>
              </div>
            </div>
            <div>
              <div className="bp-col-label">🌍 Real-world Applications</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />Customer support bots: system defines company tone, topic restrictions, escalation rules</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Multi-tenant SaaS: same base model, different system prompt per client = different "personalities"</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Coding assistants: system sets language, style guide, response format</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />Claude's own personality is defined by Anthropic's system-level instructions</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="bp-col-label">🐍 Code Example — Building a Focused Customer Bot</div>
            <CodeBlock language="python" code={`import anthropic

client = anthropic.Anthropic()

# ── System prompt: the "job description" ────────────────────────
SYSTEM_PROMPT = """You are Aria, a friendly customer support assistant for FreshCart,
an online grocery delivery app.

Rules you must always follow:
- Only answer questions about FreshCart — orders, delivery, products, payments.
- If asked anything unrelated (news, coding, personal advice), politely redirect.
- Always address the customer by name if they introduce themselves.
- Keep responses under 3 sentences unless the customer needs step-by-step help.
- Escalate to human support if the customer is frustrated or mentions a refund > ₹500.
- Never mention competitor apps.

Tone: Warm, professional, solution-focused."""

# ── Simulate a conversation ──────────────────────────────────────
conversation = [
    {"role": "user", "content": "Hi, I'm Riya. My order hasn't arrived in 3 hours!"},
]

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    system=SYSTEM_PROMPT,            # ← system prompt here
    max_tokens=300,
    messages=conversation            # ← user prompt(s) here
)
print(response.content[0].text)
# → "Hi Riya! I'm so sorry about the delay — that's not the experience we want for you.
#    Let me check your order status right now. Could you share your order ID?"


# ── What happens without a system prompt? ───────────────────────
response_no_system = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=300,
    messages=[{
        "role": "user",
        "content": "Hi, I'm Riya. My order hasn't arrived in 3 hours!"
    }]
)
print(response_no_system.content[0].text)
# → Generic helpful response — no Aria persona, no FreshCart context,
#   no business rules. Just a default AI assistant.`} />
          </div>

          <div className="bp-callout bp-callout--tip" style={{ marginTop: '16px' }}>
            <span className="bp-callout-icon">🔐</span>
            <div>
              <strong>Security note:</strong> System prompts are not truly secret. Determined users
              can attempt to extract them via prompt injection. Never store API keys, passwords,
              or truly sensitive data in a system prompt.
            </div>
          </div>
        </TechniqueCard>

        {/* ── Technique 4: ReAct ── */}
        <TechniqueCard
          number="4"
          emoji="🤖"
          title="ReAct Pattern — Reasoning + Acting"
          tagline="How AI agents think and do in the real world"
          accentColor="#ec4899"
        >
          <div className="bp-phase-columns">
            <div>
              <div className="bp-col-label">💡 The Concept</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  A plain LLM answers from memory. ReAct gives it the ability to <em>take actions</em> —
                  search the web, call APIs, run code — and reason about what it finds.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  The loop: <strong>Thought</strong> → <strong>Action</strong> → <strong>Observation</strong> → repeat until done.
                  Like a detective who alternates between thinking and investigating.
                </div>
                <div className="bp-topic-item"><span className="bp-topic-dot" />
                  This is the heartbeat of LangChain agents, AutoGPT, Perplexity, and Claude's computer use.
                </div>
              </div>
            </div>
            <div>
              <div className="bp-col-label">🌍 Where ReAct Powers Real Products</div>
              <div className="bp-topic-list">
                <div className="bp-topic-item"><span className="bp-topic-dot" /><strong>Perplexity AI</strong> — searches the web before every answer</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" /><strong>ChatGPT Plugins</strong> — calls APIs for flights, weather, shopping mid-conversation</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" /><strong>GitHub Copilot</strong> — reads your codebase before suggesting a fix</div>
                <div className="bp-topic-item"><span className="bp-topic-dot" /><strong>LangChain Agents</strong> — chains multiple tool calls for complex multi-step tasks</div>
              </div>
            </div>
          </div>

          {/* ── ReAct loop diagram ── */}
          <div className="bp-phase-image-wrap" style={{ margin: '20px 0 0' }}>
            <img
              src="/blog_react_loop.png"
              alt="ReAct loop: Thought → Action → Observation cycle diagram"
              className="bp-phase-image"
              loading="lazy"
              style={{ borderRadius: '12px', maxHeight: '320px', objectFit: 'cover', width: '100%' }}
            />
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
              The ReAct loop: Thought → Action → Observation, repeated until the task is complete
            </p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="bp-col-label">🐍 Code Example — ReAct Agent with Calculator + Search Tools</div>
            <CodeBlock language="python" code={`import anthropic
import json

client = anthropic.Anthropic()

# ── Define tools the agent can call ─────────────────────────────
tools = [
    {
        "name": "calculator",
        "description": "Performs arithmetic. Use for any maths calculation.",
        "input_schema": {
            "type": "object",
            "properties": {
                "expression": {
                    "type": "string",
                    "description": "Math expression to evaluate, e.g. '(120 * 0.18) + 50'"
                }
            },
            "required": ["expression"]
        }
    },
    {
        "name": "get_product_price",
        "description": "Looks up the current price of a product in our store.",
        "input_schema": {
            "type": "object",
            "properties": {
                "product_name": {"type": "string"}
            },
            "required": ["product_name"]
        }
    }
]

# ── Mock tool execution (your real tools would call APIs/DBs) ────
def execute_tool(tool_name, tool_input):
    if tool_name == "calculator":
        try:
            result = eval(tool_input["expression"])  # use safer eval in production!
            return str(result)
        except Exception as e:
            return f"Error: {e}"
    elif tool_name == "get_product_price":
        prices = {"laptop": 75000, "mouse": 1200, "keyboard": 3500}
        product = tool_input["product_name"].lower()
        return str(prices.get(product, "Product not found"))

# ── ReAct loop ───────────────────────────────────────────────────
def react_agent(user_question):
    messages = [{"role": "user", "content": user_question}]
    print(f"\\n🧑 User: {user_question}\\n")
    
    for step in range(5):  # max 5 steps to prevent infinite loops
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=1000,
            tools=tools,
            messages=messages
        )
        
        # ── Final answer reached ─────────────────────────────────
        if response.stop_reason == "end_turn":
            final = next(b.text for b in response.content if b.type == "text")
            print(f"✅ Final Answer: {final}")
            return final
        
        # ── Agent wants to use a tool ────────────────────────────
        if response.stop_reason == "tool_use":
            messages.append({"role": "assistant", "content": response.content})
            
            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    print(f"💭 Thought: I need to call {block.name}")
                    print(f"⚡ Action: {block.name}({json.dumps(block.input)})")
                    
                    result = execute_tool(block.name, block.input)
                    print(f"👁️  Observation: {result}\\n")
                    
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    })
            
            messages.append({"role": "user", "content": tool_results})

# ── Run it! ──────────────────────────────────────────────────────
react_agent(
    "What is the total cost of buying 2 laptops and 3 keyboards, "
    "including 18% GST?"
)

# Output:
# 💭 Thought: I need to call get_product_price
# ⚡ Action: get_product_price({"product_name": "laptop"})
# 👁️  Observation: 75000
#
# 💭 Thought: I need to call get_product_price  
# ⚡ Action: get_product_price({"product_name": "keyboard"})
# 👁️  Observation: 3500
#
# 💭 Thought: I need to call calculator
# ⚡ Action: calculator({"expression": "(2*75000 + 3*3500) * 1.18"})
# 👁️  Observation: 189630.0
#
# ✅ Final Answer: The total cost is ₹1,89,630 (including 18% GST).`} />
          </div>

          <div className="bp-callout bp-callout--tip" style={{ marginTop: '16px' }}>
            <span className="bp-callout-icon">🚨</span>
            <div>
              <strong>Always set a step limit.</strong> Without a maximum iteration count,
              a confused agent can loop forever — burning tokens and your API budget.
              5–10 steps is usually more than enough for real-world tasks.
            </div>
          </div>
        </TechniqueCard>
      </div>

      {/* ── Putting it all together ── */}
      <div className="bp-prose bp-prose--final">
        <h2>🏗️ Putting It All Together — A Real AI Product</h2>
        <p>
          The magic happens when you <strong>combine all four techniques</strong>. Here's what a
          production-grade AI customer support agent looks like using everything you just learned:
        </p>

        <CodeBlock language="python" code={`import anthropic

client = anthropic.Anthropic()

# System prompt defines the AI's persona + rules (Technique 3)
SYSTEM = """You are Aria, FreshCart's AI support agent.
Only answer FreshCart-related questions. Be warm and concise.
When a customer asks about an order status, ALWAYS use the track_order tool."""

# Tools enable real-world actions (Technique 4 - ReAct)
tools = [{
    "name": "track_order",
    "description": "Tracks a FreshCart order by order ID.",
    "input_schema": {
        "type": "object",
        "properties": {"order_id": {"type": "string"}},
        "required": ["order_id"]
    }
}]

# Few-shot examples in the conversation history (Technique 1)
conversation = [
    {"role": "user", "content": "Order #FC1234 where is it?"},
    {"role": "assistant", "content": "Let me track that for you right now!"},
    # ... (agent calls track_order tool, gets result, responds)
    {"role": "user", "content": "My order #FC9981 hasn't arrived. Let's think through what could have happened."}
    # ↑ CoT trigger embedded in user message (Technique 2)
]

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    system=SYSTEM,          # Technique 3: System prompt
    tools=tools,            # Technique 4: ReAct tools
    max_tokens=500,
    messages=conversation   # Techniques 1+2: Few-shot history + CoT
)

# The agent will now:
# 1. Reason about what information it needs (CoT)
# 2. Call track_order tool (ReAct action)
# 3. Observe the result
# 4. Respond in Aria's persona (System prompt)
# 5. Match the conversation style from examples (Few-shot)`} />

        <div className="bp-callout bp-callout--info" style={{ marginTop: '20px' }}>
          <span className="bp-callout-icon">🗺️</span>
          <div>
            <strong>This is Phase 2 of the Gen AI Engineer Roadmap.</strong> Once you've mastered
            prompt engineering, the next step is RAG (retrieval-augmented generation) — giving your
            AI access to your own documents and databases.{' '}
            <a href="/blogs/genai-agentic-roadmap" className="bp-inline-link">See the full 12-week roadmap →</a>
          </div>
        </div>

        <h2>🏁 Final Thoughts</h2>
        <p>
          Prompt engineering isn't a hack or a workaround — it's the <strong>interface layer
          between human intent and machine capability</strong>. The engineers who master it don't
          just get better answers. They build entirely new products.
        </p>
        <p>
          Start small: pick one technique today. Add <em>"Let's think step by step"</em> to your
          next complex prompt. Write a system prompt for a chatbot you're building. Give the model
          2–3 examples before asking for a classification. Each one will immediately improve your results.
        </p>

        <div className="bp-callout bp-callout--tip">
          <span className="bp-callout-icon">🚀</span>
          <div>
            <strong>Your challenge:</strong> Take any AI task you use regularly and rewrite the
            prompt using all four techniques — Few-shot examples, CoT trigger, a clear system
            instruction, and at least one tool. Share what you build!
          </div>
        </div>

        <div className="bp-divider" />

        <p className="bp-closing">
          Found this useful? Share it with someone learning AI.
          Building something with these techniques?{' '}
          <a href="https://www.linkedin.com/in/mangesh-jha" target="_blank" rel="noopener noreferrer" className="bp-inline-link">
            Tag me on LinkedIn
          </a>{' '}— I'd love to see what you create.
        </p>
      </div>
    </article>
  );
}

/* ─── Phase card component ──────────────────────────────────── */
function PhaseCard({ phase, emoji, title, weeks, topics, resources, image, imageAlt, accentColor }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bp-phase-card" style={{ '--phase-accent': accentColor }}>
      <div className="bp-phase-header" onClick={() => setOpen(o => !o)}>
        <div className="bp-phase-header-left">
          <span className="bp-phase-badge">PHASE {phase}</span>
          <span className="bp-phase-emoji">{emoji}</span>
          <div>
            <div className="bp-phase-title">{title}</div>
            <div className="bp-phase-weeks">⏱️ {weeks}</div>
          </div>
        </div>
        <span className={`bp-phase-chevron ${open ? 'bp-phase-chevron--open' : ''}`}>›</span>
      </div>

      {open && (
        <div className="bp-phase-body">
          {image && (
            <div className="bp-phase-image-wrap">
              <img src={image} alt={imageAlt} className="bp-phase-image" loading="lazy" />
            </div>
          )}
          <div className="bp-phase-columns">
            <div className="bp-phase-col">
              <div className="bp-col-label">📚 Topics to Cover</div>
              <ul className="bp-topic-list">
                {topics.map((t, i) => (
                  <li key={i} className="bp-topic-item">
                    <span className="bp-topic-dot" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bp-phase-col">
              <div className="bp-col-label">🔗 Free Resources</div>
              <div className="bp-resource-list">
                {resources.map((r, i) => (
                  <div key={i} className="bp-resource-item">
                    <ResourceLink href={r.url}>{r.label}</ResourceLink>
                    {r.desc && <p className="bp-resource-desc">{r.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Progress tracker ──────────────────────────────────────── */
function RoadmapProgress() {
  const phases = [
    { n: 1, label: 'Foundations' },
    { n: 2, label: 'Prompting' },
    { n: 3, label: 'RAG' },
    { n: 4, label: 'LangChain' },
    { n: 5, label: 'Agents' },
    { n: 6, label: 'Fine-Tune' },
    { n: 7, label: 'LLMOps' },
  ];
  return (
    <div className="bp-progress-bar-wrap">
      {phases.map((p, i) => (
        <React.Fragment key={p.n}>
          <div className="bp-progress-step">
            <div className="bp-progress-dot">{p.n}</div>
            <div className="bp-progress-label">{p.label}</div>
          </div>
          {i < phases.length - 1 && <div className="bp-progress-line" />}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─── Gen AI roadmap blog content ───────────────────────────── */
function GenAIRoadmapContent() {
  const phases = [
    {
      phase: 1, emoji: '🧠', title: 'Foundations', weeks: 'Week 1–2', accentColor: '#3b82f6',
      image: '/blog_phase1.png', imageAlt: 'Transformer architecture',
      topics: ['Python basics (if needed) + REST APIs', 'How Transformers work — attention & self-attention', 'Tokens, embeddings, and context windows', 'Temperature, Top-P, and sampling strategies'],
      resources: [
        { label: '3Blue1Brown — Visual Intro to Transformers (YouTube)', url: 'https://www.youtube.com/watch?v=wjZofJX0v4M', desc: 'Perfect visual introduction for complete beginners.' },
        { label: "Andrej Karpathy's nanoGPT (YouTube, 2hr)", url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', desc: 'Reimplement GPT from scratch — best for programmers.' },
        { label: 'Hugging Face LLM Course (free)', url: 'https://huggingface.co/learn/llm-course', desc: 'Teaches LLMs and NLP using Transformers, Datasets, and Tokenizers.' },
      ],
    },
    {
      phase: 2, emoji: '✍️', title: 'Prompt Engineering', weeks: 'Week 3', accentColor: '#8b5cf6',
      image: null, imageAlt: '',
      topics: ['Zero-shot & Few-shot prompting', 'Chain-of-Thought (CoT) reasoning', 'System vs User prompts', 'ReAct pattern basics'],
      resources: [
        { label: 'Anthropic Prompt Engineering Docs', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', desc: 'Official, comprehensive guide to effective prompting techniques.' },
        { label: 'DeepLearning.AI — ChatGPT Prompt Engineering for Developers', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', desc: 'Free short course by Andrew Ng & OpenAI.' },
        { label: 'Learn Prompting', url: 'https://learnprompting.org', desc: 'Completely free, community-driven prompting resource.' },
      ],
    },
    {
      phase: 3, emoji: '🗄️', title: 'RAG — Retrieval-Augmented Generation', weeks: 'Week 4–5', accentColor: '#f59e0b',
      image: '/blog_phase3.png', imageAlt: 'RAG pipeline diagram',
      topics: ['RAG pipeline end-to-end architecture', 'Vector databases — FAISS, Chroma, Pinecone', 'Chunking strategies & embedding models', 'Hybrid search and hallucination reduction'],
      resources: [
        { label: 'IBM — Fundamentals of AI Agents using RAG and LangChain (Coursera)', url: 'https://www.coursera.org/learn/fundamentals-of-ai-agents-using-rag-and-langchain', desc: 'Covers RAG, prompt engineering, FAISS vector search, and LangChain. Free to audit.' },
        { label: 'LangChain RAG Docs + Tutorials', url: 'https://python.langchain.com/docs/tutorials/rag/', desc: 'Official LangChain RAG documentation and walkthroughs.' },
        { label: 'mlabonne/llm-course on GitHub', url: 'https://github.com/mlabonne/llm-course', desc: 'Curated list of vector DB comparisons, RAG retrievers, and hybrid retrieval resources.' },
      ],
    },
    {
      phase: 4, emoji: '⛓️', title: 'LangChain', weeks: 'Week 6–7', accentColor: '#10b981',
      image: null, imageAlt: '',
      topics: ['Chains, prompt templates & LCEL', 'Memory types — buffer, summary, vector', 'Document loaders & output parsers', 'Tool integration with external APIs'],
      resources: [
        { label: 'LangChain Official Docs', url: 'https://python.langchain.com', desc: 'Free, best-in-class tutorials with practical examples.' },
        { label: 'LangChain YouTube Channel', url: 'https://www.youtube.com/@LangChain', desc: 'Free walkthroughs covering all LangChain features.' },
        { label: 'IBM Agentic AI with LangChain & LangGraph (Coursera)', url: 'https://www.coursera.org/learn/ai-agents-langchain-langgraph', desc: 'Covers building agentic AI systems with memory and conditional logic. Free to audit.' },
      ],
    },
    {
      phase: 5, emoji: '🤖', title: 'Agentic AI & LangGraph', weeks: 'Week 8–9', accentColor: '#ec4899',
      image: '/blog_phase5.png', imageAlt: 'LangGraph state machine diagram',
      topics: ['Agent components — tools, planning, memory', 'ReAct agents and Plan-and-Solve strategies', 'LangGraph — nodes, edges, state machines', 'Human-in-the-loop & checkpointing', 'Multi-agent orchestration (CrewAI / AutoGen)'],
      resources: [
        { label: 'LangChain Academy — Intro to LangGraph (free)', url: 'https://academy.langchain.com/courses/intro-to-langgraph', desc: 'Official course covering state, memory, human-in-the-loop, and more.' },
        { label: 'DataCamp — 30 Agentic AI Interview Q&A (free)', url: 'https://www.datacamp.com/blog/agentic-ai-interview-questions', desc: 'Free blog covering real interview questions on agentic AI.' },
        { label: 'Analytics Vidhya — Agentic AI Interview Questions', url: 'https://www.analyticsvidhya.com/blog/2024/agentic-ai-interview-questions/', desc: 'Covers LangGraph, LlamaIndex, CrewAI, AutoGen, DSPy with detailed answers.' },
      ],
    },
    {
      phase: 6, emoji: '🔧', title: 'Fine-Tuning & Model Optimization', weeks: 'Week 10', accentColor: '#f97316',
      image: null, imageAlt: '',
      topics: ['Fine-tuning vs RAG — when to use which', 'LoRA and QLoRA (PEFT)', 'Quantization basics (INT8, GPTQ, GGUF)', 'Hugging Face Trainer API'],
      resources: [
        { label: 'Hugging Face LLM Course — Chapters 5–8 (free)', url: 'https://huggingface.co/learn/llm-course', desc: 'Covers fine-tuning, datasets, tokenizers, and classic NLP/LLM tasks.' },
        { label: "Andrej Karpathy — Let's Build GPT (YouTube)", url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', desc: 'Deep dive into GPT internals and training from scratch.' },
        { label: 'Neural Breakdown with AVB — Fine-tuning Llama (YouTube)', url: 'https://www.youtube.com/@NeuralBreakdownwithAVB', desc: 'Step-by-step fine-tuning of Llama using Hugging Face, PyTorch, LoRA, and PEFT adapters.' },
      ],
    },
    {
      phase: 7, emoji: '📡', title: 'System Design + LLMOps', weeks: 'Week 11–12', accentColor: '#6366f1',
      image: null, imageAlt: '',
      topics: ['Designing RAG systems at scale', 'LangSmith for tracing & debugging', 'Evaluation metrics — RAGAS, BLEU, ROUGE', 'Guardrails, prompt injection, safety filters', 'Monitoring agents in production'],
      resources: [
        { label: 'IGotAnOffer — GenAI System Design Guide (free)', url: 'https://igotanoffer.com/blogs/tech/ai-system-design', desc: 'Covers real interview questions from Google, Apple, OpenAI with step-by-step prep plan.' },
        { label: 'LangSmith Docs', url: 'https://docs.smith.langchain.com', desc: 'Official docs for tracing, evaluating, and debugging LLM applications.' },
        { label: 'RAGAS Docs', url: 'https://docs.ragas.io', desc: 'Free evaluation framework for RAG pipelines — metrics for faithfulness, relevance, and more.' },
      ],
    },
  ];

  return (
    <article className="bp-article">
      <div className="bp-hero-image-wrap">
        <img src="/blog_hero.png" alt="Gen AI & Agentic AI Engineer Roadmap" className="bp-hero-image" />
        <div className="bp-hero-overlay">
          <div className="bp-hero-badge">🗺️ STUDY ROADMAP</div>
          <h1 className="bp-hero-title">Gen AI & Agentic AI Engineer</h1>
          <p className="bp-hero-sub">12 weeks · 7 phases · 100% free resources</p>
        </div>
      </div>
      <div className="bp-meta-bar">
        <div className="bp-meta-left">
          <div className="bp-avatar">MJ</div>
          <div>
            <div className="bp-author">Mangesh Jha</div>
            <div className="bp-meta-info">Apr 30, 2026 · 18 min read</div>
          </div>
        </div>
        <div className="bp-tags">
          {['Gen AI', 'Agentic AI', 'LangChain', 'RAG', 'Roadmap'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="bp-prose">
        <p>Breaking into <strong>Generative AI and Agentic AI engineering</strong> doesn't require a PhD or an expensive bootcamp. It requires a structured plan and the right free resources. This roadmap distills everything I've learned into a clear <strong>12-week study plan</strong> — from understanding how Transformers work all the way to deploying production-grade agentic systems.</p>
        <p>Whether you're a software engineer pivoting into AI, a data scientist wanting to master LLMs, or a builder who wants to ship AI products — this roadmap is designed for <em>you</em>.</p>
        <div className="bp-callout bp-callout--info">
          <span className="bp-callout-icon">💡</span>
          <div><strong>How to use this roadmap:</strong> Each phase builds on the previous one. The phases are collapsible — click any phase header to expand or collapse it. Aim for 2–3 hours of focused study per day. Free resources are all you need.</div>
        </div>
      </div>
      <div className="bp-section">
        <div className="bp-section-label">YOUR JOURNEY AT A GLANCE</div>
        <RoadmapProgress />
      </div>
      <div className="bp-stats-row">
        {[
          { value: '12', unit: 'weeks', label: 'structured learning' },
          { value: '7', unit: 'phases', label: 'progressive modules' },
          { value: '20+', unit: 'resources', label: 'all 100% free' },
          { value: '∞', unit: 'potential', label: 'if you stay consistent' },
        ].map(s => (
          <div key={s.label} className="bp-stat-item">
            <div className="bp-stat-value">{s.value}<span className="bp-stat-unit">{s.unit}</span></div>
            <div className="bp-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bp-phases">
        {phases.map(p => (<PhaseCard key={p.phase} {...p} />))}
      </div>
      <div className="bp-prose bp-prose--final">
        <h2>🏁 Final Thoughts</h2>
        <p>The Gen AI landscape moves fast, but the <strong>core fundamentals stay constant</strong>. Master attention mechanisms, understand why RAG beats fine-tuning for most use cases, get comfortable with LangChain, and build your first real agentic system in LangGraph. That's the stack that gets you hired in 2025–2026.</p>
        <p>The most important thing? <strong>Build while you learn.</strong> Every phase has a practical project baked in. Don't just consume content — ship something.</p>
        <div className="bp-callout bp-callout--tip">
          <span className="bp-callout-icon">🚀</span>
          <div><strong>Pro tip:</strong> After Phase 5 (Agentic AI), try building a real agent that solves a problem you personally face. Your portfolio will speak louder than any certificate.</div>
        </div>
        <div className="bp-divider" />
        <p className="bp-closing">Found this roadmap helpful? Share it with someone who's trying to break into AI. Have questions or suggestions? Reach out via{' '}<a href="https://www.linkedin.com/in/mangesh-jha" target="_blank" rel="noopener noreferrer" className="bp-inline-link">LinkedIn</a>.</p>
      </div>
    </article>
  );
}

/* ─── Blog Post Page ────────────────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(b => b.id === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="page-content">
        <h1 className="page-title">Blog not found</h1>
        <Link to="/blogs" className="bp-back-link">← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="page-content bp-page">
      <Link to="/blogs" className="bp-back-link">← Back to Blogs</Link>
      {slug === 'prompt-engineering-masterclass' && <PromptEngineeringContent />}
      {slug === 'genai-agentic-roadmap' && <GenAIRoadmapContent />}
    </div>
  );
}
