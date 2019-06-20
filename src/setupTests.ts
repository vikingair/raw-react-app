import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-dom/extend-expect';

// enzyme configuration
Enzyme.configure({ adapter: new Adapter() });
// sadly enzyme support for react hooks is atm very poor
// e.g. we do not need to wrap the code into "act" to make it work, but React will complain if we don't
const oldConsoleError = window.console.error;
window.console.error = (...args: Array<any>) => {
    if (
        args.length > 0 &&
        typeof args[0] === 'string' &&
        args[0].indexOf('When testing, code that causes React state updates should be wrapped into act') >= 0
    ) {
        return;
    }
    oldConsoleError(...args);
};

// test utility to await all running promises
global.nextTick = (): Promise<void> => new Promise(resolve => process.nextTick(resolve));
