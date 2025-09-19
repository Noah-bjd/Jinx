import React from 'react';
import styled from 'styled-components';
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiGit, SiLinux, SiDocker, SiC, SiCplusplus, SiNextdotjs, SiDotnet } from 'react-icons/si';
import './../styles/about.css';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(222, 157, 54, 0.5);
  margin: 0 auto;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillCategory = styled.li`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #3d405b;
  margin-bottom: 1rem;
`;

const SkillItems = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 20px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #3d405b;
  background: #fbf6f6;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const IconHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* Add spacing below the icon and heading */
`;

interface AboutProps {
  isActive: boolean;
}

const About: React.FC<AboutProps> = ({ isActive }) => {
  return (
    <AboutSection>
      {/* Icon and Heading */}
      <IconHeadingContainer>
        <SiReact style={{ fontSize: '2.5rem', marginRight: '10px' }} className={isActive ? 'active' : 'inactive'} />
        <h3 className={isActive ? 'active' : 'inactive'}>Skills</h3>
      </IconHeadingContainer>

      {/* Skills List */}
      <SkillsList>
        {/* Systems & Tools */}
        <SkillCategory>
          <CategoryTitle className={isActive ? 'active' : 'inactive'}>Systems & Tools</CategoryTitle>
          <SkillItems>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiLinux /> Unix/Linux</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiLinux /> GNU/Linux</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiGit /> Git</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiDocker /> Docker</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Networking</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Shell</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Makefile</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>DOM</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>UI/UX Design</SkillItem>
          </SkillItems>
        </SkillCategory>

        {/* Computer Systems Programming Languages */}
        <SkillCategory>
          <CategoryTitle className={isActive ? 'active' : 'inactive'}>Computer Systems Programming Languages</CategoryTitle>
          <SkillItems>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiC /> C</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiCplusplus /> C++</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>C#</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiHtml5 /> HTML</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiCss3 /> CSS</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiJavascript /> JavaScript</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiTypescript /> TypeScript</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>SQL</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Shell Scripting</SkillItem>
          </SkillItems>
        </SkillCategory>

        {/* Frameworks & Libraries */}
        <SkillCategory>
          <CategoryTitle className={isActive ? 'active' : 'inactive'}>Frameworks & Libraries</CategoryTitle>
          <SkillItems>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiReact /> React</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiNextdotjs /> Next.js</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Blazor</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}><SiDotnet /> .Net</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Syncfusion</SkillItem>
          </SkillItems>
        </SkillCategory>

        {/* Personal Skills */}
        <SkillCategory>
          <CategoryTitle className={isActive ? 'active' : 'inactive'}>Personal Skills</CategoryTitle>
          <SkillItems>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Self-Learner</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Creative Problem Solver</SkillItem>
            <SkillItem className={isActive ? 'active' : 'inactive'}>Team Collaboration</SkillItem>
          </SkillItems>
        </SkillCategory>
      </SkillsList>
    </AboutSection>
  );
};

export default About;
