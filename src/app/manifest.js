export default function manifest() {
  return {
    name: "Laodicea Solutions",
    short_name: "Laodicea Solutions",
    start_url: "/tr",
    display: "standalone",
    background_color: "#60CE70",
    theme_color: "#24A556",
    icons: [
      {
        src: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
    ],
  };
}
