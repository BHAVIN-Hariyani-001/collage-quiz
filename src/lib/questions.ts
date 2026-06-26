export interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Computer Processing Unit",
      "Control Processing Unit",
    ],
    answer: 1,
    explanation: "CPU is the main processing unit of a computer.",
    category: "Computer Basics",
  },
  {
    question: "Which device is used for typing?",
    options: ["Printer", "Monitor", "Keyboard", "Scanner"],
    answer: 2,
    explanation: "Keyboard is used to type text and commands.",
    category: "Computer Basics",
  },
  {
    question: "Which device displays output?",
    options: ["CPU", "Keyboard", "Monitor", "Mouse"],
    answer: 2,
    explanation: "Monitor displays output from the computer.",
    category: "Computer Basics",
  },
  {
    question: "What is the full form of RAM?",
    options: [
      "Random Available Memory",
      "Read Access Memory",
      "Random Access Memory",
      "Rapid Access Memory",
    ],
    answer: 2,
    explanation: "RAM is temporary memory used while the computer is running.",
    category: "Computer Basics",
  },
  {
    question: "Which of the following is a web browser?",
    options: ["MS Word", "Calculator", "Paint", "Google Chrome"],
    answer: 3,
    explanation: "Google Chrome is used to browse websites.",
    category: "Internet",
  },
  {
    question: "What is used to print documents?",
    options: ["Mouse", "Scanner", "Printer", "Speaker"],
    answer: 2,
    explanation: "Printer is used to print documents on paper.",
    category: "Hardware",
  },
  {
    question: "Which company developed Windows?",
    options: ["Intel", "Microsoft", "Google", "Apple"],
    answer: 1,
    explanation: "Windows operating system is developed by Microsoft.",
    category: "Software",
  },
  {
    question: "What is the full form of USB?",
    options: [
      "User Service Bus",
      "Universal System Bus",
      "Universal Serial Bus",
      "United Serial Bus",
    ],
    answer: 2,
    explanation: "USB is used to connect devices to a computer.",
    category: "Hardware",
  },
  {
    question: "Which is an input device?",
    options: ["Speaker", "Printer", "Keyboard", "Monitor"],
    answer: 2,
    explanation: "Keyboard is an input device used to enter data.",
    category: "Computer Basics",
  },
  {
    question: "What is the Internet mainly used for?",
    options: [
      "Printing",
      "Cooking",
      "Communication and information",
      "Driving",
    ],
    answer: 2,
    explanation: "Internet is used for communication and accessing information.",
    category: "Internet",
  },
];