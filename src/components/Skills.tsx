interface Skill {
  name: string;
  description: string;
}

function Skills() {
  const data: Skill[] = [
    {
      name: "HTML",
      description: "4 Years Experience",
    },
    {
      name: "CSS",
      description: "4 Years Experience",
    },
    {
      name: "JavaScript",
      description: "4 Years Experience",
    },
    {
      name: "Accessibility",
      description: "4 Years Experience",
    },
    {
      name: "React",
      description: "3 Years Experience",
    },
    {
      name: "Sass",
      description: "3 Years Experience",
    },
  ];

  return (
    <div className="h-[30vh] bg-[#141414]">
        <h1 className="pt-24"></h1>
      <div className="flex justify-center w-full max-w-6xl h-px bg-gray-400 m-auto"></div>
      <div className="grid grid-cols-3 justify-center justify-items-center mt-9 gap-4">
        {data.map((item, index) => (
          <div key={index} className="w-44">
            <h1 className="text-white text-5xl">{`${item.name}`}</h1>
            <p className="text-[#d9d9d9] text-xl">{`${item.description}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
