import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const ReputationGraph = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Reputation",
            data: [500, 1000, 1500, 2200, 2500],
            borderColor: "#3f51b5",
            backgroundColor: "rgba(63, 81, 181, 0.2)",
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#3f51b5",
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "User Reputation Over Time",
            font: {
              size: 20,
              weight: "bold",
            },
            padding: {
              bottom: 20,
            },
            color: "#3f51b5",
          },
          tooltip: {
            backgroundColor: "#ffffff",
            titleColor: "#3f51b5",
            bodyColor: "#555",
            borderColor: "#3f51b5",
            borderWidth: 1,
            cornerRadius: 5,
            padding: 10,
            caretSize: 8,
            usePointStyle: true,
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw} reputation points`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#e0e0e0",
            },
            title: {
              display: true,
              text: "Year",
              color: "#555",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
          y: {
            grid: {
              color: "#e0e0e0",
            },
            title: {
              display: true,
              text: "Reputation",
              color: "#555",
              font: {
                size: 14,
                weight: "bold",
              },
            },
            ticks: {
              beginAtZero: true,
              stepSize: 500,
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        height: "350px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        marginTop: "30px",
        padding: "20px",
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ReputationGraph;
