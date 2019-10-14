import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

// enzyme configuration
Enzyme.configure({ adapter: new Adapter() });

// test utility to await all running promises
global.nextTick = (): Promise<void> => new Promise(resolve => process.nextTick(resolve));
