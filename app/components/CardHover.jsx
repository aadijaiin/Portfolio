import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHover() {
  return (
    (<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HoverEffect items={projects} />
    </div>)
  );
}

export const projects = [
    {
      title: "AI Chatbot",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://chatbot-umber-delta.vercel.app/",
    },
  {
    title: "Todo App",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://todo-app-code.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://aadijaiin.github.io/Weather-app/",
  },
  {
    title: "Password Generator",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://aadijaiin.github.io/PasswordGeneratorUsingReact/",
  },
  {
    title: "Portfolio",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://portfolio-aadi-jains-projects.vercel.app/",
  },
  {
    title: "Foodoscope",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://fork-it-foodoscope.vercel.app/",
  },
];
