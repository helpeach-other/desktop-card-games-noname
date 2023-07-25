import { type GameModel, p5normal, singled } from './core/gameModels'

const configuration = {
  // 游戏模式
  models: {
    loads: [singled, p5normal] as GameModel[],
  },
}

export default configuration
