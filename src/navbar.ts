export function NavBar(): string {
  return `<div 
  class="w-20  pt-6 flex flex-col items-center bg-slate-900 border border-gray-500 rounded-md 
  absolute top-1/2 left-[5%] transform 
  -translate-x-1/2 -translate-y-1/2  ">

    <i id="text-btn" class="bi-textarea-t cursor-pointer mb-5 text-3xl text-white "></i>

    <div class="mb-8 h-[24px] w-[24px] relative">
        <input id="image-btn" type="file" accept="image/*"  class="absolute h-[24px] w-[24px] z-20 opacity-0 "/>
        <i class="bi-image text-2xl text-white  -z-10 "></i>
    </div>

    <i id="box-btn" class="bi-bounding-box-circles mb-6 text-2xl text-white cursor-pointer"></i>
    <i id="circle-btn" class="bi-circle mb-6 text-2xl text-white cursor-pointer"></i>

    <div class="mb-8 h-[24px] w-[24px] relative">
        <input id="fill-btn" type="color"  class="absolute h-[24px] w-[24px] z-20 opacity-0 "/>
        <i id="fill-ui" class="bi-square-fill mb-6 text-2xl text-white cursor-pointer"></i>
    </div>

    <i id="delete-btn" class="bi-x-square mb-6 text-2xl text-white cursor-pointer"></i>
    <i id="save-btn" class="bi-save mb-6 text-2xl text-white cursor-pointer"></i>
    <i id="do-btn" class="bi-arrow-clockwise mb-6 text-3xl text-white cursor-pointer"></i>
    <i id="undo-btn" class="bi-arrow-counterclockwise mb-6 text-3xl text-white cursor-pointer"></i>
    
  </div>`;
}
