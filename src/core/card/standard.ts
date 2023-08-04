/**
 * 标准卡包
 *
 * 详细查看 noname card/standard.js
 */

/** 卡牌类型 */
export enum CardType {
  /** 基本牌 */
  Basic = 1,

  /** 锦囊 - 普通 */
  Trick = 1 << 1,
  /** 锦囊 - 延迟 */
  Delay = 1 << 2,
  /** 锦囊 */
  Tool = Trick | Delay,

  /** 装备 - 武器 */
  Weapon = 1 << 3,
  /** 装备 - 防具 */
  Armor = 1 << 4,
  /** 装备 - 马匹 */
  Horse = 1 << 5,
  /** 装备 - 宝物 */
  Treasure = 1 << 6,

  /** 装备 */
  Equip = Weapon | Armor | Horse | Treasure,

  /** 角色牌 */
  Character = 1 << 9,
}

/** 花色 */
export enum CardSuit {
  /** 黑桃 */
  Spade = 'Spade',
  /** 红桃 */
  Heart = 'Heart',
  /** 梅花 */
  Club = 'Club',
  /** 方块 */
  Diamond = 'Diamond',
}

export const CardSuitStringMap: Record<CardSuit, string> = {
  [CardSuit.Spade]: '♠',
  [CardSuit.Heart]: '♥',
  [CardSuit.Club]: '♣',
  [CardSuit.Diamond]: '♦',
}

export const CardTokenStringMap: Record<number, string> = {
  1: 'A',
  11: 'J',
  12: 'Q',
  13: 'K',
}

/** Card 实例, 暂用 interface 代替 */
export interface CardClass {
  /** 名称 */
  name: string
  /** 描述 */
  description?: string
  /** 立绘 */
  image: string
  /** 类型 */
  type: CardType
}

const Sha: CardClass = {
  name: '杀',
  image: 'src/assets/images/cards/standard/sha.png',
  type: CardType.Basic,
  description: '出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点伤害。',
}

const Shan: CardClass = {
  name: '闪',
  image: 'src/assets/images/cards/standard/shan.png',
  type: CardType.Basic,
  description: '抵消一张【杀】',
}

const Tao: CardClass = {
  name: '桃',
  image: 'src/assets/images/cards/standard/tao.png',
  type: CardType.Basic,
  description: '①出牌阶段，对自己使用，目标角色回复1点体力。②当有角色处于濒死状态时，对该角色使用。目标角色回复1点体力。',
}

const GuoHe: CardClass = {
  name: '过河拆桥',
  image: 'src/assets/images/cards/standard/guo-he.png',
  type: CardType.Trick,
  description: '出牌阶段，对区域里有牌的一名其他角色使用。你弃置其区域里的一张牌。',
}

const JieDao: CardClass = {
  name: '借刀杀人',
  image: 'src/assets/images/cards/standard/jie-dao.png',
  type: CardType.Trick,
  description:
    '出牌阶段，对装备区里有武器牌且有使用【杀】的目标的一名其他角色使用。令其对你指定的一名角色使用一张【杀】，否则将其装备区里的武器牌交给你。',
}

const WuXie: CardClass = {
  name: '无懈可击',
  image: 'src/assets/images/cards/standard/wu-xie.png',
  type: CardType.Trick,
  description: '一张锦囊牌生效前，对此牌使用。抵消此牌对一名角色产生的效果，或抵消另一张【无懈可击】产生的效果。',
}

const Le: CardClass = {
  name: '乐不思蜀',
  image: 'src/assets/images/cards/standard/le.png',
  type: CardType.Delay,
  description: '出牌阶段，对一名其他角色使用。若判定结果不为红桃，跳过其出牌阶段。',
}

const ShanDian: CardClass = {
  name: '闪电',
  image: 'src/assets/images/cards/standard/shan-dian.png',
  type: CardType.Delay,
  description:
    '出牌阶段，对自己使用。若判定结果为黑桃2~9，则目标角色受到3点雷电伤害。若判定不为黑桃2~9，将之移动到下家的判定区里。',
}

const JueDou: CardClass = {
  name: '决斗',
  image: 'src/assets/images/cards/standard/jue-dou.png',
  type: CardType.Trick,
  description:
    '出牌阶段，对一名其他角色使用。由其开始，其与你轮流打出一张【杀】，直到其中一方未打出【杀】为止。未打出【杀】的一方受到另一方对其造成的1点伤害。',
}

