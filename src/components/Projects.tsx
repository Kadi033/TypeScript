import { thumb1, thumb2, thumb3, thumb4, thumb5, thumb6 } from "../assets";

interface Image {
  src: string;
  alt: string;
}

interface Project {
  image: Image;
  name: string;
  with: string;
}

function Projects() {
  const sites: Project[] = [
    {
      image: { src: thumb1, alt: "Design Portfolio Thumbnail" },
      name: "DESIGN PORTFOLIO",
      with: "HTML CSS",
    },
    {
      image: { src: thumb2, alt: "E-Learning Landing Page Thumbnail" },
      name: "E-LEARNING LANDING PAGE",
      with: "HTML CSS",
    },
    {
      image: { src: thumb3, alt: "Todo Web App Thumbnail" },
      name: "TODO WEB APP",
      with: "HTML CSS JAVASCRIPT",
    },
    {
      image: { src: thumb4, alt: "Memory Game Thumbnail" },
      name: "MEMORY GAME",
      with: "HTML CSS JAVASCRIPT",
    },
    {
      image: { src: thumb5, alt: "Art Gallery Showcase Thumbnail" },
      name: "ART GALLERY SHOWCASE",
      with: "HTML CSS JAVASCRIPT",
    },
    {
      image: { src: thumb6, alt: "Sass Project Thumbnail" },
      name: "Sass",
      with: "HTML CSS JAVASCRIPT",
    },
  ];

  return (
    <div className="bg-[#141414]">
        <h1 className="pt-56"></h1>
      <div className="grid grid-cols-2 justify-items-center">
        {sites.map((item, index) => (
          <div key={index} className="">
            <img
              src={item.image.src}
              alt={item.image.alt}
              className="w-[580px] h-[480px]"
            />
            <h1 className="text-white text-5xl">{item.name}</h1>
            <p className="text-[#4a2f2f] text-xl">{item.with}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
