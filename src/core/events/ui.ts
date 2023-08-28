import { EventEmitter } from 'node:events'
import { nanoid } from 'nanoid'
import type { CardEntry } from '../card/entry'
import type MyselfPlayer from '@/components/Player/MyselfPlayer.vue'

export interface UIComponents {
  myselfPlayer: InstanceType<typeof MyselfPlayer>
}

class UIEventEmitter extends EventEmitter {
  private components!: UIComponents

  constructor() {
    super()

    // 初始化事件
    this.handle('selectCards', () => this.selectCards())
  }

  uuid() {
    return nanoid()
  }

  /** 注册 UI 组件 */
  register(components: Partial<UIComponents>) {
    this.components = {
      ...this.components,
      ...components,
    } as UIComponents
    return this
  }

  invoke(event: string, ...args: any[]) {
    const uuid = this.uuid()
    this.emit(event, uuid, ...args)
    return new Promise((resolve) => {
      this.on(`${event}-done-${uuid}`, (data) => {
        resolve({ data })
        this.removeAllListeners(`${event}-done-${uuid}`)
      })
    })
  }

  handle(event: string, callback: (...args: any[]) => any) {
    this.on(event, async (uuid: string, ...args) => {
      await callback(...args)
      this.emit(`${event}-done-${uuid}`, await callback(...args))
    })
    return this
  }

  /** 选择手牌 */
  selectCards() {
    this.components.myselfPlayer?.selectCards?.()
    // TODO 获取选择的手牌
    return [] as CardEntry[]
  }
}

/** 全局唯一 UI instance */
const UIEventEmitterInstance = new UIEventEmitter()

export default UIEventEmitterInstance

export const registerUIComponents = UIEventEmitterInstance.register.bind(UIEventEmitterInstance)
