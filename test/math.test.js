const { add, subtract, multiply, divide } = require('../src/math');

//Adição

describe('Calculadora', () => {
  describe('add', () => {
    it('Teste de soma com entradas válidas', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });

    test('Teste de soma com entradas inválidas', () => {
      expect(add('ABC', 2)).toBe(-1);
      expect(add(10, 'XYZ')).toBe(-1);
    });
  });

  //Subtração

  describe('subtract', () => {
    it('Teste de subtração com entradas válidas', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
    });

    test('Teste de subtração com entradas inválidas', () => {
      expect(subtract('ABC', 2)).toBe(-1);
      expect(subtract(10, 'XYZ')).toBe(-1);
    });
  });

  //Multiplicação

  describe('multiply', () => {
    it('Teste de multiplicação com entradas válidas', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-1, 4)).toBe(-4);
    });

    test('Teste de multiplicação com entradas inválidas', () => {
      expect(multiply('ABC', 2)).toBe(-1);
      expect(multiply(10, 'XYZ')).toBe(-1);
    });
  });

  //Divisão

  describe("Checar as exceções", () => {
    test("Deverá gerar uma exceção", () => {
      expect(() => {
        divide(25, 0)
      }).toThrowError()
    });
    test("Não deverá gerar uma exceção", () => {
      expect(() => {
        divide(20, 4)
      }).not.toThrowError()
    });

  });

});




