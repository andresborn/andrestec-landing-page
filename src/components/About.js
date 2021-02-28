import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const About = () => {
    const chartData = {
            labels: ['React', 'Bootstrap', 'Python', "Git"],
            datasets:[{
                label: "Tech Skills",
                data: [100, 50, 48, 29],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ]
            }]
    }
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="border border-3 p-3">
        <h1>Hi!</h1>
        <p>
          My name is Andres Born, I'm a React Developer focused on data driven
          services
        </p>
      </div>
      <HorizontalBar
        data={chartData}
        style={{width: "80%", maxHeight: "40vh"}}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default About;
