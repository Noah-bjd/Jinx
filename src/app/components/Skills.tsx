// SkillsSection.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import { act, useRef, useState } from 'react';
import { Group, Mesh } from 'three';
import '../styles/skills.css';

const skills = {
  Languages: ["C", "C++", "C#", "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Bash"],
  Frameworks: ["ReactJS", "Next.js", "Blazor", "Tailwind CSS", "Material UI", ".NET", "Syncfusion"],
  Tools: ["Docker", "Linux", "SQL", "DOM", "UI/UX Design", "Computer Systems", "GitHub", "Figma"],
};

// Helper function to get category for a skill
const getSkillCategory = (skill: string): string => {
  for (const [category, skillList] of Object.entries(skills)) {
    if (skillList.includes(skill)) {
      return category;
    }
  }
  return '';
};

function SkillOrbit({ 
  items, 
  radius, 
  speed = 1, 
  activeCategory,
  onSkillClick 
}: { 
  items: string[]; 
  radius: number; 
  speed?: number;
  activeCategory: string | null;
  onSkillClick: (skill: string, category: string) => void;
}) {
  const groupRef = useRef<Group>(null!);

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
        const category = getSkillCategory(skill);
        const isHighlighted = activeCategory === category;
        return (
          <mesh key={skill} position={[x, 0, z]}>
            <Html center
              zIndexRange={isHighlighted ? [100, 101] : [50, 51]}>
              <div 
                className={`skill-badge ${activeCategory === category ? 'active' : ''}`}
                data-category={category}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent canvas click
                  onSkillClick(skill, category);
                }}
              >
                {skill}
              </div>
            </Html>
          </mesh>
        );
      })}
    </group>
  );
}

