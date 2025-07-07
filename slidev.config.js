export default ({ mode, command }) => ({
  vite: {
      base: mode === 'production'
      ? '/learn-12-factors-app/'
      : '/',
  },
})