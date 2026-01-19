// ProjectsSection.js
import React from 'react';
import { useIntl } from 'react-intl';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import styles from '../scss/projectssection.module.scss';
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

import { motion } from 'framer-motion';
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoNodejs, BiLogoTypescript, BiLogoPython } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

function ProjectsSection() {
  const intl = useIntl();

  return (
    <motion.section
      className={styles['secao-projetos']}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className={styles['container-skill']}>
        <h2 className={styles['titulo-projetos']}>{intl.formatMessage({ id: 'projectTitle' })}</h2>
        <div className={styles['card-skill']}>
          <Image src={iconsjs} alt="Icone JavaScript" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techJs' })} />
          <BiLogoTypescript size={30} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techTs' })} />
          <Image src={iconshtml} alt="Icone Html" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techHtml' })} />
          <Image src={iconscss} alt="Icone Css" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techCss' })} />
          <BiLogoTailwindCss size={30} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techTailwind' })} />
          <SiNextdotjs size={30} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techNext' })} />
          <Image src={iconsreact} alt="Icone React" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techReact' })} />
          <BiLogoNodejs size={30} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techNode' })} />
          <Image src={iconsphp} alt="icone Php" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techPhp' })} />
          <BiLogoPython size={30} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techPython' })} />
          <Image src={iconsmysql} alt="Icone Mysql" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techMysql' })} />
          <BiLogoPostgresql size={30} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techPostgres' })} />
          <Image src={iconslaravel} alt="Icone Laravel" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techLaravel' })} />
          <Image src={iconsbootstrap} alt="Icone Bootstrap" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techBootstrap' })} />
          <Image src={iconsvscode} alt="Icone VsCode" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techVscode' })} />
          <Image src={iconslinux} alt="Icone Linux" width={30} style={{ height: 'auto' }} data-tooltip-id="tech-tooltip" data-tooltip-content={intl.formatMessage({ id: 'techLinux' })} />

          <Tooltip id="tech-tooltip" style={{ backgroundColor: "var(--accent-color)", color: "#fff", borderRadius: "8px" }} />
        </div>
      </div>
      <div className={styles['container-cards']}>
        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle1' })}
          imageUrl={iconsreact}
          projectUrl="https://stock-ia-dashboard.vercel.app"
          description={intl.formatMessage({ id: 'projectDescription1' })}
          technologies={['Next.js', 'React', 'Tailwind', 'Prisma', 'PostgreSQL']}
        />

        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle2' })}
          imageUrl={iconsreact}
          projectUrl="https://www.budgetflow.com.br"
          description={intl.formatMessage({ id: 'projectDescription2' })}
          technologies={['Next.js', 'React', 'Tailwind', 'Vercel Blob']}
        />

        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle3' })}
          imageUrl={iconsreact}
          projectUrl="https://controle-financeiro-tau-bay.vercel.app"
          description={intl.formatMessage({ id: 'projectDescription3' })}
          technologies={['Next.js', 'TypeScript', 'Shadcn/ui', 'Prisma']}
        />

        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle4' })}
          imageUrl={iconsreact}
          projectUrl="https://www.gameevolution.com.br"
          description={intl.formatMessage({ id: 'projectDescription4' })}
          technologies={['Next.js', 'Node.js', 'Stripe', 'PostgreSQL']}
        />

        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle5' })}
          imageUrl={iconsreact}
          projectUrl="https://projeto-agente-doc.vercel.app"
          description={intl.formatMessage({ id: 'projectDescription5' })}
          technologies={['Next.js', 'Markdown', 'Tailwind CSS']}
        />

        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle6' })}
          imageUrl={iconsreact}
          projectUrl="https://postpilot-umber.vercel.app"
          description={intl.formatMessage({ id: 'projectDescription6' })}
          technologies={['Next.js', 'OpenAI API', 'NextAuth', 'Prisma']}
        />

        <ProjectCard
          title={intl.formatMessage({ id: 'projectTitle7' })}
          imageUrl={iconsreact}
          projectUrl="https://www.coopeduc.com.br"
          description={intl.formatMessage({ id: 'projectDescription7' })}
          technologies={['Next.js 14', 'Face-api.js', 'Socket.IO', 'PostgreSQL']}
        />
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
