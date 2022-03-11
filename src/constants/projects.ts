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
    href: 'https://github.com/hoangtrung1801/portfolio',
    skills: [
      'react', 'chakra ui', 'typescript', 'animation'
    ]
  }, 
  {
    title: 'FoodEnjoy',
    image: foodenjoy,
    href: 'https://github.com/hoangtrung1801/foodenjoy',
    skills: [
      'node.js', 'express.js', 'pug', 'css'
    ]
  },
  {
    title: 'notebook',
    image: notebook,
    href: 'https://github.com/hoangtrung1801/Notebook-app',
    skills: [
      'react', 'redux', 'styled components', 'css'
    ]
  },
  {
    title: 'croma hospital api',
    image: cromahospital,
    href: 'https://github.com/hoangtrung1801/croma-hospital-api',
    skills: [
      'node.js', 'express.js', 'mongodb', 'mongoose', 'redis', 'data structure & algorithm'
    ]
  },
  {
    title: 'online shopping system',
    image: onlineshoppingsystem,
    href: 'https://github.com/hoangtrung1801/online-shopping-system-java',
    skills: [
      'java', 'sql server', 'javafx'
    ]
  }
];

export default projects;