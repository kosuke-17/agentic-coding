import { subtract } from '../src/subtract';

describe('subtract 関数', () => {
  describe('正常系', () => {
    it('2つの正の数を引き算できる', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('負の数を含む引き算ができる', () => {
      expect(subtract(-1, 2)).toBe(-3);
      expect(subtract(1, -2)).toBe(3);
      expect(subtract(-1, -2)).toBe(1);
    });

    it('0を含む引き算ができる', () => {
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 0)).toBe(0);
    });

    it('小数点を含む引き算ができる', () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });
  });
});
