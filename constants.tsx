import { ServiceCategory } from './types.ts';

export const POLICIES = {
  academicIntegrity: "We do not provide services that are unlawful or unethical. For academic work, we offer polishing and enhancement to ensure your own content is flawless. Custom writing is provided for guidance only and is not intended for submission as-is.",
  contentNotice: "We do not accept content related to LGBT concepts, atheist schools of thought, adult material, hate speech, or unethical subjects.",
  refundPolicy: "Our refund policy is designed to be fair. If work has not commenced, a full refund is available. Once editing has started, partial refunds may be issued based on progress."
};

export const ACADEMIC_SERVICES: ServiceCategory = {
  title: "Academic & Professional Services",
  subtitle: "Ensuring Excellence in Scholarly Communication",
  services: [
    {
      id: "proofreading",
      title: "Comprehensive Proofreading",
      description: "Final-stage quality checks for technical perfection.",
      details: [
        "Spelling, punctuation, and typo correction",
        "Grammar and sentence-structure fixes",
        "Subject–verb agreement & tense consistency",
        "Clarity and readability improvement",
        "Quality assurance review before submission"
      ]
    },
    {
      id: "academic-editing",
      title: "Academic Editing",
      description: "Enhance flow, tone, and logical progression.",
      details: [
        "Sentence restructuring for better coherence",
        "Academic tone and formal language enhancement",
        "Improving transitions between arguments",
        "Plagiarism risk reduction (Human-based paraphrasing)",
        "Refining abstracts and introductions"
      ]
    },
    {
      id: "research-suite",
      title: "Research Article Suite",
      description: "Specialized support for journal publication.",
      details: [
        "Article formatting & structuring",
        "Paraphrasing (Complete AI detection removal)",
        "Journal selection consultancy",
        "Publication guidance and strategy",
        "Response-to-reviewers editing"
      ]
    },
    {
      id: "formatting",
      title: "Document Styling & Citations",
      description: "University and journal-ready formatting standards.",
      details: [
        "Styles: APA, MLA, Chicago, Harvard, IEEE, Vancouver",
        "In-text citation and reference list correction",
        "Automatic Table of Contents & Figure lists",
        "Font, spacing, and margin standardization",
        "Cross-checking citations with references"
      ]
    },
    {
      id: "thesis-dissertation",
      title: "Thesis & Dissertation Editing",
      description: "High-level support for major academic milestones.",
      details: [
        "Chapter-by-chapter language polishing",
        "Compliance with university-specific guidelines",
        "Supervisor feedback implementation",
        "Formatting for submission & binding"
      ]
    }
  ]
};

export const BOOK_SERVICES: ServiceCategory = {
  title: "End-to-End Book Solutions",
  subtitle: "From Concept to Global Distribution",
  services: [
    {
      id: "book-writing",
      title: "Writing & Development",
      description: "Professional ghostwriting and concept building.",
      details: [
        "Ghostwriting (Fiction & Non-Fiction)",
        "Story outlining & chapter structuring",
        "Memoirs & Educational books",
        "Ethical religious & motivational content",
        "Language refinement for authors"
      ]
    },
    {
      id: "book-editing",
      title: "Professional Book Editing",
      description: "Multi-level review for market readiness.",
      details: [
        "Developmental editing (Story structure)",
        "Line & Copy editing (Grammar & Tone)",
        "Readability enhancement",
        "Pacing and plot consistency"
      ]
    },
    {
      id: "interior-design",
      title: "Formatting & Interior Layout",
      description: "Print-ready and eBook file creation.",
      details: [
        "Paperback & Hardcover formatting",
        "Kindle & EPUB (Reflowable/Fixed)",
        "Trim size and margin optimization",
        "IngramSpark & KDP compliance"
      ]
    },
    {
      id: "cover-design",
      title: "Book Cover Design",
      description: "Visual branding that captures readers.",
      details: [
        "Custom front, back, and spine design",
        "Genre-appropriate typography",
        "High-resolution print-ready files",
        "Metadata optimization"
      ]
    },
    {
      id: "publishing-distribution",
      title: "Publishing & Distribution",
      description: "Reach global audiences on major platforms.",
      details: [
        "Global distribution via IngramSpark",
        "Amazon KDP & Apple Books setup",
        "ISBN & Copyright registration",
        "Library catalog inclusion"
      ]
    }
  ]
};