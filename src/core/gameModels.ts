/** 游戏模式 */
export interface GameModel {
  /** 名称 */
  name: string
  /** url path */
  routePath: string
  /** 描述 */
  description?: string
}

/** 单挑 */
export const singled: GameModel = {
  name: '单挑',
  routePath: '/singled',
  description: '单挑模式',
}

/** 五人场 */
export const p5normal: GameModel = {
  name: '五人场',
  routePath: '/p5-normal',
  description: '五人场模式',
}
