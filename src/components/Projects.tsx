// src/components/Projects.tsx
import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa'; // Import the Code icon

interface ProjectsProps {
  isActive: boolean;
}

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(114, 153, 116, 0.5);
  margin: 0 auto;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li<{ isActive: boolean }>`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  transform: ${({ isActive }) => (isActive ? 'translate(0px, 0px)' : 'translate(24px, 0px)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftSection = styled.div`
  width: 200px;
  text-align: right;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #3d405b;
  margin-bottom: 0.25rem;
`;

const ProjectDate = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const FreelanceTag = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
`;

const ProjectDescription = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0;
`;

const ProjectDescriptionItem = styled.li`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const IconHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Projects: React.FC<ProjectsProps> = ({ isActive }) => {
  return (
    <ProjectsSection>
      <IconHeadingContainer>
        <FaCode style={{ fontSize: '2.5rem', marginRight: '10px' }} className="react-icon" />
        <h3>Work and Projects</h3>
      </IconHeadingContainer>

      <ProjectList>
        <ProjectItem isActive={isActive}>
          <LeftSection>
            <ProjectTitle>NEUPONG</ProjectTitle>
            <ProjectDate>Next.js, PostgreSQL, WebSockets</ProjectDate>
            <FreelanceTag>Team Project</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>Developed and designed a ping-pong game website using Next.js and Tailwind CSS.</ProjectDescriptionItem>
              <ProjectDescriptionItem>Debugged algorithms, assessed security maturity, and optimized design.</ProjectDescriptionItem>
              <ProjectDescriptionItem>Designed user interfaces.</ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>

        <ProjectItem isActive={isActive}>
          <LeftSection>
            <ProjectTitle>CCS-Power</ProjectTitle>
            <ProjectDate>C#, .NET, Blazor</ProjectDate>
            <FreelanceTag>Job</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>Contributed to a Manufacturing Execution System (MES) using Blazor technology.</ProjectDescriptionItem>
              <ProjectDescriptionItem>QA Analyst - Focused on testing, identifying bugs, and ensuring software quality.</ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>

        <ProjectItem isActive={isActive}>
          <LeftSection>
            <ProjectTitle>Minishell</ProjectTitle>
            <ProjectDate>C Programming</ProjectDate>
            <FreelanceTag>Team Project</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>Developed a Unix shell in C, implementing process management, I/O redirection, and piping.</ProjectDescriptionItem>
              <ProjectDescriptionItem>Created built-in commands for enhanced usability.</ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>

        <ProjectItem isActive={isActive}>
          <LeftSection>
            <ProjectTitle>FT_Irc</ProjectTitle>
            <ProjectDate>C++, Socket Programming</ProjectDate>
            <FreelanceTag>Team Project</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>Built a custom IRC server in C++ with socket programming.</ProjectDescriptionItem>
              <ProjectDescriptionItem>Implemented authentication, channel management, and optimized message handling.</ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
