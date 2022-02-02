type Flake = {
  size: number;
  toX: number;
  toY: number;
  x: number;
  y: number;
};

export class SnowAnimation {
  private context: CanvasRenderingContext2D | null;

  private width: number;

  private height: number;

  private flakes: Flake[];

  private time: number;

  private speed: number;

  private refreshRate: number;

  constructor(
    width: number,
    height: number,
    count: number,
    size: number,
    canvas: HTMLCanvasElement,
    speed = 10,
    refreshRate = 50
  ) {
    canvas.setAttribute('width', width.toString());
    canvas.setAttribute('height', height.toString());

    this.width = width;
    this.height = height;
    this.context = canvas.getContext('2d');
    this.flakes = this.generateFlakes(count, size);
    this.speed = speed;
    this.refreshRate = refreshRate;
    this.time = 0;
    this.start();
  }

  private generateFlakes = (count = 0, size = 0): Flake[] =>
    new Array(count).fill(null).map(() => ({
      x: Math.ceil(Math.random() * this.width),
      y: Math.ceil(Math.random() * this.height),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      size: Math.random() * size,
    }));

  private start = (): void => {
    const { context, width, height, refreshRate, speed } = this;
    if (!context) return;

    context.clearRect(0, 0, width, height);

    this.flakes.forEach((flake) => {
      context.beginPath();
      context.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2, false);
      context.fillStyle = '#eee';
      context.fill();

      flake.x = flake.x + flake.toX * (this.time * 0.05);
      flake.y = flake.y + flake.toY * (this.time * 0.05);

      // Reset position if going outside the board.
      if (flake.x > width) flake.x = 0;
      if (flake.y > height) flake.y = 0;
      if (flake.x < 0) flake.x = width;
      if (flake.y < 0) flake.y = height;
    });

    if (this.time < speed) this.time++;

    setTimeout(this.start, 1000 / refreshRate);
  };
}
