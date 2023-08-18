import type { CardType } from './types'

// 卡牌实体
export class CardEntry {
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
