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

const quarterBackScore = (p) => {
  const score = p.passing.yards / 25
    + p.passing.touchdowns * 6
    + p.passing.interceptions * -3
    + p.rushing.yards / 10
    + p.rushing.touchdowns * 6
    + p.rushing.fumbles * -3

  return score
}

const runningBackOrWideReceiverScore = (p) => {
  const score = p.rushing.yards / 10
    + p.rushing.touchdowns * 6
    + p.rushing.fumbles * -3
    + p.receiving.receptions
    + p.receiving.yards / 10
    + p.receiving.touchdowns * 6
    + p.receiving.fumbles * -3
    + p.return.kickreturn.yards / 15
    + p.return.kickreturn.touchdowns * 6
    + p.return.kickreturn.fumbles * -3
    + p.return.puntreturn.yards / 15
    + p.return.puntreturn.touchdowns * 6
    + p.return.puntreturn.fumbles * -3

  return score
}

const tightEndScore = (p) => {
  const score = p.receiving.receptions
    + p.receiving.yards / 10
    + p.receiving.touchdowns * 6
    + p.receiving.fumbles * 3

  return score
}

module.exports = calculateScore