function GalaxyCore({ activeCategory }: { activeCategory: string | null }) {
  const groupRef = useRef<Group>(null!);
  const coreRef = useRef<Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      coreRef.current.rotation.z = state.clock.getElapsedTime() * 0.08;
    }
  });

  const getCoreColor = () => {
    switch (activeCategory) {
      case 'Languages': return 'hsl(var(--primary))';
      case 'Frameworks': return 'hsl(var(--secondary))';
      case 'Tools': return 'hsl(var(--accent))';
      default: return 'hsl(var(--primary))';
    }
  };

  return (
    <group ref={groupRef}>
      {/* Main tech sphere with multiple layers */}
      <group ref={coreRef}>
        {/* Outer wireframe sphere */}
        <mesh>
          <sphereGeometry args={[1.2, 12, 8]} />
          <meshBasicMaterial 
            color={getCoreColor()}
            transparent
            opacity={0.6}
            wireframe={true}
            wireframeLinewidth={3}
          />
        </mesh>

        {/* Inner geometric core */}
        <mesh>
          <octahedronGeometry args={[0.8, 0]} />
          <meshBasicMaterial 
            color={getCoreColor()}
            transparent
            opacity={0.8}
            wireframe={true}
            wireframeLinewidth={2}
          />
        </mesh>

        {/* Central energy ball */}
        <mesh>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshBasicMaterial 
            color={getCoreColor()}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Rotating tech rings */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.9, 0.05, 8, 16]} />
          <meshBasicMaterial 
            color={getCoreColor()}
            transparent
            opacity={0.7}
          />
        </mesh>

        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[0.9, 0.05, 8, 16]} />
          <meshBasicMaterial 
            color={getCoreColor()}
            transparent
            opacity={0.7}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.9, 0.05, 8, 16]} />
          <meshBasicMaterial 
            color={getCoreColor()}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Orbiting tech particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 1.6;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const size = 0.08 + Math.sin(i * 0.5) * 0.04;
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[size, size, size]} />
            <meshBasicMaterial 
              color={getCoreColor()}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}

      {/* Energy connections */}
      {[...Array(6)].map((_, i) => {
        const angle1 = (i / 6) * Math.PI * 2;
        const angle2 = ((i + 3) % 6 / 6) * Math.PI * 2;
        const radius = 1.6;
        const x1 = radius * Math.cos(angle1);
        const z1 = radius * Math.sin(angle1);
        const x2 = radius * Math.cos(angle2);
        const z2 = radius * Math.sin(angle2);
        
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([x1, 0, z1, x2, 0, z2]), 3]}
                count={2}
                array={new Float32Array([x1, 0, z1, x2, 0, z2])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color={getCoreColor()}
              transparent
              opacity={0.4}
              linewidth={2}
            />
          </line>
        );
      })}
      
      {/* Orbital rings - Updated to match new orbit radii */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.4, 3.6, 32]} /> {/* Updated to match Languages orbit */}
        <meshBasicMaterial 
          color={activeCategory === 'Languages' ? getCoreColor() : 'hsl(var(--primary))'}
          transparent
          opacity={activeCategory === 'Languages' ? 0.3 : 0.1}
          side={2}
          wireframe={activeCategory !== 'Languages'}
        />
      </mesh>
      
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.4, 5.6, 32]} /> {/* Updated to match Frameworks orbit */}
        <meshBasicMaterial 
          color={activeCategory === 'Frameworks' ? getCoreColor() : 'hsl(var(--secondary))'}
          transparent
          opacity={activeCategory === 'Frameworks' ? 0.25 : 0.08}
          side={2}
          wireframe={activeCategory !== 'Frameworks'}
        />
      </mesh>
      
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[7.4, 7.6, 32]} /> {/* Updated to match Tools orbit */}
        <meshBasicMaterial 
          color={activeCategory === 'Tools' ? getCoreColor() : 'hsl(var(--accent))'}
          transparent
          opacity={activeCategory === 'Tools' ? 0.2 : 0.06}
          side={2}
          wireframe={activeCategory !== 'Tools'}
        />
      </mesh>
    </group>
  );
}
function AnimatedStars({ activeCategory }: { activeCategory: string | null }) {
  const getStarColor = () => {
    switch (activeCategory) {
      case 'Languages': return 'hsl(var(--primary))';
      case 'Frameworks': return 'hsl(var(--secondary))';
      case 'Tools': return 'hsl(var(--accent))';
      default: return '#ffffff';
    }
  };

  return (
    <Stars
      radius={100}
      depth={50}
      count={2000}
      factor={4}
      saturation={10}
      fade
      speed={0.5}
    />
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSkillClick = (skill: string, category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleLegendClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleCanvasClick = () => {
    setActiveCategory(null);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-description">
            {activeCategory 
              ? `Showing ${activeCategory} skills - Click anywhere to see all skills`
              : 'A solar system of technologies I\'ve mastered, orbiting the core of my expertise.'
            }
          </p>
        </div>

        <div className="skills-content">
          <div 
            className="skills-3d" 
            onClick={handleCanvasClick}
          >
            <Canvas 
              camera={{ position: [0, 10, 0.1], fov: 78 }}
              gl={{ alpha: false }}
            >
              <color attach="background" args={['#000000']} />
              
              <ambientLight intensity={0.3} />
              <pointLight 
                position={[0, 5, 0]} 
                intensity={activeCategory ? 1 : 0.8} 
                color={activeCategory ? 
                  (activeCategory === 'Languages' ? 'hsl(var(--primary))' : 
                   activeCategory === 'Frameworks' ? 'hsl(var(--secondary))' : 'hsl(var(--accent))') 
                  : 'hsl(var(--primary))'} 
              />
              <pointLight 
                position={[0, -5, 0]} 
                intensity={activeCategory ? 0.7 : 0.5} 
                color="hsl(var(--secondary))" 
              />
              
              <OrbitControls 
                enableZoom={true}
                zoomSpeed={0.6}
                autoRotate={!activeCategory}
                autoRotateSpeed={0.3}
                maxPolarAngle={Math.PI}
                minPolarAngle={0}
                enablePan={false}
                target={[0, 0, 0]}
                minDistance={5}    // Added min zoom distance
                maxDistance={15}   // Added max zoom distance
              />

              {/* Background Stars */}
              <AnimatedStars activeCategory={activeCategory} />

              {/* Galaxy Core */}
              <GalaxyCore activeCategory={activeCategory} />

              {/* Orbiting Skills - Increased radii for better spacing */}
              <SkillOrbit 
                items={skills.Languages} 
                radius={3.5}  // Increased from 2.5
                speed={0.6} 
                activeCategory={activeCategory}
                onSkillClick={handleSkillClick}
              />
              <SkillOrbit 
                items={skills.Frameworks} 
                radius={5.5}  // Increased from 3.8
                speed={0.8} 
                activeCategory={activeCategory}
                onSkillClick={handleSkillClick}
              />
              <SkillOrbit 
                items={skills.Tools} 
                radius={7.5}  // Increased from 5.2
                speed={0.7} 
                activeCategory={activeCategory}
                onSkillClick={handleSkillClick}
              />
            </Canvas>
          </div>

          {/* Legend */}
          <div className="skills-legend">
            <div 
              className={`legend-item ${activeCategory === 'Languages' ? 'active' : ''}`}
              onClick={() => handleLegendClick('Languages')}
            >
              <div className="legend-color languages"></div>
              <span>Languages</span>
            </div>
            <div 
              className={`legend-item ${activeCategory === 'Frameworks' ? 'active' : ''}`}
              onClick={() => handleLegendClick('Frameworks')}
            >
              <div className="legend-color frameworks"></div>
              <span>Frameworks</span>
            </div>
            <div 
              className={`legend-item ${activeCategory === 'Tools' ? 'active' : ''}`}
              onClick={() => handleLegendClick('Tools')}
            >
              <div className="legend-color tools"></div>
              <span>Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}