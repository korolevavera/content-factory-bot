const User = {
  create({ id, firstName, username }) {
    if (!id) throw new Error('User id is required');
    return {
      id,
      firstName: firstName || 'Пользователь',
      username: username || null,
      createdAt: new Date().toISOString()
    };
  },

  getLevel(xp) {
    return Math.floor(xp / 50) + 1;
  },

  getXpForNextLevel(xp) {
    return 50 - (xp % 50);
  }
};

module.exports = User;
