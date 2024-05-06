// DescriptionSection.js
import React from 'react'
import { useIntl } from 'react-intl'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import DaniloBoneco from '../img/DaniloBoneco.png'
import '../scss/descriptionsection.scss'
import { AiOutlineFilePdf } from 'react-icons/ai'


function DescriptionSection () {
  const intl = useIntl()

  return (
    <section className='secao-descricao'>
      <div className='container-descricao'>
        <div className=''>
          <p>{intl.formatMessage({ id: 'welcome' })}</p>
        </div>
        <h2 style={{ fontSize: '1.5rem' }}>
          {intl.formatMessage({ id: 'hello' })}
        </h2>
        <p style={{ fontSize: '1.1rem' }}>
          {intl.formatMessage({ id: 'skills' })}
        </p>
        <div className='container-sociais'>
          <a href='https://github.com/daaaan12' data-tip="Acesso ao Github"> 
            <i className='icones-sociais '>
              <AiFillGithub />
            </i>
          </a>
          <a href='https://www.linkedin.com/in/danilo-costa-de-oliveira-66413a22b/' data-tip="Acesso ao Linkedin">
            <i className='icones-sociais'>
              <AiFillLinkedin />
            </i>
          </a>
          <a href='/curriculoDanilo.pdf' download='curriculoDanilo.pdf' data-tip="Download Curriculo">
            <i className='icones-sociais' alt='Icone Curriculum'>
              <AiOutlineFilePdf />
            </i>
          </a>
        </div>
      </div>
      <div>
        <img src={DaniloBoneco} alt='imagem-boneco' width='300px' />
      </div>
    </section>
  )
}

export default DescriptionSection
