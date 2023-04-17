import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase")
    }
    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease")
    }
    function handleRemove() {
        removeCartItem(coffee.id);
    }        
    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={coffee.photo} alt={coffee.name} />
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small"
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={coffee.quantity} />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16} />
                            Delete
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>
                ${formattedPrice}
            </p>
        </CoffeeCartCardContainer>
    )
}