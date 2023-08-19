/**
 * 标包
 *
 * 实现角色需要非常多的时间与精力，
 * 本项目以学习为主，所以只实现两个角色。
 */

import { Character, Skill } from './entry'

class JianXiong extends Skill {
  name = '奸雄'
  description = '当你受到伤害后，你可以获得伤害来源的一张牌。'
  trigger = Skill.Trigger.DamageEnd
  effect() {
    this.player.handCards.push(this.storage.getCurrentCard())
  }
}

class RenDe extends Skill {
  name = '仁德'
  description = '出牌阶段，你可以将任意张手牌交给其他角色。当你以此法于一回合内给出第二张牌时，你回复1点体力。'
  trigger = Skill.Trigger.Play
  async effect() {
    const selectedCards = await this.ui.selectCards()
    const selectedPlayer = await this.ui.selectPlayer()
    selectedPlayer.handCards.push(...selectedCards)
    if (this.player.handCards.length === 2)
      this.player.upHp()
  }
}

/** 曹操 */
class CaoCao extends Character {
  name = '曹操'
  description = '魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。'
  image = '@/assets/images/characters/cao-cao.jpg'
  gender = Character.Gender.Male
  faction = Character.Faction.Wei
  hp = 4
  skills = [JianXiong]
}

/** 刘备 */
class LiuBei extends Character {
  name = '刘备'
  description = '先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。'
  image = '@/assets/images/characters/liu-bei.jpg'
  gender = Character.Gender.Male
  faction = Character.Faction.Shu
  hp = 4
  skills = [RenDe]
}

const standardCharacters = [
  CaoCao,
  LiuBei,
]

export default standardCharacters
