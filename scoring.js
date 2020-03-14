const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return quarterBackScore(player)
    case 'RB':
    case 'WR':
      return runningBackOrWideReceiverScore(player)
    default:
      return 0
  }
}

const quarterBackScore = (player) => {
  let score = 0

  score += player.stats.passing.yards / 25
  score += player.stats.passing.touchdowns * 6
  score += player.stats.passing.interceptions * -3
  score += player.stats.rushing.yards / 10
  score += player.stats.rushing.touchdowns * 6
  score += player.stats.rushing.fumbles * -3

  return score
}

const runningBackOrWideReceiverScore = (player) => {
  let score = 0

  return score
}
module.exports = calculateScore