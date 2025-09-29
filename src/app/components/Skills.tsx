// SkillsSection.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import '../styles/skills.css';

const skills = {
  Languages: ["C", "C++", "C#", "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Bash"],
  Frameworks: ["ReactJS", "Next.js", "Blazor", "Tailwind CSS", "Material UI", ".NET", "Syncfusion"],
  Tools: ["Docker", "Linux", "SQL", "DOM", "UI/UX Design", "Computer Systems", "GitHub", "Figma"],
};

function SkillOrbit({ items, radius, speed = 1 }: { items: string[]; radius: number; speed?: number }) {
  const groupRef = useRef<any>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1 * speed;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((skill, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <mesh key={skill} position={[x, 0, z]}>
            <Html center>
              <div className="skill-badge" data-category={Object.keys(skills).find(key => skills[key as keyof typeof skills].includes(skill))}>
                {skill}
              </div>
            </Html>
          </mesh>
        );
      })}
    </group>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<any>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="hsl(var(--primary))" 
        transparent 
        opacity={0.1}
        wireframe
        wireframeLinewidth={2}
      />
    </mesh>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="section-description">
            A galaxy of technologies I work with across programming, frameworks, and tools.
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-3d">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.8} />
              <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.6} />
              
              <OrbitControls 
                enableZoom={true} 
                zoomSpeed={0.5}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI}
                minPolarAngle={0}
              />

              {/* Animated Core Sphere */}
              <AnimatedSphere />

              {/* Orbiting Skills */}
              <SkillOrbit items={skills.Languages} radius={2.2} speed={0.8} />
              <SkillOrbit items={skills.Frameworks} radius={3.2} speed={1.2} />
              <SkillOrbit items={skills.Tools} radius={4.2} speed={0.9} />
            </Canvas>
          </div>

          {/* Legend */}
          <div className="skills-legend">
            <div className="legend-item">
              <div className="legend-color languages"></div>
              <span>Languages</span>
            </div>
            <div className="legend-item">
              <div className="legend-color frameworks"></div>
              <span>Frameworks</span>
            </div>
            <div className="legend-item">
              <div className="legend-color tools"></div>
              <span>Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}