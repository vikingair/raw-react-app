import '@testing-library/jest-dom/extend-expect';

// test utility to await all running promises
global.nextTick = (): Promise<void> => new Promise((resolve) => process.nextTick(resolve));
