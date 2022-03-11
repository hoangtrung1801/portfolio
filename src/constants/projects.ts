import Project from "../types/Project";
import portfolio from '../images/portfolio.png';
import foodenjoy from '../images/foodenjoy.png';
import notebook from '../images/notebook.png';
import cromahospital from '../images/cromahospital.png';
import onlineshoppingsystem from '../images/onlineshoppingsystem.png';

const projects: Project[] = [
  {
    title: 'portfolio',
    image: portfolio,
    skills: [
      'react', 'chakra ui', 'typescript', 'animation'
    ]
  }, 
  {
    title: 'FoodEnjoy',
    image: foodenjoy,
    skills: [
      'node.js', 'express.js', 'pug', 'css'
    ]
  },
  {
    title: 'notebook',
    image: notebook,
    skills: [
      'react', 'redux', 'styled components', 'css'
    ]
  },
  {
    title: 'croma hospital api',
    image: cromahospital,
    skills: [
      'node.js', 'express.js', 'mongodb', 'mongoose', 'redis', 'data structure & algorithm'
    ]
  },
  {
    title: 'online shopping system',
    image: onlineshoppingsystem,
    skills: [
      'java', 'sql server', 'javafx'
    ]
  }
];

export default projects;