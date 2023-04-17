import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffee";
import { CoffeeCard } from "../CoffeeCard";
import { BorderSeparator, CoffeeList, FlavorsContainer } from "./styles";

export function Flavors() {
    return (
        <FlavorsContainer className="container">
            <TitleText size="l" color="subtitle">
                Drinks
            </TitleText>
            <BorderSeparator></BorderSeparator>
            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>
        </FlavorsContainer>
    )
}