const express = require('express');
const path = require('path');
const CourseService = require('../services/CourseService');
const ProgressService = require('../services/ProgressService');
const aiMentor = require('../adapters/aiMentor');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public'), { setHeaders: (res, filePath) => {
  if (filePath && filePath.endsWith('.html')) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
  }
}}));

app.get('/api/courses', (req, res) => {
  const courses = CourseService.getAllCourses();
  res.json(courses);
});

app.get('/api/platforms', (req, res) => {
  const platforms = CourseService.getPlatforms();
  res.json(platforms);
});

app.get('/api/courses/:id', (req, res) => {
  const course = CourseService.getCourseById(req.params.id);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
});

app.get('/api/courses/platform/:platform', (req, res) => {
  const courses = CourseService.getCoursesByPlatform(req.params.platform);
  res.json(courses);
});

app.get('/api/progress/:userId', (req, res) => {
  const progress = ProgressService.getProgress(req.params.userId);
  res.json(progress);
});

app.get('/api/stats/:userId', (req, res) => {
  const stats = ProgressService.getStats(req.params.userId);
  res.json(stats);
});

app.post('/api/progress', (req, res) => {
  const { userId, courseId, lessonId } = req.body;
  if (!userId || !courseId || !lessonId) {
    return res.status(400).json({ error: 'userId, courseId, and lessonId are required' });
  }
  const progress = ProgressService.completeLesson(userId, courseId, lessonId);
  res.json(progress);
});

app.post('/api/ai-mentor', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }
  const response = aiMentor.getResponse(message);
  res.json({ response });
});

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`Content Factory running on port ${PORT}`);
});

module.exports = { app, server };
