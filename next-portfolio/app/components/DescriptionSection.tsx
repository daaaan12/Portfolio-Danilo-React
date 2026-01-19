// DescriptionSection.js
import React from 'react'
import { useIntl } from 'react-intl'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

import styles from '../scss/descriptionsection.module.scss'
import { AiOutlineFilePdf } from 'react-icons/ai'


import Image from 'next/image'

import { motion } from 'framer-motion'

interface DescriptionSectionProps {
  theme: string;
}

function DescriptionSection({ theme }: DescriptionSectionProps) {
  const intl = useIntl()

  return (
    <motion.section
      className={styles['secao-descricao']}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles['container-descricao']}>
        <div className=''>
          <p>{intl.formatMessage({ id: 'welcome' })}</p>
        </div>
        <h2 style={{ fontSize: '1.5rem' }}>
          {intl.formatMessage({ id: 'hello' })}
        </h2>
        <p style={{ fontSize: '1.1rem' }}>
          {intl.formatMessage({ id: 'skills' })}
        </p>
        <div className={styles['container-sociais']}>
          <a href='https://github.com/daaaan12' data-tip="Acesso ao Github">
            <i className={styles['icones-sociais']} aria-label='Icone Github'>
              <AiFillGithub />
            </i>
          </a>
          <a href='https://www.linkedin.com/in/danilo-costa-de-oliveira-66413a22b/' data-tip="Acesso ao Linkedin">
            <i className={styles['icones-sociais']} aria-label='Icone Linkedin'>
              <AiFillLinkedin />
            </i>
          </a>
          <a href='/curriculoDanilo.pdf' download='curriculoDanilo.pdf' data-tip="Download Curriculo">
            <i className={styles['icones-sociais']} aria-label='Icone Curriculum'>
              <AiOutlineFilePdf />
            </i>
          </a>
        </div>
      </div>
      <div>
        <Image
          src={theme === 'light' ? '/img/DaniloBonecoLight.png' : '/img/DaniloBoneco.png'}
          alt='imagem-boneco'
          width={300}
          height={300}
          style={{ height: 'auto' }}
        />
      </div>
    </motion.section>
  )
}

export default DescriptionSection
