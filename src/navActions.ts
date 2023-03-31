import { fabric } from "fabric";
import canvas from "./main";

export function Text() {
  let el = new fabric.Textbox("Hello World");
  canvas.add(el);
}

export function Image(data: string) {
  fabric.Image.fromURL(data, (img) => {
    canvas.add(img);
  });
}

export function Box() {
  let el = new fabric.Rect({ height: 100, width: 100, fill: "red" });
  canvas.add(el);
}

export function Circle() {
  let el = new fabric.Circle({ radius: 50, fill: "red" });
  canvas.add(el);
}

export function Delete() {
  canvas.getActiveObjects().forEach((obj) => canvas.remove(obj));
}

export function FillColor(color: string) {
  canvas.getActiveObjects().forEach((obj) => obj.set("fill", color));
  canvas.renderAll();
}

export function Save() {
  console.log(canvas.toDataURL());
}
