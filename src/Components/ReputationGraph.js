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

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController, // Register LineController
  Title,
  Tooltip,
  Legend
);

const ReputationGraph = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); // To store the chart instance

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new ChartJS(ctx, {
      type: "line", // Specify the chart type
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Reputation",
            data: [500, 1000, 1500, 2200, 2500],
            borderColor: "#3f51b5",
            backgroundColor: "rgba(63, 81, 181, 0.2)", // Subtle background fill
            fill: true,
            tension: 0.4, // Smooth line curve
            pointRadius: 5, // Larger points
            pointBackgroundColor: "#fff", // White points to contrast with the line
            pointBorderColor: "#3f51b5", // Blue border around the points
            pointBorderWidth: 2, // Thicker border around points
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
            color: "#3f51b5", // Title color
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
              color: "#e0e0e0", // Light grid lines
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
              color: "#e0e0e0", // Light grid lines
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
              stepSize: 500, // Step size for y-axis ticks
            },
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Add dependencies here if needed

  return (
    <div
      style={{
        height: "350px", // Increase height for better visual clarity
        borderRadius: "8px", // Rounded corners for the container
        overflow: "hidden", // Hide any overflow content
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow around the chart
        backgroundColor: "#fff", // White background for the chart container
        marginTop: "30px", // Space above the chart
        padding: "20px", // Add padding inside the container for spacing
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ReputationGraph;
