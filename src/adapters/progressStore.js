const Progress = require('../domain/Progress');

const userProgress = {};

const progressStore = {
  get(userId) {
    if (!userProgress[userId]) {
      userProgress[userId] = Progress.create();
    }
    return userProgress[userId];
  },

  set(userId, progress) {
    userProgress[userId] = progress;
  },

  clear() {
    Object.keys(userProgress).forEach(key => delete userProgress[key]);
  }
};

module.exports = progressStore;
