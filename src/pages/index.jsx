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
    <div className="w-screen h-screen flex justify-center items-center">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width={750}
        height={750}
        className="border border-black rounded-md"
      />
    </div>
  );
};