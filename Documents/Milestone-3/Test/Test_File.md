    //Before running test run 'npm run dev' in the terminal


    describe('Test the header component', () => {
### Passes
        it('"Hello, sign in" links to the login page', () => {
            cy.visit('http://localhost:3000/').contains('Hello, sign in').click().url().should('eq', 'http://localhost:3000/login')
        });
### Passes
        it('"Returns & Orders" links to the orders page', () => {
            cy.contains('Returns & Orders').click().url().should('eq', 'http://localhost:3000/orders')
        });
### Passes
        it('"Cart" links to cart', () => {
            cy.contains('Cart').click().url().should('eq', 'http://localhost:3000/cart')
        });
### Passes
        it('ShopZone Logo links to home page', () => {
            // Set visit url to be not the home page to ensure that the logo links to the home page
            cy.visit('http://localhost:3000/cart').get('[alt="SZ_Logo"]').click().url().should('eq', 'http://localhost:3000/')
        });
### Passes
        it('Search bar links to corisponding search page of search term entered', () => {
            cy.get('[name="search-field"]').click().type('nintendo switch{enter}').url().should('eq', 'http://localhost:3000/search/nintendo%20switch')
        })
    })
### Passes
    describe('Test the search page', () => {
        it('Search page displays correct products', () => {
            cy.get('[role="searh results"]').within(() => {
            cy.contains('Nintendo Switch Lite - Blue')
            cy.contains('Nintendo Switch Lite - Coral')
            cy.contains('Nintendo Switch - Animal Crossing: New Horizons Edition - Switch')
            })
        })
    })
###
    describe('Test product details page', () => {
### Passes
        it('Clicking on item links to correct product page', () => {
            cy.visit('http://localhost:3000/search/PS5').contains('PlayStation 5 Console (PS5)').click().url().should('eq', 'http://localhost:3000/Product/B0BCNKKZ91')
        });
### Passes
        it('Product page displays title of product', { defaultCommandTimeout: 10000 }, () =>{
            cy.contains('PlayStation 5 Console (PS5)')
        });
### Passes
        it('Product page displays image of product', { defaultCommandTimeout: 10000 }, () =>{
            cy.get('[alt = "PlayStation 5 Console (PS5)"]')
        });
### Passes
        it('Product page displays description of product', { defaultCommandTimeout: 10000 }, () =>{
            cy.contains('The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.')
        });
### Fails
        it('Product page displays rating of product', { defaultCommandTimeout: 10000 }, () =>{
            cy.contains('4.8')
        });
### Passes
        it('Product page displays num_rating of product', { defaultCommandTimeout: 10000 }, () =>{
            cy.contains('7195')
        });
### Passes
        it('Quantatiy adjuster increases and decreases quantity to 4', { defaultCommandTimeout: 10000 }, () =>{
            cy.visit('http://localhost:3000/Product/B0BCNKKZ91').contains('+').click().click().click().click().click().click()
            cy.get('[role="-"]').click().click().click()
            cy.get('[role="quantity"]').contains('4')
        });
### Passes
        it('Add to cart button links to cart', { defaultCommandTimeout: 10000 }, () => {
            //cy.visit('http://localhost:3000/Product/B0BCNKKZ91').contains('+').click().click().click().click()
            cy.contains('Add to Cart').click().url().should('eq', 'http://localhost:3000/Cart')
        })  
    })
###
    describe('Test Cart Page', () => {
### Passes
        it('Item is in cart', () => {
            cy.contains('PlayStation 5 Console (PS5)')
        });
### Fails
        it('Correct total price is displayed', () => {
            cy.get('[role="total price"]').contains('1996.00')
        });
### Fails
        it('Change quantity of item to check that total cart price updates', () => {
            cy.get('[role="-"]').click().click().click()
            cy.get('[role="quantity"]').contains('1')
            cy.get('[role="total price"]').contains('499.00')
        });
### Passes
        it('Checkout button links to checkout', () => {
            cy.contains('Go to checkout').click().url().should('eq', 'http://localhost:3000/Checkout')
        })
### Passes
        it('delete button removes that item from cart', () => {
            cy.go("back")
            cy.contains("Delete").click()
            cy.contains("Your cart is empty.")
        })
### Passes
        it('"Back to Store" button links back to the home page', () => {
            cy.contains("Back to Store").click().url().should('eq', 'http://localhost:3000/')
        })
    
    })

