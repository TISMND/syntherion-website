// Minimal: pause hero video when offscreen to save CPU/battery.
const video = document.querySelector(".hero__video");
if (video && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    },
    { threshold: 0.1 }
  );
  io.observe(video);
}
