import { motion } from 'framer-motion';
import '../styles/process.css';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  object: string;
}

export default function ProcessSection() {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Discover & Research",
      description: "Deep dive into user needs, market analysis, and technical feasibility to build the perfect foundation for your project.",
      object: "research"
    },
    {
      id: 2,
      title: "Design & Prototype",
      description: "Transform ideas into beautiful, intuitive interfaces with pixel-perfect design and interactive prototypes that bring your vision to life.",
      object: "design"
    },
    {
      id: 3,
      title: "Develop & Launch",
      description: "Build robust, scalable solutions with cutting-edge technologies, rigorous testing, and seamless deployment to production.",
      object: "develop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };

  const objectVariants = {
    hidden: { 
      scale: 0, 
      rotateY: -180,
      y: 50 
    },
    visible: {
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const Render3DObject = ({ type }: { type: string }) => {
  switch (type) {
    case 'research':
      return (
        <motion.div 
          className="research-object"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Magnifying Glass */}
          <motion.div 
            className="magnifying-glass"
            animate={{
              rotateZ: [0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="glass-lens">
              <motion.div 
                className="search-reflection"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="glass-handle"></div>
          </motion.div>
        </motion.div>
      );
    case 'design':
      return (
        <motion.div 
          className="design-object"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Design Canvas */}
          <motion.div 
            className="design-canvas"
            animate={{
              rotateX: [0, 3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="canvas-elements">
              <div className="canvas-header"></div>
              <div className="canvas-content">
                <div className="content-block"></div>
                <div className="content-block"></div>
                <div className="content-block"></div>
                <div className="content-block"></div>
              </div>
            </div>
            
            <div className="design-tools">
              <motion.div 
                className="pen-tool"
                animate={{
                  rotateZ: [45, 50, 45],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="pen-tip"></div>
              </motion.div>
              
              <div className="color-palette">
                <motion.div 
                  className="palette-color"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="palette-color"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="palette-color"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="palette-color"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    case 'develop':
      return (
        <motion.div 
          className="develop-object"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Code Editor */}
          <motion.div 
            className="code-editor"
            animate={{
              rotateY: [0, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="editor-header"></div>
            <div className="editor-content">
              <motion.div 
                className="code-line code-line-1"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="code-line code-line-2"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              <motion.div 
                className="code-line code-line-3"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
              <motion.div 
                className="code-line code-line-4"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9
                }}
              />
            </div>
            
            <div className="deployment">
              <div className="server-icon">
                <div className="server-lights">
                  <motion.div 
                    className="server-light"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="server-light"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </div>
              
              <motion.div 
                className="deploy-arrow"
                animate={{
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="arrow-shaft"></div>
                <div className="arrow-head"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      );
    default:
      return null;
  }
};
  return (
    <section id="process" className="process-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Process</span>
          </h2>
          <p className="section-description">
            A structured approach that ensures every project is delivered with precision, 
            creativity, and technical excellence. From concept to launch, I guide you through 
            each phase with clear communication and measurable results.
          </p>
        </motion.div>
        
        <div className="process-timeline">
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className="process-steps"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="process-step"
                variants={stepVariants}
              >
                <div className="step-indicator">
                  <motion.div 
                    className="step-object"
                    variants={objectVariants}
                    whileHover={{ 
                      scale: 1.15,
                      rotateY: 20,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    animate={{
                      y: [0, -12, 0],
                      rotateY: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut" as const
                    }}
                  >
                    <Render3DObject type={step.object} />
                  </motion.div>
                  <div className="step-connector" />
                </div>

                <div className="step-content">
                  <div className="step-header">
                    <span className="step-number">0{step.id}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-features">
                    {getStepFeatures(step.id).map((feature, featureIndex) => (
                      <motion.span 
                        key={featureIndex}
                        className="feature-tag"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getStepFeatures(stepId: number): string[] {
  switch (stepId) {
    case 1:
      return ["User Research", "Market Analysis", "Technical Audit"];
    case 2:
      return ["UI/UX Design", "Wireframing", "Prototyping"];
    case 3:
      return ["Development", "Testing", "Deployment"];
    default:
      return [];
  }
}