import { useCallback, useEffect, useRef } from 'react';
import {
    SNOWMAN_BALL_OFFSET,
  SNOWMAN_BOTTOM_OFFSET,
  SNOWMAN_BOTTOM_RADIUS,
  SNOWMAN_BUTTON_RADIUS,
  SNOWMAN_MIDDLE_RADIUS,
  SNOWMAN_TOP_RADIUS,
} from '../constants';

export default function WoDSnowman() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawTopHat = useCallback((canvasContext: CanvasRenderingContext2D) => {
    const canvasWidthMiddle = canvasContext.canvas.width / 2;
    const yPosition = canvasContext.canvas.height - SNOWMAN_TOP_RADIUS * 2 - SNOWMAN_MIDDLE_RADIUS * 2 - SNOWMAN_BOTTOM_RADIUS * 2 + 36;

    canvasContext.beginPath();
    canvasContext.moveTo(canvasWidthMiddle - 30, yPosition);
    canvasContext.lineTo(canvasWidthMiddle + 30, yPosition);
    canvasContext.lineCap = 'round';
    canvasContext.fillStyle = '#000';
    canvasContext.fillRect(canvasWidthMiddle - 18, yPosition - 36, 36, 36);
    canvasContext.strokeStyle = '#000';
    canvasContext.lineWidth = 4;
    canvasContext.lineCap = 'round';
    canvasContext.stroke();
  }, []);

  const drawTop = useCallback((canvasContext: CanvasRenderingContext2D) => {
    canvasContext.lineWidth = 1;

    canvasContext.beginPath();
    canvasContext.arc(
      canvasContext.canvas.width / 2,
      canvasContext.canvas.height - SNOWMAN_TOP_RADIUS - SNOWMAN_MIDDLE_RADIUS * 2 - SNOWMAN_BOTTOM_RADIUS * 2 + SNOWMAN_BALL_OFFSET * 2,
      SNOWMAN_TOP_RADIUS,
      0,
      Math.PI * 2,
    );
    canvasContext.fillStyle = '#fff';
    canvasContext.fill();
    canvasContext.strokeStyle = '#000';
    canvasContext.lineWidth = 1;
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.arc(
      canvasContext.canvas.width / 2,
      canvasContext.canvas.height - SNOWMAN_TOP_RADIUS - SNOWMAN_MIDDLE_RADIUS * 2 - SNOWMAN_BOTTOM_RADIUS * 2 + SNOWMAN_BALL_OFFSET * 2 - 54,
      SNOWMAN_TOP_RADIUS + 50,
      Math.PI * 0.40,
      Math.PI * 0.60,
    );
    canvasContext.lineWidth = 10;
    canvasContext.lineCap = 'round';
    canvasContext.strokeStyle = 'red';
    canvasContext.stroke();

  }, []);

  const drawMiddle = useCallback((canvasContext: CanvasRenderingContext2D) => {
    canvasContext.beginPath();
    canvasContext.arc(
      canvasContext.canvas.width / 2,
      canvasContext.canvas.height - SNOWMAN_MIDDLE_RADIUS - SNOWMAN_BOTTOM_RADIUS * 2 + SNOWMAN_BALL_OFFSET,
      SNOWMAN_MIDDLE_RADIUS,
      0,
      Math.PI * 2,
    );
    canvasContext.fillStyle = '#fff';
    canvasContext.fill();
    canvasContext.lineWidth = 1;
    canvasContext.stroke();
    canvasContext.beginPath();

    canvasContext.arc(
      canvasContext.canvas.width / 2,
      canvasContext.canvas.height - SNOWMAN_MIDDLE_RADIUS - SNOWMAN_BOTTOM_RADIUS * 2 + SNOWMAN_BALL_OFFSET + 20,
      SNOWMAN_BUTTON_RADIUS,
      0,
      Math.PI * 2,
    );
    canvasContext.fillStyle = '#000';
    canvasContext.strokeStyle = '#000';
    canvasContext.fill();

    canvasContext.arc(
      canvasContext.canvas.width / 2,
      canvasContext.canvas.height - SNOWMAN_MIDDLE_RADIUS - SNOWMAN_BOTTOM_RADIUS * 2 + SNOWMAN_BALL_OFFSET - 8,
      SNOWMAN_BUTTON_RADIUS,
      0,
      Math.PI * 2,
    );
    canvasContext.fillStyle = '#000';
    canvasContext.strokeStyle = '#000';
    canvasContext.fill();

    canvasContext.arc(
      canvasContext.canvas.width / 2,
      canvasContext.canvas.height - SNOWMAN_MIDDLE_RADIUS - SNOWMAN_BOTTOM_RADIUS * 2 + SNOWMAN_BALL_OFFSET + 6,
      SNOWMAN_BUTTON_RADIUS,
      0,
      Math.PI * 2,
    );
    canvasContext.fillStyle = '#000';
    canvasContext.strokeStyle = '#000';
    canvasContext.fill();
  }, []);

  const drawBottom = useCallback((canvasContext: CanvasRenderingContext2D) => {
      canvasContext.beginPath();
      canvasContext.arc(
        canvasContext.canvas.width / 2,
        canvasContext.canvas.height - SNOWMAN_BOTTOM_RADIUS - SNOWMAN_BOTTOM_OFFSET,
        SNOWMAN_BOTTOM_RADIUS,
        0,
        Math.PI * 2,
      );
      canvasContext.fillStyle = '#fff';
      canvasContext.fill();
      canvasContext.lineWidth = 1;
      canvasContext.stroke();
  }, []);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');

    if (context) {
      drawBottom(context);
      drawMiddle(context);
      drawTop(context);
      drawTopHat(context);
    }
  }, []);

  return <canvas height="300" ref={canvasRef} />
}
