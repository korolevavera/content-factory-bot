const Progress = require('../domain/Progress');
const store = require('../adapters/progressStore');

const ProgressService = {
  getProgress(userId) {
    return store.get(userId) || Progress.create();
  },

  completeLesson(userId, courseId, lessonId) {
    const current = this.getProgress(userId);
    const updated = Progress.completeLesson(current, courseId, lessonId);
    store.set(userId, updated);
    return updated;
  },

  getStats(userId) {
    const progress = this.getProgress(userId);
    return {
      totalCompleted: Progress.getTotalCompleted(progress),
      xp: progress.xp,
      streak: progress.streak,
      level: Math.floor(progress.xp / 50) + 1,
      xpToNext: 50 - (progress.xp % 50)
    };
  }
};

module.exports = ProgressService;
