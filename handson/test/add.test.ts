import { add } from '../src/add';

describe('add 関数', () => {
  describe('正常系', () => {
    it('2つの正の数を足し算できる', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('負の数を含む足し算ができる', () => {
      expect(add(-1, 2)).toBe(1);
      expect(add(1, -2)).toBe(-1);
      expect(add(-1, -2)).toBe(-3);
    });

    it('0を含む足し算ができる', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it('小数点を含む足し算ができる', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });
});
