export interface FAQProps {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  heading: string;
  description: string;
  items: FAQProps[];
  supportHeading?: string;
  supportDescription?: string;
  supportButtonText?: string;
  supportButtonUrl?: string;
}

export const faqItems: FAQProps[] = [
  {
    id: "faq-1",
    question: "What is Examaxis?",
    answer:
      "Examaxis is a comprehensive question bank platform that provides previous year questions, practice tests, and mock exams for popular cloud certifications including AWS, Azure, Google Cloud, and other IT exams. With a 95% success rate, we help professionals ace their certification exams.",
  },
  {
    id: "faq-2",
    question: "Which certifications does Examaxis cover?",
    answer:
      "We cover all major cloud certifications including AWS Solutions Architect, Azure Administrator, Google Cloud Professional, CompTIA, Cisco CCNA, and many more. Our question bank is regularly updated with the latest exam patterns and questions.",
  },
  {
    id: "faq-3",
    question: "How does the practice question system work?",
    answer:
      "Our platform allows you to practice questions by topic, difficulty level, or exam type. You can mark questions for review, make notes, track your progress, and identify weak areas. Each question comes with detailed explanations to help you understand the concepts better.",
  },
  {
    id: "faq-4",
    question: "Are the questions actual exam questions?",
    answer:
      "Our questions are based on previous year exam patterns and cover all topics from official exam blueprints. While we cannot guarantee exact exam questions, our comprehensive question bank ensures you're fully prepared for the actual exam format and difficulty level.",
  },
  {
    id: "faq-5",
    question: "How do mock tests work?",
    answer:
      "Mock tests simulate the actual exam environment with the same time limits, question format, and difficulty level. After completing a mock test, you'll receive a detailed performance analysis showing your score, time management, topic-wise performance, and areas for improvement.",
  },
  {
    id: "faq-6",
    question: "Can I make notes while practicing?",
    answer:
      "Yes! You can create notes for any question or topic. Your notes are saved automatically and can be accessed anytime. This helps you build your own personalized study guide and quickly review important concepts before the exam.",
  },
  {
    id: "faq-7",
    question: "What is the 95% success rate?",
    answer:
      "95% of our users who complete at least 80% of the practice questions and take all mock tests pass their certification exams on the first attempt. This is based on feedback and results from thousands of successful candidates who used Examaxis.",
  },
  {
    id: "faq-8",
    question: "How often is the question bank updated?",
    answer:
      "We update our question bank regularly to reflect the latest exam changes, new topics, and feedback from recent test takers. Major certification updates are incorporated within 2-4 weeks of official announcements.",
  },
  {
    id: "faq-9",
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a free trial that gives you access to a limited set of practice questions and one mock test. This allows you to experience the platform and assess the quality of our content before making a purchase.",
  },
  {
    id: "faq-10",
    question: "Can I access Examaxis on mobile devices?",
    answer:
      "Absolutely! Examaxis is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops. Practice questions and take mock tests anywhere, anytime - your progress syncs automatically across all devices.",
  },
];

export const faqs: FAQSectionProps = {
  heading: "Frequently Asked Questions",
  description: "Everything you need to know about Examaxis. Can't find what you're looking for? Contact our support team.",
  items: faqItems,
  supportHeading: "Still have questions?",
  supportDescription: "Our support team is available 24/7 to help you succeed in your certification journey.",
  supportButtonText: "Contact Support",
  supportButtonUrl: "/support",
}