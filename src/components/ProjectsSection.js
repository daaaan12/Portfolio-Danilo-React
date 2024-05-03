// ProjectsSection.js
import React from 'react';
import { useIntl } from 'react-intl';
import ProjectCard from './ProjectCard';
import '../scss/projectssection.scss';
import logoJump from '../img/logoJump.png';
import logoiPulse from '../img/logoiPulse.png';
import logoGonet from '../img/logoGonet.png';
import logoFibra from '../img/logoFibra.png';

function ProjectsSection() {
  const intl = useIntl();

  return (
    <section className="secao-projetos">
      <h2 className="titulo-projetos">{intl.formatMessage({ id: 'projectTitle' })}</h2>

      <ProjectCard
        title={intl.formatMessage({ id: 'projectTitle1' })}
        imageUrl={logoJump}
        projectUrl="https://www.jumpindoorpark.com.br"
        description={intl.formatMessage({ id: 'projectDescription1' })}
      />

      <ProjectCard
        title={intl.formatMessage({ id: 'projectTitle2' })}
        imageUrl={logoiPulse}
        projectUrl="https://www.ipulseagencia.com.br"
        description={intl.formatMessage({ id: 'projectDescription2' })}
      />

      <ProjectCard
        title={intl.formatMessage({ id: 'projectTitle3' })}
        imageUrl={logoGonet}
        projectUrl="https://www.gonetfibra.com.br"
        description={intl.formatMessage({ id: 'projectDescription3' })}
      />

      <ProjectCard
        title={intl.formatMessage({ id: 'projectTitle4' })}
        imageUrl={logoFibra}
        projectUrl="https://www.fibraspeed.com.br"
        description={intl.formatMessage({ id: 'projectDescription4' })}
      />

    </section>
  );
}

export default ProjectsSection;
