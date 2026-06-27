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
  {
    question: "Which device is used to move the cursor on the screen?",
    options: ["Printer", "Mouse", "Scanner", "Speaker"],
    answer: 1,
    explanation: "A mouse is used to move the cursor and click on items.",
    category: "Computer Basics",
  },
  {
    question: "Which key is used to delete text to the left of the cursor?",
    options: ["Enter", "Shift", "Backspace", "Ctrl"],
    answer: 2,
    explanation: "The Backspace key deletes characters to the left of the cursor.",
    category: "Keyboard",
  },
  {
    question: "Which of the following is an operating system?",
    options: ["Windows", "Google", "YouTube", "Chrome"],
    answer: 0,
    explanation:
      "Windows is an operating system that manages computer hardware and software.",
    category: "Software",
  },
  {
    question: "What is the main purpose of a computer?",
    options: [
      "To cook food",
      "To process data",
      "To wash clothes",
      "To drive vehicles",
    ],
    answer: 1,
    explanation:
      "A computer processes data and performs tasks based on instructions.",
    category: "Computer Basics",
  },
  {
    question: "Which device is used to hear sound from a computer?",
    options: ["Monitor", "Keyboard", "Speaker", "Scanner"],
    answer: 2,
    explanation: "Speakers produce sound from the computer.",
    category: "Hardware",
  },
  {
    question: "Which key is commonly used to start a new line while typing?",
    options: ["Esc", "Enter", "Tab", "Ctrl"],
    answer: 1,
    explanation: "The Enter key moves the cursor to the next line.",
    category: "Keyboard",
  },
  {
    question: "Which storage device can be connected through a USB port?",
    options: ["Flash Drive", "Monitor", "Keyboard", "Printer"],
    answer: 0,
    explanation: "A USB flash drive is used to store and transfer files.",
    category: "Hardware",
  },
  {
    question: "Which application is mainly used for typing documents?",
    options: ["MS Word", "Paint", "Calculator", "Notepad++"],
    answer: 0,
    explanation: "MS Word is commonly used for creating and editing documents.",
    category: "Software",
  },
  {
    question: "What does WWW stand for?",
    options: [
      "World Wide Web",
      "World Web Window",
      "Wide World Web",
      "Web World Wide",
    ],
    answer: 0,
    explanation:
      "WWW stands for World Wide Web, a system of websites on the Internet.",
    category: "Internet",
  },
  {
    question: "Which symbol is commonly used in an email address?",
    options: ["#", "@", "$", "&"],
    answer: 1,
    explanation:
      "The @ symbol separates the username from the email domain.",
    category: "Internet",
  },
];