const NanMan: CardClass = {
  name: '南蛮入侵',
  image: 'src/assets/images/cards/standard/nan-man.png',
  type: CardType.Trick,
  description: '出牌阶段，对所有其他角色使用。每名目标角色需打出一张【杀】，否则受到1点伤害。',
}

const ShunShou: CardClass = {
  name: '顺手牵羊',
  image: 'src/assets/images/cards/standard/shun-shou.png',
  type: CardType.Trick,
  description: '出牌阶段，对距离为1且区域里有牌的一名其他角色使用。你获得其区域里的一张牌。',
}

const TaoYuan: CardClass = {
  name: '桃园结义',
  image: 'src/assets/images/cards/standard/tao-yuan.png',
  type: CardType.Trick,
  description: '出牌阶段，对所有角色使用。每名目标角色回复1点体力。',
}

const WanJian: CardClass = {
  name: '万箭齐发',
  image: 'src/assets/images/cards/standard/wan-jian.png',
  type: CardType.Trick,
  description: '出牌阶段，对所有其他角色使用。每名目标角色需打出一张【闪】，否则受到1点伤害。',
}

const WuZhong: CardClass = {
  name: '无中生有',
  image: 'src/assets/images/cards/standard/wu-zhong.png',
  type: CardType.Trick,
  description: '出牌阶段，对你使用。你摸两张牌。',
}

const WuGu: CardClass = {
  name: '五谷丰登',
  image: 'src/assets/images/cards/standard/wu-gu.png',
  type: CardType.Trick,
  description:
    '出牌阶段，对所有角色使用。（选择目标后）你从牌堆顶亮出等同于目标数量的牌，每名目标角色获得这些牌中（剩余的）的任意一张。',
}

const HanBing: CardClass = {
  name: '寒冰剑',
  image: 'src/assets/images/cards/standard/han-bing.png',
  type: CardType.Weapon,
  description: '当你因执行【杀】的效果而造成伤害时，若目标角色有能被弃置的牌，则你可以防止此伤害，然后依次弃置目标角色的两张牌。',
}

const RenWang: CardClass = {
  name: '仁王盾',
  image: 'src/assets/images/cards/standard/ren-wang.png',
  type: CardType.Armor,
  description: '锁定技，黑色【杀】对你无效',
}

const BaGua: CardClass = {
  name: '八卦阵',
  image: 'src/assets/images/cards/standard/ba-gua.png',
  type: CardType.Armor,
  description: '当你需要使用或打出一张【闪】时，你可以进行判定。若结果为红色，则你视为使用或打出一张【闪】。',
}

const JueYing: CardClass = {
  name: '绝影',
  image: 'src/assets/images/cards/standard/jue-ying.png',
  type: CardType.Horse,
  description: '锁定技，其他角色计算与你的距离+1。',
}

const DiLu: CardClass = {
  name: '的卢',
  image: 'src/assets/images/cards/standard/di-lu.png',
  type: CardType.Horse,
  description: '锁定技，其他角色计算与你的距离+1。',
}

const ZhuaHuang: CardClass = {
  name: '爪黄飞电',
  image: 'src/assets/images/cards/standard/zhua-huang.png',
  type: CardType.Horse,
  description: '锁定技，其他角色计算与你的距离+1。',
}

const ChiTu: CardClass = {
  name: '赤兔',
  image: 'src/assets/images/cards/standard/chi-tu.png',
  type: CardType.Horse,
  description: '锁定技，你计算与其他角色的距离-1。',
}

const DaWan: CardClass = {
  name: '大宛',
  image: 'src/assets/images/cards/standard/da-wan.png',
  type: CardType.Horse,
  description: '锁定技，你计算与其他角色的距离-1。',
}

const ZiXin: CardClass = {
  name: '紫骍',
  image: 'src/assets/images/cards/standard/zi-xin.png',
  type: CardType.Horse,
  description: '锁定技，你计算与其他角色的距离-1。',
}

const QingLong: CardClass = {
  name: '青龙偃月刀',
  image: 'src/assets/images/cards/standard/qing-long.png',
  type: CardType.Weapon,
  description: '当你使用的【杀】被目标角色使用的【闪】抵消时，你可以对其使用一张【杀】（无距离限制）。',
}

