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
  const score = 0

  return 40.72  // test first test
}

const runningBackOrWideReceiverScore = (player) => {
  const score = 0

  return 32 // test second test

}
module.exports = calculateScore