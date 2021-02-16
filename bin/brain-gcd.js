#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';
import gcdGame from '../src/games/gcd.js';

const userName = askNameAndGreet();
gcdGame(userName);
