import { CartItemContainer, ItemDetail, Name } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="" srcset="" />
      <ItemDetail>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}{" "}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
