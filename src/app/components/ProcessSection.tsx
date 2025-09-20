import { motion } from 'framer-motion';
import '../styles/process.css';
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function ProcessSection() {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Explore",
      description: "Understanding the problem space, user needs, and technical requirements to create a solid foundation.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Design",
      description: "Creating intuitive user interfaces with modern design principles and attention to micro-interactions.",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Build",
      description: "Developing robust, scalable solutions with clean code and modern frameworks like React and Next.js.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="process" className="section ">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My Creative <span className="text-primary">Process</span>
          </h2>
          <p className="section-description">
            A structured approach to turning ideas into functional and beautiful digital experiences.
          </p>
        </div>
        
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="process-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="process-icon">
                {step.icon}
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}