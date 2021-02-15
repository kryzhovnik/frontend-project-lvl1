#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';
import playEven from '../src/even-game.js';

const userName = askNameAndGreet();
playEven(userName);
