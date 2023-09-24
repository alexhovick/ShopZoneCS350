# SOFTWARE ARCHITECTURE

## DATA

HOME:
PRODUCT CARD:

- item_ID
- item_Name
- item_Image
- item_Description
- item_Rating
- item_Price

  PRODUCTDETAILS:
  ADD_ITEM_HANDLER:

  - item_ID,
  - item_Quantity

---

PROFILE

- user_Name
- user_email_address
- user_shipping_address
- user_orders

---

## SEARCH: -search_Term (string)

CART:
QUANTITY_HANDLER:

- item_ID,
- item_quantity

  REMOVE_ITEM_HANDLER:

  - item_ID

  - total_price

---

CHECKOUT:

- order#
- item_ID (from cart)
- item_quantity (from cart)
- item_price (from cart)
- shipping_address
- payment_info
- order_status
- order_summary
- order_dateNtime

---

ORDERS:

- order#
- order_status
- order_items

---

## Views

                           LIST          DETAIL      CREATE       UPDATE         DELETE
     PRODUCT CARD: ️         ✅            ✅        ️
     PROFILE                ✅            ️✅          ️✅          ✅             ✅             ️
     SEARCH:                ️✅            ️✅
     CART:                  ️✅          ️  ✅          ✅          ✅            ️ ✅
     CHECKOUT:              ️✅            ️✅          ️✅          ✅             ️✅
     ORDERS:                ✅            ✅

## Tests

    Automated Tests will be developed for each of the CRUD functions listed above.
    Addtional automatc tests will also be created for any other utility functions that are required.
