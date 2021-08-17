const pizzas = require('./data.json')

test('test pizza records', () => {
    expect(pizzas).toMatchSnapshot();
    expect(pizzas).toHaveLength(5);
    expect(pizzas.map(pizza => pizza.name)).toEqual([
        'nigerian Pizza',
        'nerican Pizza',
        'Anerican Pizza',
        'bigerian Pizza',
        'cigerian Pizza',
    ]);
});

for (let i = 0; i < pizzas.length; i++) {
    test(`pizzas[${i}] should have properties (id, name, image, desc, price)`, () => {
        expect(pizzas[i]).toHaveProperty('id');
        expect(pizzas[i]).toHaveProperty('name');
        expect(pizzas[i]).toHaveProperty('image');
        expect(pizzas[i]).toHaveProperty('desc');
        expect(pizzas[i]).toHaveProperty('price');
    }); 
}

test('mock implementation of a basic function ', () => {
        const mock = jest.fn(() => 'I am a mock function');
        expect(mock('Calling my mock function!')).toBe('I am a mock function');
        expect(mock).toHaveBeenCalledWith('Calling my mock function!');
});

test('mock test for return value ', () => {
    const mock  = jest.fn();
    mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!')
    mock()
    mock()
    mock()
    expect(mock).toHaveBeenCalledTimes(3)

    mock('Hello','there','Steve');
    expect(mock).toHaveBeenCalledWith('Hello','there','Steve');
    mock('Steve');
    expect(mock).toHaveBeenLastCalledWith('Steve')
});

test('mock implementation test', () => {
    const mock = jest.fn().mockImplementation(() => 'United Kingdom');
    expect(mock('Location')).toBe('United Kingdom');
    expect(mock).toHaveBeenCalledWith('Location')
});

test('spying on original implementation ', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`,
    }
    const spy = jest.spyOn(pizza,'name')
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
    expect(spy).toHaveBeenCalledWith('Cheese')
});