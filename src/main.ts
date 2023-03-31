import "./style.css";
import { fabric } from "fabric";
import { Canvas } from "fabric/fabric-impl";
import { NavBar } from "./navbar";
import "fabric-history";
import {
  Box,
  Circle,
  Delete,
  FillColor,
  Image,
  Save,
  Text,
} from "./navActions";

let scale: string = "1";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="h-screen p-32 w-screen  scrollbar-hide grid justify-items-center content-center bg-slate-950 overflow-scroll ">
  <div id="canvas-holder">
    <canvas id="canvas"></canvas>
  </div>
  ${NavBar()}
  <div class=" cursor-pointer absolute bottom-12 right-8 flex items-center justify-between p-4 h-[48px] w-[240px] bg-slate-900 border border-gray-500 rounded-md text-white ">
    <h5 id="scale-ui">${scale}</h5>
    <i class="bi-arrow-up  text-xl text-white "></i>
    <select class="w-full h-full absolute -ml-4 opacity-0 text-black" name="scale" id="scale-drop">
      <option value="0.10">0.10</option>
      <option value="0.30">0.30</option>
      <option value="0.50">0.50</option>
      <option value="0.70">0.70</option>
      <option value="1">1</option>
      <option value="1.25">1.25</option>
      <option value="1.5">1.5</option>
      <option value="2">2</option>
    </select>
  </div>
</div>
`;

let canvasHolder = document.getElementById("canvas-holder") as HTMLElement;

let canvas: Canvas = new fabric.Canvas("canvas", {
  width: 1280,
  height: 720,
  backgroundColor: "white",
});

function Scale(vlaue: string): void {
  canvasHolder.style.scale = vlaue;
  canvasHolder.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

Scale(scale);

interface history extends Canvas {
  undo?: () => void;
  redo?: () => void;
}

let historyCanvas: history = canvas;

let TextBtn = document.getElementById("text-btn") as HTMLElement;
let BoxBtn = document.getElementById("box-btn") as HTMLElement;
let CircleBtn = document.getElementById("circle-btn") as HTMLElement;
let DeleteBtn = document.getElementById("delete-btn") as HTMLElement;
let SaveBtn = document.getElementById("save-btn") as HTMLElement;
let FillBtn = document.getElementById("fill-btn") as HTMLInputElement;
let ImageBtn = document.getElementById("image-btn") as HTMLInputElement;
let DoBtn = document.getElementById("do-btn") as HTMLElement;
let UndoBtn = document.getElementById("undo-btn") as HTMLElement;
let scaleSelector = document.getElementById("scale-drop") as HTMLSelectElement;

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

UndoBtn.addEventListener("click", () => {
  if (historyCanvas.undo != null) historyCanvas.undo();
});

DoBtn.addEventListener("click", () => {
  if (historyCanvas.redo != null) historyCanvas.redo();
});

FillBtn.addEventListener("input", () => {
  FillColor(FillBtn.value);
  let ui = document.getElementById("fill-ui") as HTMLElement;
  ui.style.color = FillBtn.value;
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
  if (e.key === "Delete") Delete();
  if (e.key === "b" && e.ctrlKey) Box();
  if (e.key === "c" && e.ctrlKey) Circle();
  if (e.key === "t" && e.ctrlKey) Text();
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    Save();
  }
  if (e.ctrlKey && e.key === "z") {
    e.preventDefault();
    if (historyCanvas.undo != null) historyCanvas.undo();
  }
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
    if (historyCanvas.redo != null) historyCanvas.redo();
  }
});

scaleSelector.addEventListener("input", () => {
  scale = scaleSelector.value;
  let ui = document.getElementById("scale-ui") as HTMLElement;
  ui.innerText = scale;
  Scale(scale);
});

export default canvas;
