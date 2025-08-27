
import { FaGithub } from 'react-icons/fa'; 

const Header = () => {
  const githubUrl = "https://github.com/ajay-rgb/PlanetExpress/tree/main";
  const portfolioUrl = "https://portfolio-tau-rouge-710zivsk3i.vercel.app/";

  return (
    <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-blue-300 transition-colors"
      >
        <FaGithub size={24} />
        <span className="ml-2 font-semibold">ajay-rgb</span>
      </a>

      <h1 className="absolute left-1/2 -translate-x-1/2 text-white text-4xl font-bold">
        Planet Express
      </h1>

      <a
        href={portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Know More
      </a>
    </header>
  );
};

export default Header;