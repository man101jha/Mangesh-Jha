import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

/* ─── Blog content data ─────────────────────────────────────── */
export const blogPosts = [
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

/* ─── The actual Gen AI roadmap blog content ─────────────────── */
function GenAIRoadmapContent() {
  const phases = [
    {
      phase: 1,
      emoji: '🧠',
      title: 'Foundations',
      weeks: 'Week 1–2',
      accentColor: '#3b82f6',
      image: '/blog_phase1.png',
      imageAlt: 'Transformer architecture with attention mechanism and token embeddings',
      topics: [
        'Python basics (if needed) + REST APIs',
        'How Transformers work — attention & self-attention',
        'Tokens, embeddings, and context windows',
        'Temperature, Top-P, and sampling strategies',
      ],
      resources: [
        {
          label: '3Blue1Brown — Visual Intro to Transformers (YouTube)',
          url: 'https://www.youtube.com/watch?v=wjZofJX0v4M',
          desc: 'Perfect visual introduction for complete beginners.',
        },
        {
          label: "Andrej Karpathy's nanoGPT (YouTube, 2hr)",
          url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
          desc: 'Reimplement GPT from scratch — best for programmers.',
        },
        {
          label: 'Hugging Face LLM Course (free)',
          url: 'https://huggingface.co/learn/llm-course',
          desc: 'Teaches LLMs and NLP using Transformers, Datasets, and Tokenizers — completely free.',
        },
      ],
    },
    {
      phase: 2,
      emoji: '✍️',
      title: 'Prompt Engineering',
      weeks: 'Week 3',
      accentColor: '#8b5cf6',
      image: null,
      imageAlt: '',
      topics: [
        'Zero-shot & Few-shot prompting',
        'Chain-of-Thought (CoT) reasoning',
        'System vs User prompts',
        'ReAct pattern basics',
      ],
      resources: [
        {
          label: 'Anthropic Prompt Engineering Docs',
          url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
          desc: 'Official, comprehensive guide to effective prompting techniques.',
        },
        {
          label: 'DeepLearning.AI — ChatGPT Prompt Engineering for Developers',
          url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/',
          desc: 'Free short course by Andrew Ng & OpenAI.',
        },
        {
          label: 'Learn Prompting',
          url: 'https://learnprompting.org',
          desc: 'Completely free, community-driven prompting resource.',
        },
      ],
    },
    {
      phase: 3,
      emoji: '🗄️',
      title: 'RAG — Retrieval-Augmented Generation',
      weeks: 'Week 4–5',
      accentColor: '#f59e0b',
      image: '/blog_phase3.png',
      imageAlt: 'RAG pipeline: documents → vector database → LLM retrieval and generation',
      topics: [
        'RAG pipeline end-to-end architecture',
        'Vector databases — FAISS, Chroma, Pinecone',
        'Chunking strategies & embedding models',
        'Hybrid search and hallucination reduction',
      ],
      resources: [
        {
          label: 'IBM — Fundamentals of AI Agents using RAG and LangChain (Coursera)',
          url: 'https://www.coursera.org/learn/fundamentals-of-ai-agents-using-rag-and-langchain',
          desc: 'Covers RAG, prompt engineering, FAISS vector search, and LangChain integration in ~8 hours. Free to audit.',
        },
        {
          label: 'LangChain RAG Docs + Tutorials',
          url: 'https://python.langchain.com/docs/tutorials/rag/',
          desc: 'Official LangChain RAG documentation and walkthroughs.',
        },
        {
          label: 'mlabonne/llm-course on GitHub',
          url: 'https://github.com/mlabonne/llm-course',
          desc: 'Curated list of vector DB comparisons, RAG retrievers, query rewriters, and hybrid retrieval resources.',
        },
      ],
    },
    {
      phase: 4,
      emoji: '⛓️',
      title: 'LangChain',
      weeks: 'Week 6–7',
      accentColor: '#10b981',
      image: null,
      imageAlt: '',
      topics: [
        'Chains, prompt templates & LCEL',
        'Memory types — buffer, summary, vector',
        'Document loaders & output parsers',
        'Tool integration with external APIs',
      ],
      resources: [
        {
          label: 'LangChain Official Docs',
          url: 'https://python.langchain.com',
          desc: 'Free, best-in-class tutorials with practical examples.',
        },
        {
          label: 'LangChain YouTube Channel',
          url: 'https://www.youtube.com/@LangChain',
          desc: 'Free walkthroughs covering all LangChain features.',
        },
        {
          label: 'IBM Agentic AI with LangChain & LangGraph (Coursera)',
          url: 'https://www.coursera.org/learn/ai-agents-langchain-langgraph',
          desc: 'Covers building agentic AI systems with memory, iteration, and conditional logic. Free to audit.',
        },
      ],
    },
    {
      phase: 5,
      emoji: '🤖',
      title: 'Agentic AI & LangGraph',
      weeks: 'Week 8–9',
      accentColor: '#ec4899',
      image: '/blog_phase5.png',
      imageAlt: 'LangGraph state machine: nodes, edges, human-in-the-loop, multi-agent orchestration',
      topics: [
        'Agent components — tools, planning, memory',
        'ReAct agents and Plan-and-Solve strategies',
        'LangGraph — nodes, edges, state machines',
        'Human-in-the-loop & checkpointing',
        'Multi-agent orchestration (CrewAI / AutoGen)',
      ],
      resources: [
        {
          label: 'LangChain Academy — Intro to LangGraph (free)',
          url: 'https://academy.langchain.com/courses/intro-to-langgraph',
          desc: 'Official course covering state, memory, human-in-the-loop, and more — directly from the LangGraph team.',
        },
        {
          label: 'DataCamp — 30 Agentic AI Interview Q&A (free)',
          url: 'https://www.datacamp.com/blog/agentic-ai-interview-questions',
          desc: 'Free blog covering real interview questions on agentic AI.',
        },
        {
          label: 'Analytics Vidhya — Agentic AI Interview Questions',
          url: 'https://www.analyticsvidhya.com/blog/2024/agentic-ai-interview-questions/',
          desc: 'Covers LangGraph, LlamaIndex, CrewAI, AutoGen, DSPy with detailed answers.',
        },
      ],
    },
    {
      phase: 6,
      emoji: '🔧',
      title: 'Fine-Tuning & Model Optimization',
      weeks: 'Week 10',
      accentColor: '#f97316',
      image: null,
      imageAlt: '',
      topics: [
        'Fine-tuning vs RAG — when to use which',
        'LoRA and QLoRA (PEFT)',
        'Quantization basics (INT8, GPTQ, GGUF)',
        'Hugging Face Trainer API',
      ],
      resources: [
        {
          label: 'Hugging Face LLM Course — Chapters 5–8 (free)',
          url: 'https://huggingface.co/learn/llm-course',
          desc: 'Covers fine-tuning, datasets, tokenizers, and classic NLP/LLM tasks.',
        },
        {
          label: "Andrej Karpathy — Let's Build GPT (YouTube)",
          url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
          desc: 'Deep dive into GPT internals and training from scratch.',
        },
        {
          label: 'Neural Breakdown with AVB — Fine-tuning Llama (YouTube)',
          url: 'https://www.youtube.com/@NeuralBreakdownwithAVB',
          desc: 'Step-by-step fine-tuning of Llama using Hugging Face, PyTorch, LoRA, and PEFT adapters.',
        },
      ],
    },
    {
      phase: 7,
      emoji: '📡',
      title: 'System Design + LLMOps',
      weeks: 'Week 11–12',
      accentColor: '#6366f1',
      image: null,
      imageAlt: '',
      topics: [
        'Designing RAG systems at scale',
        'LangSmith for tracing & debugging',
        'Evaluation metrics — RAGAS, BLEU, ROUGE',
        'Guardrails, prompt injection, safety filters',
        'Monitoring agents in production',
      ],
      resources: [
        {
          label: 'IGotAnOffer — GenAI System Design Guide (free)',
          url: 'https://igotanoffer.com/blogs/tech/ai-system-design',
          desc: 'Covers real interview questions from Google, Apple, OpenAI with step-by-step prep plan.',
        },
        {
          label: 'LangSmith Docs',
          url: 'https://docs.smith.langchain.com',
          desc: 'Official docs for tracing, evaluating, and debugging LLM applications.',
        },
        {
          label: 'RAGAS Docs',
          url: 'https://docs.ragas.io',
          desc: 'Free evaluation framework for RAG pipelines — metrics for faithfulness, relevance, and more.',
        },
      ],
    },
  ];

  return (
    <article className="bp-article">
      {/* ── Hero ── */}
      <div className="bp-hero-image-wrap">
        <img
          src="/blog_hero.png"
          alt="Gen AI & Agentic AI Engineer Roadmap"
          className="bp-hero-image"
        />
        <div className="bp-hero-overlay">
          <div className="bp-hero-badge">🗺️ STUDY ROADMAP</div>
          <h1 className="bp-hero-title">Gen AI & Agentic AI Engineer</h1>
          <p className="bp-hero-sub">12 weeks · 7 phases · 100% free resources</p>
        </div>
      </div>

      {/* ── Meta ── */}
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

      {/* ── Intro ── */}
      <div className="bp-prose">
        <p>
          Breaking into <strong>Generative AI and Agentic AI engineering</strong> doesn't require
          a PhD or an expensive bootcamp. It requires a structured plan and the right free resources.
          This roadmap distills everything I've learned into a clear <strong>12-week study plan</strong> —
          from understanding how Transformers work all the way to deploying production-grade agentic systems.
        </p>
        <p>
          Whether you're a software engineer pivoting into AI, a data scientist wanting to master LLMs,
          or a builder who wants to ship AI products — this roadmap is designed for <em>you</em>.
        </p>

        <div className="bp-callout bp-callout--info">
          <span className="bp-callout-icon">💡</span>
          <div>
            <strong>How to use this roadmap:</strong> Each phase builds on the previous one.
            The phases are collapsible — click any phase header to expand or collapse it.
            Aim for 2–3 hours of focused study per day. Free resources are all you need.
          </div>
        </div>
      </div>

      {/* ── Progress tracker ── */}
      <div className="bp-section">
        <div className="bp-section-label">YOUR JOURNEY AT A GLANCE</div>
        <RoadmapProgress />
      </div>

      {/* ── Stats row ── */}
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

      {/* ── Phase cards ── */}
      <div className="bp-phases">
        {phases.map(p => (
          <PhaseCard key={p.phase} {...p} />
        ))}
      </div>

      {/* ── Final thoughts ── */}
      <div className="bp-prose bp-prose--final">
        <h2>🏁 Final Thoughts</h2>
        <p>
          The Gen AI landscape moves fast, but the <strong>core fundamentals stay constant</strong>.
          Master attention mechanisms, understand why RAG beats fine-tuning for most use cases,
          get comfortable with LangChain, and build your first real agentic system in LangGraph.
          That's the stack that gets you hired in 2025–2026.
        </p>
        <p>
          The most important thing? <strong>Build while you learn.</strong> Every phase has a
          practical project baked in. Don't just consume content — ship something.
        </p>

        <div className="bp-callout bp-callout--tip">
          <span className="bp-callout-icon">🚀</span>
          <div>
            <strong>Pro tip:</strong> After Phase 5 (Agentic AI), try building a real agent that
            solves a problem you personally face. Your portfolio will speak louder than any certificate.
          </div>
        </div>

        <div className="bp-divider" />

        <p className="bp-closing">
          Found this roadmap helpful? Share it with someone who's trying to break into AI.
          Have questions or suggestions? Reach out via{' '}
          <a href="https://www.linkedin.com/in/mangesh-jha" target="_blank" rel="noopener noreferrer" className="bp-inline-link">
            LinkedIn
          </a>.
        </p>
      </div>
    </article>
  );
}

/* ─── Blog Post Page ────────────────────────────────────────── */
export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(b => b.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      {slug === 'genai-agentic-roadmap' && <GenAIRoadmapContent />}
    </div>
  );
}
