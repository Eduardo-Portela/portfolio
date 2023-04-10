import styled from "styled-components";
import eazy_home from "../../assets/projects/eazy_home.png";
import web_women from "../../assets/projects/web_women.png";
import tech_sell from "../../assets/projects/tech_sell.png";
import hamburgueria from "../../assets/projects/hamburgueria.png";
import kenzie_empresas from "../../assets/projects/kenzie_empresas.png";
import kenzie_hub from "../../assets/projects/kenzie_hub.png";
import kenzie_pets from "../../assets/projects/kenzie_pets.png";
import open_music from "../../assets/projects/open_music.png";
import pet_info from "../../assets/projects/pet_info.png";
import tech_posters from "../../assets/projects/tech_posters.png";
import git_search from "../../assets/projects/git_search.png";
import nu_kenzie from "../../assets/projects/nu_kenzie.png";
import api_js from "../../assets/projects/api_img.png";
import api_python from "../../assets/projects/api_img2.jpeg";


export const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 0 16px 0 16px;

    @media (min-width: 800px){
        max-width: 1400px
    }
`

export const Main = styled.main`

    .skills{
        color:var(--color-secondary);
        font-size: var(--font-size-28);
        margin: 64px 0 ;
        text-align: center;
    }

    .projects{
        color:var(--color-secondary);
        font-size: var(--font-size-28);
        margin: 64px 0;
        text-align: center;
    }
`

export const DivIntro = styled.div`
    max-width: max-content;
    min-height: 500px;
    margin: 100px auto;
    display:flex;
    flex-direction: column ;
    gap:32px ;

    @media (min-width: 800px){
    display:flex;
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    }

`

export const Intro = styled.div`
    max-width: 400px;


    h1{
        color: var(--color-secondary);
        margin-bottom: 16px;
    }
    p{
        color: var(--color-white);
        text-align: justify;
        line-height: 200%;
        font-style: italic;
    }
`

export const Profile = styled.div`
    
    div{
        display: flex;
        justify-content: center;
    }

    .perfil_1{
        border-radius: 100%;
        max-width: 300px;
        max-height: 300px;

    }



`

export const Citation = styled.div`
    max-width: 400px;
    height:350px;

    h2{
        color: var(--color-secondary);
    }

    p{
        color: var(--color-white);
        text-align: justify;
        line-height: 200%;
        font-style: italic;
    }

    span{
        font-size: var(--font-size-24);
        color: var(--color-secondary);
    }
`

export const Skills = styled.section`
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content:center;

    div{
    text-align: center;
    background-color: #212121;
    width: 8rem;
    aspect-ratio: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 2.5rem;
    cursor: pointer;
    transition: 0.2s;
    border-bottom:2px solid var(--color-secondary);
    }

    div:hover{
        transform: scale(110%);
    }

    p{
        font-size: var(--font-size-18);
        font-weight: 500;
        color: var(--color-secondary);
        margin-bottom: 16px;
    }

    @media(min-width: 800px){
        flex-wrap: wrap;
        align-items: center;
        gap: 4rem;
        justify-content:flex-start;
    }
`

export const Projects = styled.section`
`

export const AllProjects = styled.div`
    width: 100%;
    display: flex;
    gap: 48px;
    overflow-x: scroll;

    &::-webkit-scrollbar{
    width: 5px;
}

    &:-webkit-scrollbar{
    width: 5px;
}

    &::-webkit-scrollbar-thumb, .user-list::-webkit-scrollbar-thumb{
    background-color: var(--color-secondary);
}
    

    div{
        min-width: 300px;
        min-height: 300px;
        width: 320px;
        background-size: cover;
        opacity: 0.5;
        margin-bottom: 70px;
        background-repeat: no-repeat;
    }

    .eazy_home{
        background-image: url(${eazy_home});
        position: relative;
        transition: 1s;
    }

    .kimoveis{
        background-image: url(${api_js});
        background-position: -100px;
        transition: 1s;
    }

    .web_women{
        background-image: url(${web_women});
        transition: 1s;
    }

    .pet_kare{
        background-image: url(${api_python});
        transition: 1s;
    }

    .tech_sell{
        background-image: url(${tech_sell});
        background-position: -100px;
        transition: 1s;
    }

    .hamburgueria{
        background-image: url(${hamburgueria});
        transition: 1s;
    }
    .git_search{
        background-image: url(${git_search});
        transition: 1s;
    }
    .kenzie_empresas{
        background-image: url(${kenzie_empresas});
        transition: 1s;
    }
    .kenzie_hub{
        background-image: url(${kenzie_hub});
        transition: 1s;
    }
    .kenzie_pets{
        background-image: url(${kenzie_pets});
        transition: 1s;
    }
    .open_music{
        background-image: url(${open_music});
        transition: 1s;
    }
    .pet_info{
        background-image: url(${pet_info});
        transition: 1s;
    }
    .tech_posters{
        background-image: url(${tech_posters});
        transition: 1s;
    }
    .nu_kenzie{
        background-image: url(${nu_kenzie});
        transition: 1s;
    }


    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        opacity: 1;
    }

    div:hover{
        opacity: 1;
        transform: scale(102%);
    }

    
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
        width: 100px;
        height: 32px;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-secondary);
        opacity: 0.5;
        border-radius: 8px;
    }

    button:hover{
        opacity: 1;
    }

