#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';
import primeGame from '../src/games/prime.js';

const userName = askNameAndGreet();
primeGame(userName);
