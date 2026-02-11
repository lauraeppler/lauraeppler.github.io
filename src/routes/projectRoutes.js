import React from 'react';
import Shuffle from '../components/projectdetail/Shuffle';
import LocalMessenger from '../components/projectdetail/LocalMessenger';
import FourWays from '../components/projectdetail/FourWays';
import Climex from '../components/projectdetail/Climex';
import Camture from '../components/projectdetail/Camture';
import BounceBall from '../components/projectdetail/BounceBall';
import EatMove from '../components/projectdetail/EatMove';

const projectRoutes = [
  {
    path: '/projekt/SHUFFLE',
    element: <Shuffle />
  },
  {
    path: '/projekt/LocalMessenger',
    element: <LocalMessenger />
  },
  {
    path: '/projekt/FourWays',
    element: <FourWays />
  },
  {
    path: '/projekt/Climex',
    element: <Climex />
  },
  {
    path: '/projekt/Camture',
    element: <Camture />
  },
  {
    path: '/projekt/BounceBall',
    element: <BounceBall />
  },
  {
    path: '/projekt/EatMove',
    element: <EatMove />
  },
];

export default projectRoutes;
