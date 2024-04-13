import Image from "next/image";
import AboutImage from "../public/assets/about.jpg";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou eu</h2>
          <p className="py-2">
            Meu nome é Rafael e sou Bacharel em Ciências e Tecnologia pela
            Universidade Federal do Rio Grande do Norte (UFRN) e recentemente
            concluí uma Pós-Graduação em Desenvolvimento de Software pelo
            Instituto Metrópole Digital. Em 2022-2023, participei da Residência
            Técnica do Instituto Metrópole Digital em parceria com o Tribunal
            Superior do Trabalho (TST), onde desenvolvi uma aplicação web para
            acompanhamento de sessões em tempo real. A aplicação foi
            desenvolvida de acordo com o padrão gov.br, utilizando as
            tecnologias NextJS, Typescript, Tailwind e Jest no Front-End.
          </p>
          <p className="py-2">
            Possuo fluência em leitura de inglês e conhecimento básico de
            comunicação na língua. Além disso, estou fazendo 3 cursos online
            para solidificar os conhecimentos, como o Curso Web Moderno Completo
            com JavaScript + Projetos, Java 2022 COMPLETO: Do Zero ao
            Profissional + Projetos e Next.js e React - Curso Completo - Aprenda
            com Projetos.
          </p>
          <Link href="/" className="py-2 underline cursor-pointer">
            Confira alguns dos meus projetos mais recentes.
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image alt="/" src={AboutImage} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
