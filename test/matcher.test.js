import { addFn } from '../src/example'

test.concurrent('matcher toBe', () => {
  expect(addFn(1, 1)).toBe(2);
});

test.concurrent('matcher toEqual', () => {
  expect({a: 1}).toEqual({a: 1});
});