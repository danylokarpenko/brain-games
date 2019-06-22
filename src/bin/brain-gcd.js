#!/usr/bin/env node
import * as logic from '..';
import brainGCD from '../games/gcd';

const userName = logic.welcome('Find the greatest common divisor of given numbers.');

logic.loop(userName, brainGCD(userName));
