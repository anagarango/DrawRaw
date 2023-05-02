import Head from 'next/head';
import { useState } from 'react';
import {useDrawing} from '../../hooks/useDraw'

export default function Home(){
  const { canvasRef, onMouseDown, clear } = useDrawing(drawLine)
  const [ brushColor, setBrushColor ] = useState("#000")
  const [ brushWidth, setBrushWidth ] = useState(5)

  function drawLine({ prevPoint, currentPoint, ctx }: { prevPoint: any; currentPoint: any; ctx: any}) {
    const currX = currentPoint.x;
    const currY = currentPoint.y;
    const lineColor = brushColor;
    const lineWidth = brushWidth;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <>
    <Head>
      <title>DrawRaw</title>
    </Head>
    <div className="w-screen h-screen flex items-center justify-between bg-sky-200 overflow-hidden">
      <div className='flex flex-col w-[70vw] h-screen items-center '>
        <img src="/Easel.svg" className='h-full min-w-[423px]' />
        <canvas
          onMouseDown={onMouseDown}
          ref={canvasRef}
          height={500}
          width={500}
          id="canvas"
          className="shadow-lg rounded-sm absolute top-[15%] bg-[#F5F4F1] translate-y-[20%] trans hover:cursor-[url('/paint-brush.png'),_pointer]"
        />
      </div>
      <div className='flex w-[30vw] flex-col items-center'>
        <div className='flex flex-col bg-[url("/palette.png")] bg-contain bg-no-repeat min-w-[380px] max-w-[380px] pb-10'>
          <div className='w-[50px] h-[50px] bg-black rounded-full relative top-[250px] left-[50px]' onClick={()=>setBrushColor("black")}/>
          <div className='w-[50px] h-[50px] bg-red-600 rounded-full relative top-[130px] left-[30px]' onClick={()=>setBrushColor("rgb(220 38 38)")}/>
          <div className='w-[50px] h-[50px] bg-orange-500 rounded-full relative top-[10px] left-[60px]' onClick={()=>setBrushColor("rgb(249 115 22)")}/>
          <div className='w-[50px] h-[50px] bg-blue-600 rounded-full relative top-[-100px] left-[120px]' onClick={()=>setBrushColor("rgb(37 99 235)")}/>
          <div className='w-[50px] h-[50px] bg-green-600 rounded-full relative top-[-170px] left-[200px]' onClick={()=>setBrushColor("rgb(22 163 74)")}/>
          <div className='w-[50px] h-[50px] bg-yellow-300 rounded-full relative top-[-170px] left-[270px]' onClick={()=>setBrushColor('rgb(253 224 71)')}/>
          <div className='w-[50px] h-[50px] bg-purple-600 rounded-full relative top-[-140px] left-[300px]' onClick={()=>setBrushColor('rgb(147 51 234)')}/>
          <div className='w-[50px] h-[50px] bg-pink-600 rounded-full relative top-[-110px] left-[270px]' onClick={()=>setBrushColor('rgb(236 72 153)')}/>
          <img src="/eraser.png" className='w-[50px] h-[50px] relative top-[-220px] left-[170px]' onClick={()=>setBrushColor('#F5F4F1')} />
        </div>
        <div className='flex items-center justify-center pb-10'>
          <div className={brushWidth == 5 ? 'w-[30px] h-[30px] bg-black rounded-full' : 'w-[30px] h-[30px] border-2 border-black rounded-full'} onClick={()=>setBrushWidth(5)}/>
          <div className={brushWidth == 10 ? 'w-[45px] h-[45px] bg-black rounded-full mx-3' : 'w-[45px] h-[45px] border-2 border-black rounded-full mx-3'} onClick={()=>setBrushWidth(10)}/>
          <div className={brushWidth == 15 ? 'w-[60px] h-[60px] bg-black rounded-full' : 'w-[60px] h-[60px] border-2 border-black rounded-full'} onClick={()=>setBrushWidth(15)}/>
        </div>
        <button type="button" onClick={clear} className="border-2 border-black w-fit p-2 rounded-md">Erase your beautiful canvas</button>
      </div>
      
    </div>
    </>
  );
};