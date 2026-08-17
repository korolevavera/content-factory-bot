const XP_PER_LESSON = 10;

const Progress = {
  create() {
    return {
      completedLessons: [],
      streak: 0,
      lastVisit: null,
      xp: 0
    };
  },

  completeLesson(progress, courseId, lessonId) {
    const key = `${courseId}-${lessonId}`;
    if (progress.completedLessons.includes(key)) {
      return { ...progress, alreadyCompleted: true };
    }

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let newStreak = 1;
    if (progress.lastVisit === today) {
      newStreak = progress.streak;
    } else if (progress.lastVisit === yesterday) {
      newStreak = progress.streak + 1;
    }

    return {
      completedLessons: [...progress.completedLessons, key],
      streak: newStreak,
      lastVisit: today,
      xp: progress.xp + XP_PER_LESSON,
      alreadyCompleted: false
    };
  },

  getTotalCompleted(progress) {
    return progress.completedLessons.length;
  }
};

module.exports = Progress;