const GuanShi: CardClass = {
  name: '贯石斧',
  image: 'src/assets/images/cards/standard/guan-shi.png',
  type: CardType.Weapon,
  description: '当你使用的【杀】被目标角色使用的【闪】抵消时，你可以弃置两张牌，令此【杀】依然对其造成伤害。',
}

const FangTian: CardClass = {
  name: '方天画戟',
  image: 'src/assets/images/cards/standard/fang-tian.png',
  type: CardType.Weapon,
  description: '你使用的【杀】若是你最后的手牌，你可以额外选择至多两个目标。',
}

const CiXiong: CardClass = {
  name: '雌雄双股剑',
  image: 'src/assets/images/cards/standard/ci-xiong.png',
  type: CardType.Weapon,
  description: '当你使用【杀】指定一名异性的目标角色后，你可以令其选择一项：1.弃置一张手牌；2.令你摸一张牌。',
}

const ZhangBa: CardClass = {
  name: '丈八蛇矛',
  image: 'src/assets/images/cards/standard/zhang-ba.png',
  type: CardType.Weapon,
  description: '你可以将两张手牌当【杀】使用或打出。',
}

const QiLin: CardClass = {
  name: '麒麟弓',
  image: 'src/assets/images/cards/standard/qi-lin.png',
  type: CardType.Weapon,
  description: '当你使用【杀】对目标角色造成伤害时，你可以弃置其装备区里的一张坐骑牌。',
}

const ZhuGe: CardClass = {
  name: '诸葛连弩',
  image: 'src/assets/images/cards/standard/zhu-ge.png',
  type: CardType.Weapon,
  description: '锁定技，你于出牌阶段内使用【杀】无次数限制。',
}

const ZhuQue: CardClass = {
  name: '朱雀羽扇',
  image: 'src/assets/images/cards/standard/zhu-que.png',
  type: CardType.Weapon,
  description: '',
}

const QingGang: CardClass = {
  name: '青釭剑',
  image: 'src/assets/images/cards/standard/qing-gang.png',
  type: CardType.Weapon,
  description: '锁定技，当你使用【杀】指定一名目标角色后，你令其防具技能无效直到此【杀】被抵消或造成伤害。',
}

export const standardCardMap: Record<string, CardClass> = {
  Sha,
  Shan,
  Tao,
  GuoHe,
  JieDao,
  WuXie,
  Le,
  ShanDian,
  JueDou,
  NanMan,
  ShunShou,
  TaoYuan,
  WanJian,
  WuZhong,
  WuGu,
  HanBing,
  RenWang,
  BaGua,
  JueYing,
  DiLu,
  ZhuaHuang,
  ChiTu,
  DaWan,
  ZiXin,
  QingLong,
  GuanShi,
  FangTian,
  CiXiong,
  ZhangBa,
  QiLin,
  ZhuGe,
  ZhuQue,
  QingGang,
}

