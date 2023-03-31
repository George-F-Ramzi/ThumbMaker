import "./style.css";
import { fabric } from "fabric";
import { Canvas } from "fabric/fabric-impl";
import { NavBar } from "./navbar";
import {
  Box,
  Circle,
  Delete,
  FillCanvasColor,
  Image,
  Save,
  Text,
} from "./navActions";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="h-screen p-32 w-screen relative scrollbar-hide grid justify-items-center content-center bg-slate-950 overflow-scroll ">
  <div id="canvas-holder">
    <canvas id="canvas"></canvas>
  </div>
  ${NavBar()}
</div>
`;

let canvasHolder = document.getElementById("canvas-holder") as HTMLElement;

let canvas: Canvas = new fabric.Canvas("canvas", {
  width: 800,
  height: 720,
  backgroundColor: "white",
});

function Scale(vlaue: number): void {
  canvasHolder.style.scale = String(vlaue);
  canvasHolder.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

Scale(1);

let TextBtn = document.getElementById("text-btn") as HTMLElement;
let BoxBtn = document.getElementById("box-btn") as HTMLElement;
let CircleBtn = document.getElementById("circle-btn") as HTMLElement;
let DeleteBtn = document.getElementById("delete-btn") as HTMLElement;
let SaveBtn = document.getElementById("save-btn") as HTMLElement;
let FillCavBtn = document.getElementById("fill-cav-btn") as HTMLInputElement;
let ImageBtn = document.getElementById("image-btn") as HTMLInputElement;

TextBtn.addEventListener("click", () => {
  Text();
});

BoxBtn.addEventListener("click", () => {
  Box();
});

CircleBtn.addEventListener("click", () => {
  Circle();
});

DeleteBtn.addEventListener("click", () => {
  Delete();
});

SaveBtn.addEventListener("click", () => {
  Save();
});

FillCavBtn.addEventListener("input", () => {
  FillCanvasColor(FillCavBtn.value);
});

ImageBtn.addEventListener("change", () => {
  if (ImageBtn.files != null) {
    let reader = new FileReader();
    reader.readAsDataURL(ImageBtn.files[0]);
    reader.onloadend = () => {
      Image(String(reader.result));
    };
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Delete" || e.key === "d") Delete();
  if (e.key === "b") Box();
  if (e.key === "c") Circle();
  if (e.key === "t") Text();
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    Save();
  }
});

export default canvas;
