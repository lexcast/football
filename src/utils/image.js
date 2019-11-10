const getLogo = teamId => `/images/logos/${teamId}.png`;

const getPlayer = (playerId, teamId) =>
  `/images/players/${playerId}-${teamId}.png`;

export { getLogo, getPlayer };
