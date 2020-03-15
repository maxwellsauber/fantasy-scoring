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

const quarterBackScore = (player) => {
  const score = player.passing.yards / 25
    + player.passing.touchdowns * 6
    + player.passing.interceptions * -3
    + player.rushing.yards / 10
    + player.rushing.touchdowns * 6
    + player.rushing.fumbles * -3

  return score
}

const runningBackOrWideReceiverScore = (player) => {
  const score = player.rushing.yards / 10
    + player.rushing.touchdowns * 6
    + player.rushing.fumbles * -3
    + player.receiving.receptions
    + player.receiving.yards / 10
    + player.receiving.touchdowns * 6
    + player.receiving.fumbles * -3
    + player.return.kickreturn.yards / 15
    + player.return.kickreturn.touchdowns * 6
    + player.return.kickreturn.fumbles * -3
    + player.return.puntreturn.yards / 15
    + player.return.puntreturn.touchdowns * 6
    + player.return.puntreturn.fumbles * -3

  return score
}

const tightEndScore = (player) => {
  const score = player.receiving.receptions
    + player.receiving.yards / 10
    + player.receiving.touchdowns * 6
    + player.receiving.fumbles * 3

  return score
}

module.exports = calculateScore