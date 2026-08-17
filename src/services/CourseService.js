const courses = require('../adapters/coursesData');

const CourseService = {
  getAllCourses() {
    return courses;
  },

  getCourseById(id) {
    return courses.find(c => c.id === id) || null;
  },

  getCoursesByPlatform(platform) {
    return courses.filter(c => c.platform === platform);
  },

  getPlatforms() {
    const platformMap = {
      instagram: { name: 'Instagram', icon: '📷', color: '#E1306C' },
      youtube: { name: 'YouTube', icon: '▶️', color: '#FF0000' },
      tiktok: { name: 'TikTok', icon: '🎵', color: '#000000' },
      general: { name: 'Общее', icon: '🎓', color: '#6c5ce7' },
      ai: { name: 'AI-инструменты', icon: '🤖', color: '#F59E0B' }
    };
    return platformMap;
  }
};

module.exports = CourseService;
