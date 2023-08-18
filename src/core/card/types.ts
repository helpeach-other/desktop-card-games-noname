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
