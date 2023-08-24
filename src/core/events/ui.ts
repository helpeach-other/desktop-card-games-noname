import { EventEmitter } from 'node:events'
import type { Ref } from 'vue'
import type Card from '@/components/Card.vue'

export interface UIComponents {
  SelectCards: Ref<typeof Card>
}

class UIEventEmitter extends EventEmitter {
  private components!: UIComponents

  constructor() {
    super()

    // 初始化事件
    this.on('selectCards', () => {
      // TODO
    })
    this.on('showSelectCards', () => {
      // TODO
    })
  }

  /** 注册 UI 组件 */
  register(components: Partial<UIComponents>) {
    this.components = {
      ...this.components,
      ...components,
    } as UIComponents
  }

  /** 选择手牌 */
  selectCards() {
    this.emit('selectCards')
  }

  /** 显示选择手牌 */
  showSelectCards() {
    this.emit('showSelectCards')
  }
}

/** 全局唯一 UI instance */
const UIEventEmitterInstance = new UIEventEmitter()

export default UIEventEmitterInstance

export const registerUIComponents = UIEventEmitterInstance.register.bind(UIEventEmitterInstance)
