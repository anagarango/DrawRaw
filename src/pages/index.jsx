import {useDrawing} from '../../hooks/useDraw'

export default function Home(){
  const { canvasRef, onMouseDown } = useDrawing(drawLine)

  function drawLine({ prevPoint, currentPoint, ctx }) {
    const currX = currentPoint.x;
    const currY = currentPoint.y;
    const lineColor = "#000";
    const lineWidth = 5;

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
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-sky-200">
      <img src="/Easel.svg" className='h-screen' />
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        height={500}
        width={800}
        className="shadow-lg rounded-sm absolute top-[20%] bg-[#F5F4F1]"
      />
    </div>
  );
};