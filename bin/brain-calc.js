#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';
import calcGame from '../src/games/calc.js';

const userName = askNameAndGreet();
calcGame(userName);
