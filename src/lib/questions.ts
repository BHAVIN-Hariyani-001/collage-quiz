export interface Question {
  question: string;
  options: string[];
  answer: number; // index of correct option
  category: string;
}

export const questions: Question[] = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Process Utility",
      "Control Processing Unit",
    ],
    answer: 0,
    category: "Computer Fundamentals",
  },
  {
    question: "Which company owns Google?",
    options: ["Microsoft", "Alphabet Inc.", "Meta", "IBM"],
    answer: 1,
    category: "Internet",
  },
  {
    question: "What is SEO?",
    options: [
      "Search Engine Operation",
      "Secure Engine Optimization",
      "Search Engine Optimization",
      "System Engine Output",
    ],
    answer: 2,
    category: "Google Search & SEO Basics",
  },
  {
    question: "Which HTML tag is used for hyperlinks?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1,
    category: "HTML",
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Active Memory",
      "Remote Access Module",
    ],
    answer: 1,
    category: "Computer Fundamentals",
  },
  {
    question: "What is the full form of URL?",
    options: [
      "Universal Resource Locator",
      "Uniform Resource Link",
      "Uniform Resource Locator",
      "Unified Routing Locator",
    ],
    answer: 2,
    category: "Internet",
  },
  {
    question: "Which operating system is open source?",
    options: ["Windows", "macOS", "Linux", "iOS"],
    answer: 2,
    category: "Operating Systems",
  },
  {
    question: "What is the purpose of a search engine?",
    options: [
      "To create websites",
      "To find information on the web",
      "To send emails",
      "To edit images",
    ],
    answer: 1,
    category: "Google Search & SEO Basics",
  },
  {
    question: "Which language is used for web page styling?",
    options: ["HTML", "JavaScript", "Python", "CSS"],
    answer: 3,
    category: "Programming Basics",
  },
  {
    question: "What does WWW stand for?",
    options: [
      "World Web Wide",
      "World Wide Web",
      "Web World Wide",
      "Wide World Web",
    ],
    answer: 1,
    category: "Internet",
  },
];
