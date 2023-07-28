/**
 * 标包
 *
 * 实现角色需要非常多的时间与精力，
 * 本项目以学习为主，所以只实现两个角色。
 */

interface Character {
  /** 名称 */
  name: string
  /** 描述 */
  description?: string
  /** 立绘 */
  image: string
  /** 性别 */
  gender: 'male' | 'female' | 'unknown'
  /** 所属势力 */
  faction: 'wei' | 'shu' | 'wu' | 'qun' | 'god'
  /** 体力 */
  hp: number | string
}

/** 曹操 */
const CaoCao: Character = {
  name: '曹操',
  description: '魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。',
  image: '@/assets/images/characters/cao-cao.jpg',
  gender: 'male',
  faction: 'wei',
  hp: 4,
}

/** 刘备 */
const LiuBei: Character = {
  name: '刘备',
  description: '先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。',
  image: '@/assets/images/characters/liu-bei.jpg',
  gender: 'male',
  faction: 'wei',
  hp: 4,
}

const standardCharacters = [
  CaoCao,
  LiuBei,
]

export default standardCharacters
