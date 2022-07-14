module.exports = {
  email: 'contact@fanlan.net',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/fanlan1210',
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/fanlan1210',
    },
    /*{
      name: 'Instagram',
      url: 'https://www.instagram.com/#',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/#',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/#',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/#',
    },*/
  ],

  navLinks: [
    {
      name: '關於我',
      url: '/#about',
    },
    {
      name: '經歷',
      url: '/#jobs',
    },
    {
      name: '專案',
      url: '/#projects',
    },
    {
      name: '聯絡與更多',
      url: '/#contact',
    },
  ],

  colors: {
    turquoise: '#63ffb4',
    green: '#0a2f0f',
    darkGreen: '#021c05',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
