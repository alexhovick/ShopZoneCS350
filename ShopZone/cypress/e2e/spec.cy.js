//Before running test run 'npm run dev' in the terminal

/*describe('Test the header component', () => {
  it('"Hello, sign in" links to the login page', () => {
    cy.visit('http://localhost:3000/').contains('Hello, sign in').click().url().should('eq', 'http://localhost:3000/login')
  });
  it('"Returns & Orders" links to the orders page', () => {
    cy.contains('Returns & Orders').click().url().should('eq', 'http://localhost:3000/orders')
  });
  it('"Cart" links to cart', () => {
    cy.contains('Cart').click().url().should('eq', 'http://localhost:3000/cart')
  });
  it('ShopZone Logo links to home page', () => {
    // Set visit url to be not the home page to ensure that the logo links to the home page
    cy.visit('http://localhost:3000/cart').get('[alt="SZ_Logo"]').click().url().should('eq', 'http://localhost:3000/')
  });
  it('Search bar links to corisponding search page of search term entered', () => {
    cy.get('[name="search-field"]').click().type('nintendo switch{enter}').url().should('eq', 'http://localhost:3000/search/nintendo%20switch')
  })
})
describe('Test the search page', () => {
  it('Search page displays correct products', () => {
    cy.get('[role="searh results"]').within(() => {
      cy.contains('Nintendo Switch Lite - Blue')
      cy.contains('Nintendo Switch Lite - Coral')
      cy.contains('Nintendo Switch - Animal Crossing: New Horizons Edition - Switch')
    })
  })
})*/
describe('Test product details page', () => {
  /*
  it('Clicking on item links to correct product page', () => {
    cy.visit('http://localhost:3000/search/PS5').contains('PlayStation 5 Console (PS5)').click().url().should('eq', 'http://localhost:3000/Product/B0BCNKKZ91')
  });
  it('Product page displays title of product', { defaultCommandTimeout: 10000 }, () =>{
    cy.contains('PlayStation 5 Console (PS5)')
  });
  it('Product page displays image of product', { defaultCommandTimeout: 10000 }, () =>{
    cy.get('[alt = "PlayStation 5 Console (PS5)"]')
  });
  it('Product page displays description of product', { defaultCommandTimeout: 10000 }, () =>{
    cy.contains('The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.')
  });
  it('Product page displays rating of product', { defaultCommandTimeout: 10000 }, () =>{
    cy.contains('4.8')
  });
  it('Product page displays num_rating of product', { defaultCommandTimeout: 10000 }, () =>{
    cy.contains('7166')
  });
  */
  it('Quantatiy adjuster increases and decreases quantity to 4', { defaultCommandTimeout: 10000 }, () =>{
    cy.visit('http://localhost:3000/Product/B0BCNKKZ91').contains('+').click().click().click().click().click().click()
    cy.get('[role="-"]').click().click().click()
    cy.get('[role="quantity"]').contains('4')
  });
  it('Add to cart button links to cart', { defaultCommandTimeout: 10000 }, () => {
    //cy.visit('http://localhost:3000/Product/B0BCNKKZ91').contains('+').click().click().click().click()
    cy.contains('Add to Cart').click().url().should('eq', 'http://localhost:3000/Cart')
  })
  /*
  it('Product page displays about product section', { defaultCommandTimeout: 10000 }, () =>{
    cy.visit('http://localhost:3000/Product/B0BCNKKZ91').get('[role="about product"]').within(() => {
      cy.contains('About This Product:') 
      cy.contains('Model Number CFI-1215A01X.')
      cy.contains('Stunning Games - Marvel at incredible graphics and experience new PS5 features.')
      cy.contains('Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.')
      cy.contains('Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.')
    })
  });
  */  
})

describe('Test Cart Page', () => {
  it('Item is in cart', () => {
    cy.contains('PlayStation 5 Console (PS5)')
  });
  it('Correct total price is displayed', () => {
    cy.get('[role="total price"]').contains('1996.00')
  });
  it('Change quantity of item to check that total cart price updates', () => {
    cy.contains('-').click().click().click()
    cy.get('[role="quantity"]').contains('1')
    cy.get('[role="total price"]').contains('499.00')
  });
  it('Checkout button links to checkout', () => {
    cy.contains('Go to checkout').url().should('eq', 'http://localhost:3000/Checkout')
  })
  it('delete button removes that item from cart', () => {
    
  })
  
})
