/**
 * Coleção Oficial de 20 Avatares Exclusivos do Word Pocket
 * Ilustrações 3D semi-realistas de animais estudantes com acessórios e iluminação de estúdio.
 */

export interface AvatarItem {
  id: string;
  name: string;
  englishName: string;
  description: string;
  image: string;
  accentColor: string;
  badge: string;
}

export const DEFAULT_AVATAR_ID = 'cat-beanie';

export const AVATARS: AvatarItem[] = [
  {
    id: 'cat-beanie',
    name: 'Milo o Gato',
    englishName: 'Milo the Cat',
    description: 'Gato curioso com touca de tricô azul e olhar atento.',
    image: '/avatars/cat-beanie.jpg',
    accentColor: '#176BFF',
    badge: 'Curioso'
  },
  {
    id: 'fox-headphones',
    name: 'Rusty a Raposa',
    englishName: 'Rusty the Fox',
    description: 'Raposa esperta com fones de ouvido turquesa pronta para ouvir inglês.',
    image: '/avatars/fox-headphones.jpg',
    accentColor: '#00BFA5',
    badge: 'Atenta'
  },
  {
    id: 'owl-glasses',
    name: 'Hoot a Coruja',
    englishName: 'Hoot the Owl',
    description: 'Coruja sábia com óculos redondos dourados e plumagem macia.',
    image: '/avatars/owl-glasses.jpg',
    accentColor: '#6545F5',
    badge: 'Sábia'
  },
  {
    id: 'capybara-scarf',
    name: 'Capi a Capivara',
    englishName: 'Capi the Capybara',
    description: 'Capivara tranquila com cachecol de tricô coral em total paz.',
    image: '/avatars/capybara-scarf.jpg',
    accentColor: '#FF6B4A',
    badge: 'Zen'
  },
  {
    id: 'penguin-jacket',
    name: 'Pip o Pinguim',
    englishName: 'Pip the Penguin',
    description: 'Filhote de pinguim elegante com jaqueta acolchoada azul e amarela.',
    image: '/avatars/penguin-jacket.jpg',
    accentColor: '#176BFF',
    badge: 'Elegante'
  },
  {
    id: 'raccoon-bandana',
    name: 'Bandit o Guaxinim',
    englishName: 'Bandit the Raccoon',
    description: 'Guaxinim explorador com bandana geométrica e sorriso confiante.',
    image: '/avatars/raccoon-bandana.jpg',
    accentColor: '#FF7043',
    badge: 'Explorador'
  },
  {
    id: 'rabbit-headphones',
    name: 'Barnaby o Coelho',
    englishName: 'Barnaby the Rabbit',
    description: 'Coelho alegre com orelhas compridas e fones amarelos brilhantes.',
    image: '/avatars/rabbit-headphones.jpg',
    accentColor: '#FFD447',
    badge: 'Alegre'
  },
  {
    id: 'bear-hoodie',
    name: 'Bruno o Urso',
    englishName: 'Bruno the Bear',
    description: 'Urso acolhedor com moletom azul-marinho e expressão gentil.',
    image: '/avatars/bear-hoodie.jpg',
    accentColor: '#1A365D',
    badge: 'Acolhedor'
  },
  {
    id: 'wolf-scarf',
    name: 'Lobo Solitário',
    englishName: 'Lobo the Wolf',
    description: 'Lobo nobre com cachecol de lã cinza e broche prateado de estrela.',
    image: '/avatars/wolf-scarf.jpg',
    accentColor: '#5C6BC0',
    badge: 'Nobre'
  },
  {
    id: 'otter-backpack',
    name: 'Otto a Lontra',
    englishName: 'Otto the Otter',
    description: 'Lontra brincalhona com mochila de aventureiro e bandana turquesa.',
    image: '/avatars/otter-backpack.jpg',
    accentColor: '#00ACC1',
    badge: 'Aventureiro'
  },
  {
    id: 'deer-glasses',
    name: 'Theo o Cervo',
    englishName: 'Theo the Deer',
    description: 'Cervo distinto com óculos finos e gola alta de tricô verde-azulado.',
    image: '/avatars/deer-glasses.jpg',
    accentColor: '#00897B',
    badge: 'Estudioso'
  },
  {
    id: 'panda-bowtie',
    name: 'Bo o Panda',
    englishName: 'Bo the Panda',
    description: 'Panda dócil com gravata-borboleta de cetim turquesa e olhar doce.',
    image: '/avatars/panda-bowtie.jpg',
    accentColor: '#26A69A',
    badge: 'Amigável'
  },
  {
    id: 'hedgehog-beanie',
    name: 'Spike o Ouriço',
    englishName: 'Spike the Hedgehog',
    description: 'Pequeno ouriço sorridente com gorro amarelo e pompom azul.',
    image: '/avatars/hedgehog-beanie.jpg',
    accentColor: '#FFA000',
    badge: 'Simpático'
  },
  {
    id: 'lion-neckerchief',
    name: 'Leo o Leão',
    englishName: 'Leo the Lion',
    description: 'Filhote de leão corajoso com juba macia, lenço azul e estrela dourada.',
    image: '/avatars/lion-neckerchief.jpg',
    accentColor: '#1565C0',
    badge: 'Corajoso'
  },
  {
    id: 'red-panda-star',
    name: 'Rory o Panda-Vermelho',
    englishName: 'Rory the Red Panda',
    description: 'Panda-vermelho com pelagem canela, bandana estilosa e broche estelar.',
    image: '/avatars/red-panda-star.jpg',
    accentColor: '#E64A19',
    badge: 'Criativo'
  },
  {
    id: 'arctic-fox-hood',
    name: 'Frost a Raposa Ártica',
    englishName: 'Frost the Arctic Fox',
    description: 'Raposa-do-ártico albina com pelagem nevada e fones ciano luminosos.',
    image: '/avatars/arctic-fox-hood.jpg',
    accentColor: '#00BCD4',
    badge: 'Focada'
  },
  {
    id: 'polar-bear-hoodie',
    name: 'Nanook o Urso-Polar',
    englishName: 'Nanook the Polar Bear',
    description: 'Urso-polar majestoso com moletom escuro e halo celestial de gelo.',
    image: '/avatars/polar-bear-hoodie.jpg',
    accentColor: '#3F51B5',
    badge: 'Calmo'
  },
  {
    id: 'tiger-headband',
    name: 'Tiggo o Tigre',
    englishName: 'Tiggo the Tiger',
    description: 'Jovem tigre com pelagem dourada-âmbar brilhante e lenço esportivo azul.',
    image: '/avatars/tiger-headband.jpg',
    accentColor: '#EF6C00',
    badge: 'Determinado'
  },
  {
    id: 'koala-headphones',
    name: 'Koby o Coala',
    englishName: 'Koby the Koala',
    description: 'Coala dócil com fones de estúdio amarelos e pelagem cinza-prata macia.',
    image: '/avatars/koala-headphones.jpg',
    accentColor: '#FBC02D',
    badge: 'Tranquilo'
  },
  {
    id: 'husky-scarf',
    name: 'Storm o Husky',
    englishName: 'Storm the Husky',
    description: 'Husky Siberiano com olhos expressivos, pelagem prata-gelo e cachecol escuro.',
    image: '/avatars/husky-scarf.jpg',
    accentColor: '#1E88E5',
    badge: 'Leal'
  }
];

export const VISITOR_AVATAR_STORAGE_KEY = 'wordpocket_visitor_avatar';

/**
 * Retorna o objeto de avatar completo pelo ID ou o padrão caso não encontrado
 */
export function getAvatarById(id?: string | null): AvatarItem {
  if (!id) {
    return AVATARS[0];
  }
  const found = AVATARS.find((a) => a.id === id);
  return found || AVATARS[0];
}

/**
 * Obtém o avatar salvo localmente para o visitante
 */
export function getStoredVisitorAvatar(): string {
  try {
    const saved = localStorage.getItem(VISITOR_AVATAR_STORAGE_KEY);
    if (saved && AVATARS.some((a) => a.id === saved)) {
      return saved;
    }
  } catch {
    // fallback seguro se localStorage estiver inacessível
  }
  return DEFAULT_AVATAR_ID;
}

/**
 * Salva a escolha de avatar do visitante localmente
 */
export function setStoredVisitorAvatar(id: string): void {
  try {
    localStorage.setItem(VISITOR_AVATAR_STORAGE_KEY, id);
  } catch {
    // fallback seguro
  }
}
