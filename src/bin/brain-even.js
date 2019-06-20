#!/usr/bin/env node
import * as logic from '..';
import brainEven from '../games/mini-game-even';

const userName = logic.welcome('Answer "yes" if number even otherwise answer "no"');

logic.loop(userName, brainEven(userName));
