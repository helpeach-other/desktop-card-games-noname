import { EventEmitter } from 'node:events'
import type { Player } from '../player/entry'

enum Faction {
  /** 魏 */
  Wei,
  /** 蜀 */
  Shu,
  /** 吴 */
  Wu,
  /** 群 */
  Qun,
  /** 神 */
  God,
}

enum Gender {
  /** 男 */
  Male,
  /** 女 */
  Female,
  /** 未知 */
  Unknown,
}

enum Trigger {
  /** 出牌阶段 */
  Play,
  /** 弃牌阶段 */
  Discard,
  /** 回合结束 */
  RoundEnd,
  /** 受到伤害后 */
  DamageEnd,
}

export class Skill extends EventEmitter {
  /** 运行扳机枚举 */
  static Trigger = Trigger

  /** 注入外部依赖 */
  protected storage!: Storage
  // TODO
  protected ui!: any
  protected player!: Player

  /** 名称 */
  name!: string
  /** 描述 */
  description?: string
  /** 语音 */
  audios?: string[]
  /** 运行扳机 */
  trigger!: Trigger

  /** 技能效果 */
  effect() {
    console.warn(`技能 ${this.name} 未实现效果`)
  }
}

export class Character extends EventEmitter {
  /** 势力枚举 */
  static Faction = Faction
  /** 性别枚举 */
  static Gender = Gender

  /** 名称 */
  name!: string
  /** 描述 */
  description?: string
  /** 立绘 */
  image!: string
  /** 性别 */
  gender!: Gender
  /** 所属势力 */
  faction!: Faction
  /** 体力 */
  protected hp!: number | [number, number]
  /** 体力上限 */
  private maxHp!: number

  /** 武将技能 */
  skills: typeof Skill[] = []

  constructor() {
    super()
    this.initMaxHp()
  }

  /** 初始化最大Hp */
  private initMaxHp() {
    if (Array.isArray(this.hp)) {
      this.maxHp = this.hp[1]
      this.hp = this.hp[0]
    }
    else {
      this.maxHp = this.hp
    }
  }

  get hps(): [number, number] {
    return [this.hp as number, this.maxHp]
  }
}
