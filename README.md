# Harsh Mali | Engineering Portfolio

[Visit the portfolio](https://maliharsh.github.io/harshmali_portfolio/) · [Experience and résumé](https://maliharsh.github.io/harshmali_portfolio/resume.html) · [LinkedIn](https://www.linkedin.com/in/harshmali)

I’m a mechanical engineering student in Penn State’s Schreyer Honors College. This portfolio documents how I design, build, and test physical systems, from competition robots and flight electronics to tools for analyzing additive manufacturing experiments.

## Project case studies

| Project | What you’ll find |
| --- | --- |
| [ASME EFx robotics](https://maliharsh.github.io/harshmali_portfolio/efx.html) | How I led manufacturing and assembly for a remotely operated waste-collection robot, with drivetrain CAD, build photos, and the competition course. Our team placed third nationally. The [electronics notes](https://maliharsh.github.io/harshmali_portfolio/efx-electronics.html) explain how the mechanical subsystems connect to the team’s controls and power architecture. |
| [Additive manufacturing research](https://maliharsh.github.io/harshmali_portfolio/research.html) | How I used Python and high-speed synchrotron X-ray imaging to study spatter and melt-pool behavior during laser powder bed fusion. The page includes raw and processed videos, annotated frames, and the co-authored paper on bronze and stainless steel. It also introduces my thesis work on the geometry of 3D-printed sand-casting molds. |
| [Reaction Wheel Balance Controller](https://maliharsh.github.io/harshmali_portfolio/reaction-wheel.html) | A single-axis balancing prototype that uses an Arduino, an MPU6050 IMU, and a motor-driven reaction wheel. The case study walks through sensing, feedback, and controller tuning. The [technical documentation](https://maliharsh.github.io/harshmali_portfolio/reaction-wheel-docs.html) includes a CAD viewer, reference model downloads, wiring diagrams, and illustrative firmware. |
| [Prism at HackPSU](https://maliharsh.github.io/harshmali_portfolio/prism.html) | A team-built research discovery tool that expands searches across 18 languages and ranks papers by meaning and keyword relevance. The case study explains how the app retrieves papers, displays the evidence for a match, and compares coverage across languages. |

The [experience page](https://maliharsh.github.io/harshmali_portfolio/resume.html) also covers my work on Nittany Rocket Labs payload electronics and my role mentoring students interested in undergraduate research.

## Repository layout

- Root HTML files contain the home page, résumé, and project case studies. Their paths match the public GitHub Pages URLs.
- `assets/css/` and `assets/js/` contain the shared stylesheet, image lightbox, and interactive CAD viewer.
- `assets/images/` contains photographs, screenshots, diagrams, and video posters.
- `assets/video/` contains the original and browser-ready research clips.
- `assets/reaction-wheel/` contains the CAD models, reference mesh, Arduino example, component planning sheet, and control notes.
- Root PDF files support the publication and résumé links.

## Run locally

The portfolio uses HTML, CSS, and JavaScript. From the repository root, run:

```sh
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). Serving the site over HTTP lets the CAD viewer fetch its mesh file. GitHub Pages serves the static files from the repository.
