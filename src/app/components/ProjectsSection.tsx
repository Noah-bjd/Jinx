import { motion } from 'framer-motion';
import '../styles/projects.css';
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "3D Product Showcase",
      description: "An immersive e-commerce experience with 3D product visualization.",
      tags: ["React", "Three.js", "Next.js"],
      link: "#",
      image: "3d-ecommerce"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Real-time data visualization with interactive charts and AI insights.",
      tags: ["React", "D3.js", "TypeScript"],
      link: "#",
      image: "analytics-dashboard"
    },
    {
      id: 3,
      title: "AR Experience",
      description: "An augmented reality portfolio showcasing projects in an interactive 3D space.",
      tags: ["React", "WebXR", "Framer Motion"],
      link: "#",
      image: "ar-experience"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-description">
            A selection of my recent work showcasing React development and modern web techniques.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  {project.image}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}