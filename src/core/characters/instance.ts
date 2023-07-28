export class Character {
  /** 名称 */
  name!: string
  /** 描述 */
  description?: string
  /** 立绘 */
  image!: string
  /** 性别 */
  gender!: 'male' | 'female' | 'unknown'
  /** 所属势力 */
  faction!: 'wei' | 'shu' | 'wu' | 'qun' | 'god'
  /** 体力 */
  hp!: number | string
}
