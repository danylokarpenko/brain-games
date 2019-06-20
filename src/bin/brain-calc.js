#!/usr/bin/env node
import * as logic from '..';
import brainCalc from '../games/mini-game-calc';

const userName = logic.welcome('What is the result of the expression?');

logic.loop(userName, brainCalc(userName));
