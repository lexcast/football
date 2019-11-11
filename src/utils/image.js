const getLogo = teamId => `/images/logos/${teamId}.png`;

const getPlayer = (playerId, teamId) =>
  `/images/players/${playerId}-${teamId}.png`;

const getSignature = playerId => `/images/signatures/${playerId}.png`;

export { getLogo, getPlayer, getSignature };
