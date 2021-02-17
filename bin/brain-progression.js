#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';
import progressionGame from '../src/games/progression.js';

const userName = askNameAndGreet();
progressionGame(userName);
