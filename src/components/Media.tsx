import React from 'react';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

export const media = [
  {
    slug: "",
    children: <Home />
  },
  {
    slug: "projects",
    children: <Projects />
  },
  {
    slug: "contact",
    children: <Contact />
  }
]