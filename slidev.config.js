export default {
  vite: {
    base: process.env.NODE_ENV === 'production'
      ? '/learn-12-factors-app/'
      : '/',
  },
}
