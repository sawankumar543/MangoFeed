# Database Design

## users

- id
- name
- email
- password
- role (user/admin)
- createdAt

## categories

- id
- name
- description
- image

## products

- id
- name
- description
- price
- stock
- image
- categoryId

## orders

- id
- userId
- totalPrice
- status
- createdAt

## order_items

- id
- orderId
- productId
- quantity
- price