/** UI事件 */
export class UIEvent<T = any> extends Event {
  detail: T
  constructor(type: string, detail?: T) {
    super(type)
    this.detail = detail as T
  }
}

/** 回合事件 */
export class StageEvent<T = any> extends Event {
  detail: T
  constructor(type: string, detail?: T) {
    super(type)
    this.detail = detail as T
  }
}

/** 存储事件 */
export class StorageEvent<T = any> extends Event {
  detail: T
  constructor(type: string, detail?: T) {
    super(type)
    this.detail = detail as T
  }
}

/** 系统事件 */
export class SystemEvent<T = any> extends Event {
  detail: T
  constructor(type: string, detail?: T) {
    super(type)
    this.detail = detail as T
  }
}
