export interface Jogo {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
}

const jogos: Jogo[] = [
  { id: 1, titulo: "Space Raiders", descricao: "Batalhas espaciais.", categoria: "Ação", imagem: "https://picsum.photos/seed/a1/300/200" },
  { id: 2, titulo: "Farm Valley", descricao: "Cuide da fazenda.", categoria: "Simulação", imagem: "https://picsum.photos/seed/a2/300/200" },
  { id: 3, titulo: "Dark Dungeon", descricao: "Explore masmorras.", categoria: "RPG", imagem: "https://picsum.photos/seed/a3/300/200" },
  { id: 4, titulo: "Speed Rush", descricao: "Corridas rápidas.", categoria: "Corrida", imagem: "https://picsum.photos/seed/a4/300/200" },
  { id: 5, titulo: "Mind Puzzle", descricao: "Quebra-cabeças.", categoria: "Puzzle", imagem: "https://picsum.photos/seed/a5/300/200" },
  { id: 6, titulo: "Goal Master", descricao: "Futebol online.", categoria: "Esporte", imagem: "https://picsum.photos/seed/a6/300/200" },
];

export default jogos;