import { Camera, Vector } from "./math";

export class Mesh {
    vertices: Vector[];
    indices: number[][];

    constructor(vertices = [] as number[][], indices = [] as number[][]) {
        this.indices = indices;
        this.vertices = vertices.map((vertex) => new Vector(vertex[0], vertex[1], vertex[2]));
    }

    draw(context: CanvasRenderingContext2D, camera: Camera) {
        for (const path of this.indices) {
            context.beginPath();
            for (const [i, index] of path.entries()) {
                const point = this.vertices[index].project(camera);
                if (i == 0) {
                    context.moveTo(point.x, point.y);
                    continue;
                }

                context.lineTo(point.x, point.y);
            }
            context.stroke();
        }
    }
}

export class Object {
    baseMesh: Mesh;
    mesh: Mesh;

    position: Vector;
    globalPosition: Vector;
    scale: Vector;
    rotation: Vector;
    globalRotation: Vector;

    constructor(mesh: Mesh, position = new Vector(), scale = new Vector(1, 1, 1), rotation = new Vector()) {
        this.baseMesh = mesh;

        this.mesh = new Mesh();
        this.mesh.indices = mesh.indices;
        this.mesh.vertices = mesh.vertices.map((vertex) => new Vector(vertex.x, vertex.y, vertex.z));

        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
        this.globalPosition = new Vector();
        this.globalRotation = new Vector();
    }

    draw(context: CanvasRenderingContext2D, camera: Camera) {
        this.mesh.vertices = this.baseMesh.vertices.map((vertex) => {
            return vertex
                .hadamard(this.scale)
                .rotate(this.rotation)
                .add(this.position)
                .rotate(this.globalRotation)
                .add(this.globalPosition);

        });
        this.mesh.draw(context, camera);
    }
}

export class Cube extends Object {
    constructor(position = new Vector(), size = 1, rotation = new Vector()) {
        const vertices = [
            [-1, -1, -1],
            [1, -1, -1],
            [-1, 1, -1],
            [1, 1, -1],
            [-1, -1, 1],
            [1, -1, 1],
            [-1, 1, 1],
            [1, 1, 1]
        ];

        const indices = [
            [0, 1],
            [1, 3],
            [3, 2],
            [2, 0],
            [2, 6],
            [3, 7],
            [0, 4],
            [1, 5],
            [6, 7],
            [6, 4],
            [7, 5],
            [4, 5]
        ];

        const mesh = new Mesh(vertices, indices);
        super(mesh, position, new Vector(size, size, size), rotation);
    }
}

export class Wheel extends Object {
    constructor(position = new Vector(), radius = 1, width = 1, rotation = new Vector(), resolution = 16) {
        const indices: number[][] = [];
        const vertices: Vector[] = [];

        let vector = new Vector(0, 1, -1);
        const angle = new Vector(0, 0, 2 * Math.PI / resolution);

        for (let i = 0; i < resolution; i++) {
            vertices.push(new Vector(vector.x, vector.y, vector.z));
            vector = vector.rotate(angle);
        }

        vector = new Vector(0, 1, 1);
        for (let i = resolution; i < 2 * resolution; i++) {
            vertices.push(new Vector(vector.x, vector.y, vector.z));
            vector = vector.rotate(angle);
        }

        for (let i = 0; i < resolution; i++) {
            indices.push([
                i,
                (i + 1) % resolution,
                (i + 1) % resolution + resolution,
                i + resolution
            ]);
        }

        const mesh = new Mesh();
        mesh.indices = indices;
        mesh.vertices = vertices;
        super(mesh, position, new Vector(radius, radius, width / 2), rotation);
    }
}

