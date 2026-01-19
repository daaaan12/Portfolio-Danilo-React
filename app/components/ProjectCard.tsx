
import React from 'react';

import Image from 'next/image';

import { StaticImageData } from 'next/image';
import styles from '../scss/projectcard.module.scss';

interface ProjectCardProps {
  title: string;
  imageUrl: StaticImageData | string;
  projectUrl: string;
  description: string;
  technologies: string[];
}

import { useIntl } from 'react-intl';
import { motion } from 'framer-motion';

function ProjectCard({ title, imageUrl, projectUrl, description, technologies }: ProjectCardProps) {
  const intl = useIntl();
  return (
    <motion.div
      className={styles['card-projeto']}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles['logo-cards']}>
        <a href={projectUrl}><Image src={imageUrl} alt={title} width={80} style={{ height: 'auto' }} /></a>
      </div>
      <div>
        <div className={styles['descricao-cards']}>
          <h2><a href={projectUrl}>{title}</a></h2>
          <div className={styles['badge-container']}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles['badge']}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className={styles['description-text']}>
          {description}
        </p>
        <div className={styles['card-footer']}>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles['btn-view']}>
            {intl.formatMessage({ id: 'viewProject' })}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
