import { Flavors } from "./components/Flavors";
import { Intro } from "./components/intro";
import { HomeContainer } from "./styles";

export function HomePage() {
    return (
        <HomeContainer>
            <Intro />
            <Flavors />
            
        </HomeContainer>
    )
}