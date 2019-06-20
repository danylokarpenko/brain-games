#!/usr/bin/env node
import * as logic from '..';
import brainPrime from '../games/mini-game-prime';

const userName = logic.welcome('Answer "yes" if given number is prime. Otherwise answer "no".');

logic.loop(userName, brainPrime(userName));
