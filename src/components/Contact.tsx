// src/components/Contact.tsx
import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

interface ContactProps {
  isActive: boolean;
}

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(0, 45, 64, 0.5);
  min-height: 53vh;
`;

const ContactHeading = styled.h2<{ isActive: boolean }>`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform: ${({ isActive }) => (isActive ? 'translate(0px, 0px)' : 'translate(24px, 0px)')};
  transition: transform 0.3s ease-in-out;
`;

const ContactInfo = styled.div<{ isActive: boolean }>`
  color: #333;
  transform: ${({ isActive }) => (isActive ? 'translate(0px, 0px)' : 'translate(24px, 0px)')};
  transition: transform 0.3s ease-in-out;
`;

const ContactItem = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  color: #3d405b;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 1rem;
  margin-left: -3px;
  transform: ${({ isActive }) => (isActive ? 'translate(0px, 0px)' : 'translate(24px, 0px)')};
  transition: transform 0.3s ease-in-out;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Contact: React.FC<ContactProps> = ({ isActive }) => {
  return (
    <ContactSection>
      <ContactHeading isActive={isActive}>
        <FaEnvelope /> Contact
      </ContactHeading>
      <ContactInfo isActive={isActive}>
        <ContactItem>
          <FaEnvelope /> Email me at{' '}
          <ContactLink href="mailto:BouljihadNouhaila@gmail.com">BouljihadNouhaila@gmail.com</ContactLink>
        </ContactItem>
      </ContactInfo>

      {/* LinkedIn and GitHub Icons */}
      <IconContainer isActive={isActive}>
        <IconLink href="https://www.linkedin.com/in/nouhaila-bouljihad-255b36234/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/Noah-bjd" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
      </IconContainer>
    </ContactSection>
  );
};

export default Contact;