export const standardCards: [CardSuit, number, CardClass][] = [
  [CardSuit.Spade, 7, Sha],
  [CardSuit.Spade, 8, Sha],
  [CardSuit.Spade, 8, Sha],
  [CardSuit.Spade, 9, Sha],
  [CardSuit.Spade, 9, Sha],
  [CardSuit.Spade, 10, Sha],
  [CardSuit.Spade, 10, Sha],
  [CardSuit.Club, 2, Sha],
  [CardSuit.Club, 3, Sha],
  [CardSuit.Club, 4, Sha],
  [CardSuit.Club, 5, Sha],
  [CardSuit.Club, 6, Sha],
  [CardSuit.Club, 7, Sha],
  [CardSuit.Club, 8, Sha],
  [CardSuit.Club, 8, Sha],
  [CardSuit.Club, 9, Sha],
  [CardSuit.Club, 9, Sha],
  [CardSuit.Club, 10, Sha],
  [CardSuit.Club, 10, Sha],
  [CardSuit.Club, 11, Sha],
  [CardSuit.Club, 11, Sha],
  [CardSuit.Heart, 10, Sha],
  [CardSuit.Heart, 10, Sha],
  [CardSuit.Heart, 11, Sha],
  [CardSuit.Diamond, 6, Sha],
  [CardSuit.Diamond, 7, Sha],
  [CardSuit.Diamond, 8, Sha],
  [CardSuit.Diamond, 9, Sha],
  [CardSuit.Diamond, 10, Sha],
  [CardSuit.Diamond, 13, Sha],
  [CardSuit.Heart, 2, Shan],
  [CardSuit.Heart, 2, Shan],
  [CardSuit.Heart, 13, Shan],
  [CardSuit.Diamond, 2, Shan],
  [CardSuit.Diamond, 2, Shan],
  [CardSuit.Diamond, 3, Shan],
  [CardSuit.Diamond, 4, Shan],
  [CardSuit.Diamond, 5, Shan],
  [CardSuit.Diamond, 6, Shan],
  [CardSuit.Diamond, 7, Shan],
  [CardSuit.Diamond, 8, Shan],
  [CardSuit.Diamond, 9, Shan],
  [CardSuit.Diamond, 10, Shan],
  [CardSuit.Diamond, 11, Shan],
  [CardSuit.Diamond, 11, Shan],
  [CardSuit.Heart, 3, Tao],
  [CardSuit.Heart, 4, Tao],
  [CardSuit.Heart, 6, Tao],
  [CardSuit.Heart, 7, Tao],
  [CardSuit.Heart, 8, Tao],
  [CardSuit.Heart, 9, Tao],
  [CardSuit.Heart, 12, Tao],
  [CardSuit.Diamond, 12, Tao],
  [CardSuit.Spade, 2, BaGua],
  [CardSuit.Club, 2, BaGua],
  [CardSuit.Spade, 5, JueYing],
  [CardSuit.Club, 5, DiLu],
  [CardSuit.Heart, 13, ZhuaHuang],
  [CardSuit.Heart, 5, ChiTu],
  [CardSuit.Spade, 13, DaWan],
  [CardSuit.Diamond, 13, ZiXin],
  [CardSuit.Club, 1, ZhuGe],
  [CardSuit.Diamond, 1, ZhuGe],
  [CardSuit.Spade, 2, CiXiong],
  [CardSuit.Spade, 6, QingGang],
  [CardSuit.Spade, 5, QingLong],
  [CardSuit.Spade, 12, ZhangBa],
  [CardSuit.Diamond, 5, GuanShi],
  [CardSuit.Diamond, 12, FangTian],
  [CardSuit.Heart, 5, QiLin],
  [CardSuit.Heart, 3, WuGu],
  [CardSuit.Heart, 4, WuGu],
  [CardSuit.Heart, 1, TaoYuan],
  [CardSuit.Spade, 7, NanMan],
  [CardSuit.Spade, 13, NanMan],
  [CardSuit.Club, 7, NanMan],
  [CardSuit.Heart, 1, WanJian],
  [CardSuit.Spade, 1, JueDou],
  [CardSuit.Club, 1, JueDou],
  [CardSuit.Diamond, 1, JueDou],
  [CardSuit.Heart, 7, WuZhong],
  [CardSuit.Heart, 8, WuZhong],
  [CardSuit.Heart, 9, WuZhong],
  [CardSuit.Heart, 11, WuZhong],
  [CardSuit.Spade, 3, ShunShou],
  [CardSuit.Spade, 4, ShunShou],
  [CardSuit.Spade, 11, ShunShou],
  [CardSuit.Diamond, 3, ShunShou],
  [CardSuit.Diamond, 4, ShunShou],
  [CardSuit.Spade, 3, GuoHe],
  [CardSuit.Spade, 4, GuoHe],
  [CardSuit.Spade, 12, GuoHe],
  [CardSuit.Club, 3, GuoHe],
  [CardSuit.Club, 4, GuoHe],
  [CardSuit.Heart, 12, GuoHe],
  [CardSuit.Club, 12, JieDao],
  [CardSuit.Club, 13, JieDao],
  [CardSuit.Spade, 11, WuXie],
  [CardSuit.Club, 12, WuXie],
  [CardSuit.Club, 13, WuXie],
  [CardSuit.Spade, 6, Le],
  [CardSuit.Club, 6, Le],
  [CardSuit.Heart, 6, Le],
  [CardSuit.Spade, 1, ShanDian],
  [CardSuit.Spade, 2, HanBing],
  [CardSuit.Club, 2, RenWang],
  [CardSuit.Heart, 12, ShanDian],
  [CardSuit.Diamond, 12, WuXie],
]
