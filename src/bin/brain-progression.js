#!/usr/bin/env node
import * as logic from '..';
import brainProgression from '../games/mini-brain-progression';

const userName = logic.welcome('What number is missing in the progression?');

logic.loop(userName, brainProgression(userName));
