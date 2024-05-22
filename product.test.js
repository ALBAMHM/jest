const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product')

describe('resetProducts', () => {
    it('should reset the products array to be empty', () => {
        addProduct('cafetera');
        addProduct('tetera');

        expect(getProducts().length).toBeGreaterThan(0);

        resetProducts();

        expect(getProducts()).toEqual([]);
    });
});

describe('getProducts', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should get the products array', () => {
        addProduct('cafetera');

        getProducts();
        expect(getProducts().length).toBeGreaterThan(0);
        expect(getProducts()).toContainEqual({ id: 0, name: 'cafetera' });
    });

});
  
describe('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should add a product to the products array', () => {
        addProduct('cafetera');

        const products = getProducts();
        expect(products.length).toBeGreaterThan(0);
        expect(products).toContainEqual({ id: 0, name: 'cafetera' });
    });

    it('should throw an error if the element is not a string', () => {
        expect(() => addProduct(512)).toThrow('element must be a chain of characters');
    });
});

describe('removeProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should remove a product to the products array', () => {
        addProduct('cafetera');
        addProduct('tetera');

        expect(getProducts().length).toBe(2);
        
        removeProduct('cafetera');

        const products = getProducts();
        expect(products.length).toBe(1);
        expect(products).toContainEqual({ id: 1, name: 'tetera' })
        expect(products).not.toContainEqual({ id: 0, name: 'cafetera' });
    });

    it('should throw an error if the element is not a string', () => {
        expect(() => removeProduct(512)).toThrow('element must be a chain of characters');
    });
});



describe('getProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should get a product to the products array', () => {
        addProduct('cafetera');
        addProduct('tetera');

        expect(getProducts().length).toBe(2);
        
        getProduct('cafetera');

        const products = getProduct('cafetera');
        expect(products.length).toBe(1);
        expect(products).toContainEqual({ id: 0, name: 'cafetera' })
        expect(products).not.toContainEqual({ id: 1, name: 'tetera' });
    });

    it('should throw an error if the element is not a string', () => {
        expect(() => getProduct(512)).toThrow('element must be a chain of characters');
    });
});


describe('updateProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should update a product to the products array', () => {
        addProduct('cafetera');
        addProduct('tetera');

        expect(getProducts().length).toBe(2);
        
        updateProduct('cafetera','cafeteraUltimaVersion');

        const products = getProducts();
        expect(products.length).toBe(2);
        expect(products).toContainEqual({ id: 0, name: 'cafeteraUltimaVersion' })
        expect(products).toContainEqual({ id: 1, name: 'tetera' })
        expect(products).not.toContainEqual({ id: 0, name: 'cafetera' });
    });

    it('should throw an error if the element is not a string', () => {
        expect(() => updateProduct(512)).toThrow('element must be a chain of characters');
    });
});