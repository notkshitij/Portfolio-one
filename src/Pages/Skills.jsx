import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, 
  FaNodeJs, FaGithub, FaGitAlt, FaDocker, FaAws, FaChartBar, FaChartLine
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiTypescript, SiNextdotjs, SiFramer, SiFirebase, SiVercel,
  SiNumpy, SiPandas, SiOpencv, SiKubernetes, SiGo
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML/CSS', icon: FaHtml5 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Python', icon: FaPython },
  { name: 'NumPy', icon: SiNumpy },
  { name: 'Pandas', icon: SiPandas },
  { name: 'Matplotlib', icon: FaChartBar },
  { name: 'Seaborn', icon: FaChartLine },
  { name: 'OpenCV', icon: SiOpencv },
  { name: 'Docker', icon: FaDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Golang', icon: SiGo },
];

export function Skills() {
  // Double the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section 
      data-scrollbar-thumb="#000000"
      data-scrollbar-track="#ffffff"
      className="w-full bg-white overflow-hidden py-4"
    >
      <div className="w-full">
        {/* Skills Marquee — full width */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8 sm:gap-10"
            animate={{
              x: [0, -56 * skills.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 hover:scale-110 transition-transform cursor-pointer group flex-shrink-0"
                title={skill.name}
              >
                <skill.icon
                  className="w-7 h-7 sm:w-9 sm:h-9 text-gray-600 group-hover:text-black transition-colors duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Caption below marquee */}
        <p className="text-center text-sm sm:text-base md:text-lg font-black text-black mt-3 px-4">
          1000+ Hours of Hands-on Experience
        </p>
      </div>
    </section>
  );
}
