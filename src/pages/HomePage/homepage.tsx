import { Header } from "../../components/Header/header";
import { AllProjects, Buttons, Citation, Contacts, Container, Copyright, DivBottom, DivIcon, DivIntro, DivTop, Footer, Intro, Main, Menu, Phone_mail, PhoneMailFlex, Profile, ProjectInfo, Projects, Skills, Social_media } from "./style";
import perfil_1 from "../../assets/Perfil_1.jpeg";
import {AiFillHtml5, AiFillInstagram,AiFillGithub, AiTwotonePhone} from "react-icons/ai"
import {SiCss3, SiTypescript, SiExpress, SiPostgresql, SiStyledcomponents, SiGmail} from "react-icons/si"
import {TbBrandJavascript, TbApi} from "react-icons/tb"
import {FaNode, FaReact, FaPython, FaWhatsappSquare, FaLinkedin, FaFigma} from "react-icons/fa"
import {DiDjango, DiMongodb} from "react-icons/di"

export const HomePage = () => {
  return (
    <>
      <Container >
        <Header />
        <Main>
          <DivIntro>
            <Intro>
              <h1>Olá, sou Eduardo Portela</h1>
              <p>Desenvolvedor web Full-Stack,
                com amplo conhecimento  em JavaScript, React, Node.js, Python, SQL.
                Já desenvolvi alguns sites em React, e também já desenvolvi
                varias api's rest-full em javascript utilizando node.js, o framework Express e TypeORM,
                como também em python, utilizando django e django-rest-framework.
                Também tenho experiência com Metodologias ágeis e scrum.
                Álem disso Já participei de projetos em equipe onde tive oportunidade de ser designado a 
                simular cargos de TechLead e PO.
              </p>
            </Intro>
            <Profile>
                {/* <img className="profile-circle" src={profile_circle} alt="" /> */}
              <div>
                <img className="perfil_1" src={perfil_1} alt="Profile-Photo" />
              </div>
            </Profile>
            <Citation>
              <h2>Citação</h2>
              <p>“Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso.”
              </p>
              <span>"Bill Gates"</span>
            </Citation>
          </DivIntro>

            <h2 className="skills">Minhas Habilidades</h2>

          <Skills id="skills">
            <div>
              <p>HTML5</p>
              <AiFillHtml5 color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>CSS3</p>
              <SiCss3 color="var(--color-secondary)" size={"4rem"} />
            </div>
            <div>
              <p>JavaScript</p>
              <TbBrandJavascript color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>TypeScript</p>
              <SiTypescript color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Node.js</p>
              <FaNode color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>React</p>
              <FaReact color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Express</p>
              <SiExpress color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Python</p>
              <FaPython color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Django</p>
              <DiDjango color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>PostGreSQL</p>
              <SiPostgresql color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>MongoDb</p>
              <DiMongodb color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Styled-Components</p>
              <SiStyledcomponents color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Api</p>
              <TbApi color="var(--color-secondary)" size={"4rem"}/>
            </div>
            <div>
              <p>Figma</p>
              <FaFigma color="var(--color-secondary)" size={"4rem"}/>
            </div>
          </Skills>
          <h2 className="projects">Projetos</h2>
          <Projects id="projects">
              <AllProjects>
                  <ProjectInfo>
                    <div className="eazy_home">
                      <DivTop id="top">
                          <a href="https://github.com/EazyHome/projeto-final-frontend-t14-m3-grupo3" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href=""><a href="https://projeto-final-frontend-t14-m3-grupo3-nine.vercel.app/" target="blank"><button>Site</button></a></a>
                      </DivBottom>
                    </div>
                    <h3>Eazy-Home</h3>
                    <p>O EazyHome é um aplicativo de serviços residenciais que tem como
                       objetivo conectar quem precisa com quem sabe fazer,
                       facilitando a comunicação e a resolução de problemas domésticos.
                       Foi um projeto desenvolvido numa equipe de 7 pessoas onde foi ótimo trabalhar em equipe.
                       </p>
                  </ProjectInfo>

                  <ProjectInfo>
                    <div className="kimoveis">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/m4-t14-kimoveis-eduardo-portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                    </div>
                    <h3>API KImoveis</h3>
                    <p> É uma API de uma imobiliária que tem como objetivo fazer um CRUD de usuários,
                       fazer login gerando token de autenticação
                       e também cadastrar imóveis e fazer agendamentos de visitas.
                       Tudo com testes automatizados e muitas tratativas de erros.
                       </p>
                  </ProjectInfo>

                <ProjectInfo>
                <div className="nu_kenzie">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/react-entrega-s1-template-nu-kenzie-Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://react-entrega-s1-template-nu-kenzie-eduardo-portela.vercel.app/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Nu-Kenzie</h3>
                  <p>
                    O Nu-kenzie é um aplicativo controlador de finanças que pode auxiliar nas finanças pessoais do dia a dia,
                    sendo possível cadastrar seus gastos e ganhos tendo assim um controle maior das suas finanças.
                  </p>                 
                </ProjectInfo>

                <ProjectInfo>
                    <div className="pet_kare">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/m5-pet-kare-template--Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                    </div>
                    <h3>Pet-Kare</h3>
                    <p>O pet-kare é uma API feita usando a linguagem 
                      Python, utilizando o django e o Django-rest-framework
                      para fazer um CRUD utilizando serializer para tratar os dados das requisições
                      e com tratativas de erros.
                       </p>
                  </ProjectInfo>

                <ProjectInfo>
                <div className="kenzie_hub">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/react-kenzie-hub-eduardo-portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://react-kenzie-hub-eduardo-portela.vercel.app/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Kenzie-hub</h3>
                  <p>O Kenzie Hub é um aplicativo onde você pode se cadastrar e fazer cadastro 
                    das e atualização da senioridade das linguagens que você domina</p>
                </ProjectInfo>
                <ProjectInfo>
                  <div className="git_search">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/gitSearchBase-Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/gitSearchBase-Eduardo-Portela/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Git-Search</h3>
                  <p>
                    O git-search é um aplicativo que usa a API do github para pesquisar perfis
                    e mostrar informações sobre o úsuario desejado, além de salvar no local storage as informações
                    dos 3 ultimos perfis pesquisados.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <div className="hamburgueria">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/react-hamburgueria-da-kenzie-eduardo-portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://react-hamburgueria-da-kenzie-eduardo-portela.vercel.app/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Hamburgueria</h3>
                  <p>
                    A Hamburgueria é um aplicativo, que consome uma API para renderizar os itens do ecommerce
                    e nele você também pode adicionar itens ao carrinho remover e pesquisar pela barra de pesquisa 
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <div className="kenzie_empresas">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/m2-projeto-frotend-empresas-Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/m2-projeto-frotend-empresas-Eduardo-Portela/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3> Kenzie-empresas</h3>
                  <p>
                    O Kenzie-Empresas é um aplicativo completo que permite você logar
                    como usuario comum e admin, dependendo do token passado, você também pode gerenciar os funcionarios e niveis de experiencia deles.
                  </p>
                  
                </ProjectInfo>
                <ProjectInfo>
                  <div className="tech_sell">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/m1-entrega-capstone-ecommerce-Eduardo-Portela-1" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/m1-entrega-capstone-ecommerce-Eduardo-Portela-1/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Tech-Sell</h3>
                  <p>
                    O Tech-Sell, foi o meu primeiro grande projeto utilizando HTML,CSS,JavaScript, puros. 
                    É um ecommerce que permite você adicionar itens no carrinho remover e filtrar pelo menu de navegação e pela barra de pesquisa
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <div className="kenzie_pets">
                      <DivTop id="top">
                          <a href="" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Kenzie-Pets</h3>
                  <p>
                    O Kenzie-Pets, foi o primeiro projeto em grupo que fizemos, tive o papel de TechLead no grupo, onde desenvolvemos uma aplicação,
                    capaz de fazer seu cadastro e cadastrar seu pet, também sendo possivel fazer adoção de pets.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                <div className="web_women">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/webwomen-base-Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/webwomen-base-Eduardo-Portela/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Web-Women</h3>
                  <p>O web-Women é um aplicativo de candidatura de vagas, onde você pode navegar
                    e se candidatar para vagas disponiveis.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                
                  <div className="open_music">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/open-music-base-Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/open-music-base-Eduardo-Portela/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Open-music</h3>
                  <p>
                    O Open-music é um site onde você pode encontrar albuns para comprar, você pode filtar pelo menu de navegação
                    ou pode filtar pela barra de input, esse site também possui um tema dark e light onde você pode alternar livrimente por eles.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <div className="pet_info">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/petinfobase-Eduardo-Portela" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/petinfobase-Eduardo-Portela/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Pet-Info</h3>
                  <p>
                    O Pet-Info é um aplicativo onde você pode se cadastrar e adquirir informações sobre qualquer pet disponivel na API.
                  </p>
                </ProjectInfo>
                <ProjectInfo>
                  <div className="tech_posters">
                      <DivTop id="top">
                          <a href="https://github.com/Eduardo-Portela/css-intermediario-criando-rede-social-Eduardo-Portela-6" target="blank"><button>Repositório</button></a>
                      </DivTop>
                      <DivBottom id="bottom">
                          <a href="https://kenzie-academy-brasil-developers.github.io/css-intermediario-criando-rede-social-Eduardo-Portela-6/" target="blank"><button>Site</button></a>
                      </DivBottom>
                  </div>
                  <h3>Tech-Posters</h3>
                  <p>
                    O Tech-Posters é um aplicativo que simula uma rede social, podendo fazer posts, ler posts em modais, dar follow em outras contas,
                    e dar like em posts que estão ativos.
                  </p>
                </ProjectInfo>

              </AllProjects>
          </Projects>
        </Main>

        <Footer id="contacts">
            <h2>Contatos</h2>
          <Contacts>
          <Menu>
            <h3>Menu</h3>
            <a href="#header">Home</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Projetos</a>
            <a href="#contacts">Contatos</a>
          </Menu>
          <Social_media>
            <div>
              <AiFillInstagram size={"25px"} color="var(--color-secondary)"/>
                <a href="https://www.instagram.com/eduardo_juniorpg/" target="blank">Instagram</a>
            </div>
            <div>
                <FaLinkedin size={"25px"} color="var(--color-secondary)"/>
                <a href="https://www.linkedin.com/in/eduardo-portela-jr/" target="blank">LinkedIn</a>
            </div>
            <div>
              <FaWhatsappSquare size={"25px"} color="var(--color-secondary)"/>
                <a href="https://api.whatsapp.com/send/?phone=5581991505731&text&type=phone_number&app_absent=0" target="blank">WhatsApp</a>
            </div>
            <div>
              <AiFillGithub size={"25px"} color="var(--color-secondary)"/>
                <a href="https://github.com/Eduardo-Portela" target="blank">Github</a>
            </div>
          </Social_media>
          <Phone_mail>
              <PhoneMailFlex>
                <DivIcon>
                  <AiTwotonePhone size={"2.5rem"} color="var(--color-secondary)"/>
                </DivIcon>
                  <p>(81) 9 9150-5731</p>
              </PhoneMailFlex>
              <PhoneMailFlex>
              <DivIcon>
                <SiGmail size={"2rem"} color="var(--color-secondary)"/>
              </DivIcon>
                <p>eduardo.portela.jrr@gmail.com</p>
              </PhoneMailFlex>
          </Phone_mail>
          </Contacts>
          <Copyright>
            <p>Copyright © 2023 Eduardo Portela</p>
          </Copyright>
        </Footer>
      </Container>
    </>
  );
};
