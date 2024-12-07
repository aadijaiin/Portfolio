import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHover() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "AI Chatbot",
    description:
      "AI Chatbot: An interactive tool that provides information or companionship using Gemini technology, designed for seamless communication and assistance.",
    link: "https://chatbot-umber-delta.vercel.app/",
  },

  {
    title: "Todo App",
    description:
      "Todo App: A task management app that helps users organize tasks, track progress, and stay on top of daily responsibilities with ease.",
    link: "https://todo-app-code.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Weather App: A platform to check weather forecasts, track favorite locations, and receive timely updates to plan daily activities more efficiently.",
    link: "https://aadijaiin.github.io/Weather-app/",
  },
  {
    title: "Password Generator",
    description:
      "Password Generator: A tool to create strong, random passwords with customizable security options, ensuring user data protection and privacy online.",
    link: "https://aadijaiin.github.io/PasswordGeneratorUsingReact/",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio: A collection of projects showcasing innovative products aimed at enhancing communication, technology, and user experience through creative solutions.",
    link: "https://portfolio-aadi-jains-projects.vercel.app/",
  },
  {
    title: "Foodoscope",
    description:
      "Foodoscope: A nutrition analysis and recipe-finding platform that helps users discover healthy recipes and track nutritional information for better meal planning.",
    link: "https://fork-it-foodoscope.vercel.app/",
  },
];
