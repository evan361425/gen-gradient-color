const { GenGradientColor } = require('../src/index');

describe('Generate Gradient Color', () => {
  it('should get 16 colors from black to white', () => {
    const generator = new GenGradientColor('#000000', [255, '255', 255]);
    const colors = generator.gens(16);

    expect(colors).toEqual([
      '#000000',
      '#060606',
      '#181818',
      '#2b2b2b',
      '#3d3d3d',
      '#4f4f4f',
      '#616161',
      '#737373',
      '#858585',
      '#979797',
      '#a8a8a8',
      '#bababa',
      '#cbcbcb',
      '#dddddd',
      '#efefef',
      '#ffffff',
    ]);

    generator.setColors('abc', '000def');

    expect(generator.gen(8, 16)).toBe('#7b88dd');

    generator.setColors('#f00', ['non number will consider as 0', 300, 0]);

    expect(generator.gens(3)).toEqual(['#ff0000', '#bcbc00', '#00ff00']);
  });
});
