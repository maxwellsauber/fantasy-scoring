const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return quarterBackScore(player)
    case 'RB':
    case 'WR':
      return runningBackOrWideReceiverScore(player)
    case 'TE':
      return tightEndScore(player)
    default:
      return 0
  }
}

const quarterBackScore = (player) => {
  const score = player.stats.passing.yards / 25
    + player.stats.passing.touchdowns * 6
    + player.stats.passing.interceptions * -3
    + player.stats.rushing.yards / 10
    + player.stats.rushing.touchdowns * 6
    + player.stats.rushing.fumbles * -3

  return score
}

const runningBackOrWideReceiverScore = (player) => {
  const score = player.stats.rushing.yards / 10
    + player.stats.rushing.touchdowns * 6
    + player.stats.rushing.fumbles * -3
    + player.stats.receiving.receptions
    + player.stats.receiving.yards / 10
    + player.stats.receiving.touchdowns * 6
    + player.stats.receiving.fumbles * -3
    + player.stats.return.kickreturn.yards / 15
    + player.stats.return.kickreturn.touchdowns * 6
    + player.stats.return.kickreturn.fumbles * -3
    + player.stats.return.puntreturn.yards / 15
    + player.stats.return.puntreturn.touchdowns * 6
    + player.stats.return.puntreturn.fumbles * -3

  return score
}

const tightEndScore = (player) => {
  const score = player.stats.receiving.receptions
    + player.stats.receiving.yards / 10
    + player.stats.receiving.touchdowns * 6
    + player.stats.receiving.fumbles * 3

  return score
}

module.exports = calculateScore