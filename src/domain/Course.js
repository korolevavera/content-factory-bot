const Course = {
  create({ id, title, description, icon, color, platform, lessons }) {
    if (!id || !title || !Array.isArray(lessons)) {
      throw new Error('Invalid course data: id, title, and lessons array required');
    }
    return { id, title, description, icon, color, platform, lessons };
  },

  getLessonCount(course) {
    return course.lessons.length;
  },

  getCompletedCount(course, completedLessons) {
    return course.lessons.filter(l =>
      completedLessons.includes(`${course.id}-${l.id}`)
    ).length;
  },

  getProgressPercent(course, completedLessons) {
    const total = this.getLessonCount(course);
    if (total === 0) return 0;
    return (this.getCompletedCount(course, completedLessons) / total) * 100;
  }
};

module.exports = Course;
