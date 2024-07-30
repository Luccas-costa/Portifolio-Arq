// types.ts
export interface Language {
  navbar: {
    Projetos: string;
    Sobre: string;
    Contato: string;
    Idioma: string;
    MenuIdioma: {
      Portugues: string;
      English: string;
      Español: string;
    };
    Login: string;
  };
  hero: {};
  Projetos: {};
  About: {
    title: string;
    "about-me": string;
  };
  Questions: {
    title: string;
    QuestionsFeed: Array<{
      id: number;
      Question: string;
      Response: string;
    }>;
  };
  Contato: {
    title: string;
    description: string;
    option1: string;
    option2: string;
    btnlogin: string;
    placeholder1: string;
    placeholder2: string;
    btnsend: string;
  };
}
