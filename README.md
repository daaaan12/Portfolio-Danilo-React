
<body>
<div class="container">
  <h1>Sobre o Projeto</h1>
  <p>Meu portfólio é uma demonstração do meu trabalho como desenvolvedor web, utilizando React, SCSS e React Intl. Destaca habilidades e projetos com uma experiência de usuário dinâmica e internacionalização integrada.</p>
  
  <h1>Documentação do Projeto</h1>
  
  <h2>Requisitos de Sistema</h2>
  <p>Node.js: Certifique-se de ter o Node.js instalado.<br>
  Navegador Web: Utilize um navegador moderno como Google Chrome, Mozilla Firefox ou Microsoft Edge.</p>
  
  <h2>Instalação</h2>
  <p>Clonagem do Repositório:</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>git clone https://github.com/daaaan12/Portfolio-Danilo-React.git</td>
      <td style="font-size: 0.8rem;">Clona o repositório do GitHub</td>
    </tr>
  </table>
  
  <p>Acesso ao Diretório do Projeto:</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>cd seu-projeto</td>
      <td>Acessa o diretório do projeto clonado</td>
    </tr>
  </table>
  
  <p>Instalação das Dependências:</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>npm install</td>
      <td>Instala todas as dependências do projeto</td>
    </tr>
  </table>
  
  <h2>Pacotes Necessários</h2>
  <p>React Intl: Utilizado para internacionalização do projeto.</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>npm install react-intl</td>
      <td>Instala o pacote React Intl</td>
    </tr>
  </table>
    <br>
      <p>SCSS: Utilizado para estilização do projeto.</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>npm install -g sass</td>
      <td>Instala o pacote SASS</td>
    </tr>
  </table>
        <p>React-icons: Fornece ícones para uso em aplicativos React.</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>npm install react-icons --save</td>
      <td>Instala o react-icons</td>
    </tr>
  </table>
 <p>Google Tag Manager: Permite gerenciar e implantar tags de rastreamento em um site ou aplicativo.</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>npm install react-gtm-module</td>
      <td>Instala o GTM</td>
    </tr>
  </table>
  
  <h2>Execução</h2>
  <p>Iniciar Servidor de Desenvolvimento:</p>
  <table>
    <tr>
      <th>Comando</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>npm start</td>
      <td>Inicia o servidor de desenvolvimento</td>
    </tr>
  </table>
  
  <h2>Estrutura do Projeto</h2> 

├─ 📁 src <br> 
├── 📁 components <br>
│   ├── Header.js <br>
│   ├── DescriptionSection.js <br>
│   ├── ProjectsSection.js <br>
│   ├── LanguageSelector.js <br>
│   └── Footer.js <br>

├── 📁 translations <br>
│   ├── messages_en.json <br>
│   ├── messages_pt.json <br>
│   ├── messages_es.json <br>
│   ├── messages_fr.json <br>
│   ├── messages_ru.json <br>
│   └── messages_jp.json <br>

├── 📁 scss <br>
│   ├── global.scss <br>
│   ├── descriptionsection.scss <br>
│   ├── footer.scss <br>
│   ├── header.scss <br>
│   ├── languageselector.scss <br>
│   └── projectcard.scss <br>
│   └── messages_jp.scss <br>

└─ App.js <br>

<ul>
<li> src: É a pasta raiz do projeto.</li> <br>
<li> components: Contém os componentes reutilizáveis do aplicativo, como o cabeçalho, seção de descrição, seção de projetos, seletor de idioma e rodapé.</li>  <br>
<li>translations: Armazena os arquivos de mensagens JSON para cada idioma suportado pelo aplicativo.</li>  <br>
<li>scss: Contém arquivos de estilo, temos um arquivo global.scss, que fornece estilos globais para o aplicativo.</li>  <br>
<li>App.js: É o arquivo principal do aplicativo, onde você importa e compõe os componentes e define o provedor de internacionalização.</li>
</ul>

<h2>Componentes</h2>

<ul>
  <li><strong>DescriptionSection:</strong> Esta seção contém a apresentação pessoal e habilidades técnicas, juntamente com links para GitHub e LinkedIn. Também inclui uma imagem do autor.</li> <br>
  <li><strong>Footer:</strong> Aqui encontramos informações de rodapé, incluindo direitos autorais e mídias sociais.</li> <br>
  <li><strong>Header:</strong> Esta seção contém a logo do portfólio e links para GitHub e LinkedIn.</li> <br>
  <li><strong>LanguageSelector:</strong> Componente responsável pela alteração do idioma do site entre português e inglês.</li> <br>
  <li><strong>ProjectCard:</strong> Este componente exibe cartões de projetos com detalhes sobre as tecnologias utilizadas e uma descrição detalhada do projeto.</li>
  <li><strong>ProjectsSection:</strong> Aqui estão armazenadas as descrições que serão exibidas nos cartões de ProjectCard.</li> <br>
  <li><strong>App.js:</strong> É o arquivo principal que define a estrutura do site a ser exibida no navegador.</li> <br>
  <li><strong>Estilos (SCSS):</strong> A pasta SCSS contém estilos para cada componente individual, bem como um arquivo global que define estilos estáticos aplicados em todo o site, independentemente do componente.</li> <br>
  <li><strong>Imagens (IMG):</strong> A pasta IMG contém imagens utilizadas no projeto.</li>
</ul>

  
  <h2>Utilização</h2>
  <p>Navegue pelo site e conheça alguns dos meus projetos e informações pessoais.<br>
  Use o seletor de idioma para alternar entre português, inglês e outras línguas.</p>
  
  <h2>Contribuição</h2>
  <p>Contribuições são bem-vindas! Envie para o email <a href="mailto:danilooc1516@gmail.com">danilooc1516@gmail.com</a>.</p>

</div>
</body>

