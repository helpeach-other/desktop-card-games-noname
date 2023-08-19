import { EventEmitter } from 'node:events'

/** 卡牌类型 */
enum CardType {
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

// 卡牌实体
export class CardEntry extends EventEmitter {
  /** 卡牌类型 */
  static CardType = CardType

  /** 注入外部依赖 */
  // private storage!: Storage
  // private stage!: Stage
  // private players!: Players

  /** 名称 */
  name!: string
  /** 描述 */
  description?: string
  /** 立绘 */
  image!: string
  /** 类型 */
  type!: CardType

  /** 卡牌效果 */
  effect() {
    console.warn(`卡牌 ${this.name} 未实现效果`)
  }
}
