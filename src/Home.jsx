import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const tasks = [
  { link: "/task1", text: "Go to Task 1" },
  { link: "/task", text: "Go to Task 3 and 5" },

];

export const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
         style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/535751713/display_1500/stock-photo-home-page-icon-concept-on-laptop-screen-535751713.jpg')" }}>

      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative z-10 text-center text-white">
        <p className="text-xl mb-10">Assignment task</p>

        <div className="flex space-x-6">
          {tasks.map((task, index) => (
            <Link to={task.link} key={index}>
              <button className="bg-green-600 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
                {task.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
