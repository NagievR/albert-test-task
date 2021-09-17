import NodeCache from 'node-cache';

const CACHE_HOURS_12: number = 12 * 60 * 60;

export default new NodeCache({ stdTTL: CACHE_HOURS_12 });
