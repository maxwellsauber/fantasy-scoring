const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return quarterBackScore(player.stats)
    case 'RB':
    case 'WR':
      return runningBackOrWideReceiverScore(player.stats)
    case 'TE':
      return tightEndScore(player.stats)
    default:
      return 0
  }
}

const quarterBackScore = (stats) => {
  const score = stats.passing.yards / 25
    + stats.passing.touchdowns * 6
    + stats.passing.interceptions * -3
    + stats.rushing.yards / 10
    + stats.rushing.touchdowns * 6
    + stats.rushing.fumbles * -3

  return score
}

const runningBackOrWideReceiverScore = (stats) => {
  const score = stats.rushing.yards / 10
    + stats.rushing.touchdowns * 6
    + stats.rushing.fumbles * -3
    + stats.receiving.receptions
    + stats.receiving.yards / 10
    + stats.receiving.touchdowns * 6
    + stats.receiving.fumbles * -3
    + stats.return.kickreturn.yards / 15
    + stats.return.kickreturn.touchdowns * 6
    + stats.return.kickreturn.fumbles * -3
    + stats.return.puntreturn.yards / 15
    + stats.return.puntreturn.touchdowns * 6
    + stats.return.puntreturn.fumbles * -3

  return score
}

const tightEndScore = (stats) => {
  const score = stats.receiving.receptions
    + stats.receiving.yards / 10
    + stats.receiving.touchdowns * 6
    + stats.receiving.fumbles * 3

  return score
}

module.exports = calculateScore