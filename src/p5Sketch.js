import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let img;
      let imgLoaded = false;
      let dotSize = 9;
      let maxDistance = 100;

      p.setup = async () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        // Load image asynchronously
        img = await p.loadImage("img1.png");
        img.resize(p.width, p.height);
        imgLoaded = true;
      };

      p.draw = () => {
        if (!imgLoaded) return; // wait until image is loaded

        p.background(255);
        img.loadPixels();

        for (let y = 0; y < img.height; y += dotSize) {
          for (let x = 0; x < img.width; x += dotSize) {
            let index = (x + y * img.width) * 4;

            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let brightness = (r + g + b) / 3;

            let baseRadius = p.map(brightness, 0, 255, dotSize, 0);

            let d = p.dist(p.mouseX, p.mouseY, x + dotSize / 2, y + dotSize / 2);
            let radius = baseRadius * p.constrain(d / maxDistance, 0, 1);

            if (radius > 0.2) {
              p.fill(0);
              p.noStroke();
              p.ellipse(x + dotSize / 2, y + dotSize / 2, radius, radius);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        if (imgLoaded) {
          img.resize(p.width, p.height);
        }
      };
    };

    const myp5 = new p5(sketch, sketchRef.current);
    return () => myp5.remove();
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
