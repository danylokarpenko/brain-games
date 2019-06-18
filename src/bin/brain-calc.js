#!/usr/bin/env node
import * as lib from '..';

const userName = lib.welcome('What is the result of the expression?');

lib.brainCalc(userName);
