# bidding-system
 A real-time Auction System with Socket.io and React.js
 
 ## The Workflow for the Bidding System
Here is how it works:
- The Home page: Users provide only their username, and the application saves this username for identification throughout the application. To keep the tutorial simple, we won't use any authentication library.
- The Products page: Users can view all the products up for auction, click on each product to bid, and there is a call to action that redirects users to the page where they can add items for auction.
The Add Products page: This page allows users to add the name and price of the auction item, then redirects them to the Products page to view the recently added item.
- The Bid page: Users can bid for the item they selected from the Products page. This page accepts URL parameters containing the name and the price of the chosen item; then displays a form input that allows users to bid up the product.
- The Nav component: All the pages have the Nav component at the top and display notifications within it. When a user sets a bid or adds a new product, the Nav component notifies every other user.
![image](https://user-images.githubusercontent.com/73438491/183315378-60f40b46-1b3a-42db-b674-9c49a96522ad.png)