`

export const DivTop = styled.section`
    height: 50px;
    position: absolute;
    background-color: var(--color-primary);
    opacity: 0.8;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    display: none;
    transition: 1s;

    button{
        width: 100px;
        height: 32px;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-secondary);
        border-radius: 8px;
    }

    .eazy_home:hover > &, .kimoveis:hover > &, .pet_kare:hover > &, .web_women:hover > &, .tech_sell:hover > &, .hamburgueria:hover > &, .git_search:hover > &, .kenzie_empresas:hover > &,
    .kenzie_hub:hover > &, .kenzie_pets:hover > &, .open_music:hover > &, .pet_info:hover > &, .tech_posters:hover > &, .nu_kenzie:hover > &{
        display: flex;
    }
`

export const DivBottom = styled.section`
    height: 50px;
    position: absolute;
    background-color: var(--color-primary);
    opacity: 0.8;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    display: none;

    button{
        width: 100px;
        height: 32px;
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-secondary);
        border-radius: 8px;
    }

    .eazy_home:hover > &, .web_women:hover > &, .tech_sell:hover > &, .hamburgueria:hover > &, .git_search:hover > &, .kenzie_empresas:hover > &,
    .kenzie_hub:hover > &, .kenzie_pets:hover > &, .open_music:hover > &, .pet_info:hover > &, .tech_posters:hover > &, .nu_kenzie:hover > &{
        display: flex;
    }
`

export const ProjectInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
        color: var(--color-secondary);
        margin-bottom: 16px;
    }
    p{
        color: var(--color-white);
        text-align: justify;
        height: 90px;
        padding-left: 8px;
    }


`

export const Footer = styled.footer`
    margin-top: 100px;
    height: 400px;
    width: 60%;
    margin: 0 auto;

    h2{
        color:var(--color-secondary);
        font-size: var(--font-size-28);
        margin: 64px 0;
        text-align: center;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction:column;
    gap: 12px;

    h3{
        color:var(--color-secondary);
    }

    a{
        color:var(--color-white);
        text-decoration:underline;
    }
`

export const Contacts = styled.div`
   display: flex;
   gap: 64px;
   flex-direction: column;
   justify-content:center;

   @media(min-width:800px){
    flex-direction: row;
   }
`

export const Social_media = styled.div`


    div{
        display: flex;
        align-items: center;
        gap:16px;
        margin-bottom:16px;
    }

    a{
        color:var(--color-white);
        text-decoration:underline;
    }
`

export const Phone_mail = styled.div`

`

export const DivIcon = styled.div`
    background: var(--color-white);
    border-radius:50%;
    min-height: 50px;
    min-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const PhoneMailFlex = styled.div`
    display: flex;
    gap:16px;
    align-items: center;
    margin-bottom: 32px;

    p{
        width:200px;
        color: var(--color-white);
        font-size: var(--font-size-16);
    }

    @media(min-width:425px){
        p{
            font-size: var(--font-size-18);
        }
        }
    @media(min-width:800px){
        p{
            font-size: var(--font-size-24);
        }
    }
`

export const Copyright = styled.div`
    margin-top:64px;
    p{
        color: var(--color-white);
        text-align:center;
    }
`