import { EventEmitter } from 'node:events'
import type { CardEntry } from '../card/entry'
import type { Character } from '../characters/entry'

export class Player extends EventEmitter {
  /** 注入外部依赖 */
  // private storage!: Storage
  // private stage!: Stage
  // private players!: Players

  /** 手牌 */
  handCards: CardEntry[] = []

  /** 装备区 */
  equipCards: CardEntry[] = []

  /** 判定区 */
  judgeCards: CardEntry[] = []

  /** 武将牌 */
  private character!: Character
  /** 当前血量 */
  private hp: number
  /** 最大血量 */
  private maxHp: number

  constructor(character: Character) {
    super()
    this.character = character
    this.hp = character.hps[0]
    this.maxHp = character.hps[1]
  }

  /** 移除手牌 */
  removeHandCard(card: CardEntry) {
    this.handCards.splice(this.handCards.indexOf(card), 1)
  }

  /** 移除装备区 */
  removeEquipCard(card: CardEntry) {
    this.equipCards.splice(this.equipCards.indexOf(card), 1)
  }

  /** 移除判定区 */
  removeJudgeCard(card: CardEntry) {
    this.judgeCards.splice(this.judgeCards.indexOf(card), 1)
  }

  /** 选择手牌 */
  async selectCards(): Promise<CardEntry[]> {
    // TODO
    return []
  }

  /**
   * 更新血量
   * @param hp 更新的血量
   */
  upHp(hp?: number) {
    this.hp = Math.min(hp ?? this.maxHp, this.maxHp)
  }

  /**
   * 恢复血量
   * @param hp 恢复的血量
   */
  recoverHp(hp?: number) {
    this.hp = Math.min(hp ?? (this.hp + 1), this.maxHp)
  }

  /**
   * 抽牌
   * @param count 抽牌数量
   * @returns 抽到的牌
   */
  async draw(count = 1): Promise<CardEntry[]> {
    // TODO
    console.log(`${this.character.name} 抽了 ${count} 张牌`)
    return []
  }
}
