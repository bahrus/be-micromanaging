import { register } from 'be-hive/register.js';
import { upgrade } from './be-micromanaging.js';
const tagName = 'be-micromanaging';
const ifWantsToBe = 'micromanaging';
register(ifWantsToBe, upgrade, tagName);
