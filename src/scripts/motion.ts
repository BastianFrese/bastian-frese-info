import { animate, inView, stagger } from "motion";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced) {
  inView(
    "[data-reveal]",
    (element) => {
      const el = element as HTMLElement;
      animate(
        el,
        { opacity: [0, 1], y: [18, 0] },
        { duration: 0.55, easing: [0.22, 1, 0.36, 1] },
      );
      return () => {};
    },
    { margin: "0px 0px -10% 0px" },
  );

  const diagram = document.querySelector(".diagram-frame");
  if (diagram) {
    inView(
      diagram,
      () => {
        animate(
          diagram.querySelectorAll("[data-box]"),
          { opacity: [0, 1], y: [10, 0] },
          {
            duration: 0.45,
            delay: stagger(0.09),
            easing: [0.22, 1, 0.36, 1],
          },
        );
        return () => {};
      },
      { margin: "0px 0px -15% 0px" },
    );
  }
}
