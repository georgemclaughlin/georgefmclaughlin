export type Project = {
  title: string;
  summary: string;
  category: string;
  status: string;
  image?: string;
  imageLabel?: string;
  imageType?: "logo" | "screenshot";
  siteLink?: string;
  sourceLink?: string;
};

export const projects: Project[] = [
  {
    title: "Human Token Speed Test",
    summary:
      "A browser-based benchmark that lets people compare what they can produce in a fixed window against LLM-style token throughput. Part benchmark, part fun reality check.",
    category: "Experiment",
    status: "2026",
    image: "/humanTokenBenchmarkPreview.svg",
    imageType: "screenshot",
    siteLink: "https://georgemclaughlin.github.io/human-token-speed-test/",
    sourceLink: "https://github.com/georgemclaughlin/human-token-speed-test",
  },
  {
    title: "Parametric Project Box",
    summary:
      "A customizable project box with a public parametric build and downloadable model files, reflecting a more hands-on hardware and fabrication side.",
    category: "Design + Build",
    status: "2026",
    image: "/parametricProjectBoxPreview.svg",
    imageType: "screenshot",
    siteLink: "https://georgemclaughlin.github.io/parametric-project-box/",
    sourceLink: "https://github.com/georgemclaughlin/parametric-project-box",
  },
  {
    title: "FSA Organizer",
    summary:
      "A small product experiment a colleague and I developed, designed, and built around forensic schedule analysis. It reached a couple of early sales and taught us a lot.",
    category: "Product",
    status: "Earlier project",
    image: "/29r-03Logo.png",
    imageLabel: "FSA Organizer",
    imageType: "logo",
    siteLink: "https://29r-03.com/",
  },
];
