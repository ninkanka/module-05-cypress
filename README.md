** Firts step
 npm install

** Second step/ How to run in headless mode
npm run cy:chrome OR npx cypress run --browser chrome --headless 
npm run cy:firefox OR npx cypress run --browser firefox --headless 
npm run cy:edge OR npx cypress run --browser edge --headless 

## Important!
If the tests cart/deleteFromCart.cy.js OR cart/addToCart.cy.js fail, it means the product is sold out and I recommend choosing another available product without the "Sold Out" mark.