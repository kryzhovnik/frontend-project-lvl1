#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';
import evenGame from '../src/games/even.js';

const userName = askNameAndGreet();
evenGame(userName);
