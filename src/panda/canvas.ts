export class Canvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    width: number;
    height: number;

    constructor(element: HTMLCanvasElement) {
        this.canvas = element;
        const context = element.getContext("2d");
        if (!context) throw new Error("error creating rendering context x_x");
        this.context = context;

        this.width = element.clientWidth;
        this.height = element.clientHeight;
    }

    run(
        setup: () => void,
        draw: (dt: number, time: number) => void
    ) {
        let animationID: number;

        const init = () => {
            this.width = this.canvas.clientWidth;
            this.height = this.canvas.clientHeight;

            const scale = window.devicePixelRatio;
            this.canvas.width = Math.floor(this.width * scale);
            this.canvas.height = Math.floor(this.height * scale);
            this.context.scale(scale, scale);

            this.context.lineWidth = 2;
            sessionStorage.getItem("dark") && (this.context.strokeStyle = "white");
            setup();

            window.cancelAnimationFrame(animationID);
            animationID = window.requestAnimationFrame(loop);
        };

        let dt = 0;
        let last = 0;

        const loop = (time: number) => {
            dt = (time - last) / 1000;
            last = time;

            draw(dt, time / 1000);
            animationID = window.requestAnimationFrame(loop);
        };

        init();

        window.addEventListener("resize", init);
        window.addEventListener("dark", () => this.context.strokeStyle = sessionStorage.getItem("dark") ? "white" : "black");
    }
}

