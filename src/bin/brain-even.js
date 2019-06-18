#!/usr/bin/env node
import * as lib from '..';

const userName = lib.welcome('Answer "yes" if number even otherwise answer "no"');

lib.brainEven(userName);
