// ProjectsSection.js
import React from 'react';
import { useIntl } from 'react-intl';
import ProjectCard from './ProjectCard';
import '../scss/projectssection.scss';
import logoJump from '../img/logoJump.png';
import logoiPulse from '../img/logoiPulse.png';
import logoGonet from '../img/logoGonet.png';
import logoFibra from '../img/logoFibra.png';
import logoDgtv from '../img/logoDgtv.png';
import logoElyt from '../img/logoElyt.png';
import logoPrime from '../img/logoPrime.png';
import logoPortal from '../img/logoPortal.png';

import iconsjs from '../img/iconsjs.svg';
import iconshtml from '../img/iconshtml.svg';
import iconscss from '../img/iconscss.png';
import iconsreact from '../img/iconsreact.svg';
import iconsphp from '../img/iconsphp.png';
import iconsmysql from '../img/iconsmysql.png';
import iconslaravel from '../img/iconslaravel.png';
import iconsbootstrap from '../img/iconsbootstrap.svg';
import iconsvscode from '../img/iconsvscode.svg';
import iconslinux from '../img/iconslinux.png';

function ProjectsSection() {
  const intl = useIntl();

  return (
    <section className="secao-projetos">
     
        <div className='container-skill'>
        <h2 className="titulo-projetos">{intl.formatMessage({ id: 'projectTitle' })}</h2>
        <div className="card-skill"> 
          <img src={iconsjs} alt="Icone JavaScript" width={30} />
          <img src={iconshtml} alt="Icone Html" width={30} />
          <img src={iconscss} alt="Icone Css" width={30} />
          <img src={iconsreact} alt="Icone React" width={30} />
          <img src={iconsphp} alt="icone Php" width={30} />
          <img src={iconsmysql} alt="Icone Mysql" width={30} />
          <img src={iconslaravel} alt="Icone Laravel" width={30} />
          <img src={iconsbootstrap} alt="Icone Bootstrap" width={30} />
          <img src={iconsvscode} alt="Icone VsCode" width={30} />
          <img src={iconslinux} alt="Icone Linux" width={30} />

        </div>
        </div>
        <div className='container-cards'>
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

<ProjectCard
        title={intl.formatMessage({ id: 'projectTitle5' })}
        imageUrl={logoElyt}
        projectUrl="https://www.elytengenharia.com.br"
        description={intl.formatMessage({ id: 'projectDescription5' })}
      />

<ProjectCard
        title={intl.formatMessage({ id: 'projectTitle6' })}
        imageUrl={logoPortal}
        projectUrl="https://portalaluminio.com"
        description={intl.formatMessage({ id: 'projectDescription6' })}
      />

<ProjectCard
        title={intl.formatMessage({ id: 'projectTitle7' })}
        imageUrl={logoDgtv}
        projectUrl="https://dgnetsp.tv.br"
        description={intl.formatMessage({ id: 'projectDescription7' })}
      />

<ProjectCard
        title={intl.formatMessage({ id: 'projectTitle8' })}
        imageUrl={logoPrime}
        projectUrl="https://primeclinestetica.com.br"
        description={intl.formatMessage({ id: 'projectDescription8' })}
      />
</div>
    </section>
  );
}

export default ProjectsSection;
