// @ts-check

import dialogs from "./data/dialogs.json";
export const EASY_RIVAL_SPEED = 0.35;
export const HARD_RIVAL_SPEED = 0.18;
export const MAX_TIME = 60;
export const goalBlocks = 5;
export const maxMistakes = 1;
export const lineHeight = 28;
export const startmoveline = 3;
export const marginvisiblebox = 1;
export const dialogsData = dialogs;
export const ICON_START_Y = 0.15;
export const TEXT_START_Y = 0.15;
export const SPACING = 0.05;
export const MAX_BLOCKS = 5;
/**
 * @type {number}
 */
// reduce for a jump line after x lines
export const JUMP_AFTER = 40;

/**
 * Object for manage different states and configurations in the game
 */
export const gameState = {
    /**
     * Allocated resizable objects for update on resize
     *
     * @type {import("kaplay").GameObj[]}
     */
    resizableObjects: [],
    /**
     * Time left
     */
    timeLeft: 0,
};
