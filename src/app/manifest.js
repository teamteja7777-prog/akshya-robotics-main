export default function manifest() {
  return {
    name: 'Akshaya Robotics | Kids STEM & Robotics Academy',
    short_name: 'Akshaya Robotics',
    description: 'Hands-on robotics, coding, STEM, and AI classes for kids in Mind Space, Hyderabad.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080E4B',
    theme_color: '#080E4B',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
