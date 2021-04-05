<script>
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  export let loser = false;
  onMount(() => {
    if (!loser) {
      const rndColor = () => {
        const base = (Math.random() * 360) | 0;
        const color = 275 * ((base / 200) | 0) + (base % 200);
        return (fac) =>
          `hsl(${color}, ${(fac || 1) * 100}%, ${(fac || 1) * 60}%)`;
      };

      class Battery {
        constructor(fireworks) {
          this.fireworks = fireworks;
          this.salve = [];
          this.x = Math.random();
          this.t = 0;
          this.tmod = (20 + Math.random() * 20) | 0;
          this.tmax = 500 + Math.random() * 1000;

          this._shot = (salve) => {
            // console.log(this.x * this.fireworks.width, salve.y);
            if (salve.y < salve.ym) {
              salve.cb = this._prepareExplosion;
            }

            salve.x += salve.mx;
            salve.y -= 0.01;

            const r = Math.atan2(-0.01, salve.mx);

            this.fireworks.engine.strokeStyle = salve.c(0.7);
            this.fireworks.engine.beginPath();

            this.fireworks.engine.moveTo(
              (this.x + salve.x) * this.fireworks.width + Math.cos(r) * 4,
              salve.y * this.fireworks.height + Math.sin(r) * 4
            );

            this.fireworks.engine.lineTo(
              (this.x + salve.x) * this.fireworks.width +
                Math.cos(r + Math.PI) * 4,
              salve.y * this.fireworks.height + Math.sin(r + Math.PI) * 4
            );

            this.fireworks.engine.lineWidth = 3;
            this.fireworks.engine.stroke();

            // this.fireworks.engine.fillRect((this.x + salve.x) * this.fireworks.width, salve.y * this.fireworks.height, 10, 10);
          };

          this._prepareExplosion = (salve) => {
            salve.explosion = [];

            for (let i = 0, max = 32; i < max; i++) {
              salve.explosion.push({
                r: (2 * i) / Math.PI,
                s: 0.5 + Math.random() * 0.5,
                d: 0,
                y: 0,
              });
            }

            salve.cb = this._explode;
          };

          this._explode = (salve) => {
            this.fireworks.engine.fillStyle = salve.c();

            salve.explosion.forEach((explo) => {
              explo.d += explo.s;
              explo.s *= 0.99;
              explo.y += 0.5;

              const alpha = explo.s * 2.5;
              this.fireworks.engine.globalAlpha = alpha;

              if (alpha < 0.05) {
                salve.cb = null;
              }

              this.fireworks.engine.fillRect(
                Math.cos(explo.r) * explo.d +
                  (this.x + salve.x) * this.fireworks.width,
                Math.sin(explo.r) * explo.d +
                  explo.y +
                  salve.y * this.fireworks.height,
                3,
                3
              );
            });

            this.fireworks.engine.globalAlpha = 1;
          };
        }

        pushSalve() {
          this.salve.push({
            x: 0,
            mx: -0.02 * Math.random() * 0.04,
            y: 1,
            ym: 0.05 + Math.random() * 0.5,
            c: rndColor(),
            cb: this._shot,
          });
        }

        render() {
          this.t++;

          if (this.t < this.tmax && this.t % this.tmod === 0) {
            this.pushSalve();
          }

          let rendered = false;

          this.salve.forEach((salve) => {
            if (salve.cb) {
              rendered = true;
              salve.cb(salve);
            }
          });

          if (this.t > this.tmax) {
            return rendered;
          }

          return true;
        }
      }

      class Fireworks {
        constructor() {
          this.canvas = document.querySelector("canvas");
          this.engine = this.canvas.getContext("2d");
          this.stacks = new Map();

          this.resize();
        }

        resize() {
          this.width = window.innerWidth;
          this.height = window.innerHeight;

          this.canvas.setAttribute("width", this.width);
          this.canvas.setAttribute("height", this.height);
        }

        clear() {
          this.engine.clearRect(0, 0, this.width, this.height);
          this.engine.fillStyle = "#222";
          this.engine.fillRect(0, 0, this.width, this.height);
        }

        addBattery() {
          const bat = new Battery(this);
          this.stacks.set(Date.now(), bat);
        }

        render() {
          if (Math.random() < 0.05) {
            this.addBattery();
          }

          this.clear();

          this.stacks.forEach((scene, key) => {
            const rendered = scene.render();

            if (!rendered) {
              this.stacks.delete(key);
            }
          });

          requestAnimationFrame(this.render.bind(this));
        }

        run() {
          for (let i = 0; i < 5; i++) {
            this.addBattery();
          }
          window.addEventListener("resize", this.resize.bind(this));
          this.render();
        }
      }

      let a = new Fireworks();
      a.run();
    }
  });
</script>

{#if !loser}
  <canvas />
{/if}
<div class="actions" class:loser-back={loser}>
  <h3 class:loser><span>{!loser ? "Молодец!" : "Эх!"}</span></h3>
  <button class="btn" on:click={() => dispatch("start")}>Ещё?</button>
</div>

<style>
  canvas {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .actions {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: springgreen;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 100px);
    z-index: 999;
  }
  .loser-back {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
  }
  .loser {
    color: orangered;
  }
  .btn {
    margin-top: 10px;
    outline: none;
    border-radius: 4px;
    border: 2px solid oldlace;
    background-color: transparent;
    height: 35px;
    width: 100px;
    color: oldlace;
    cursor: pointer;
  }
</style>
