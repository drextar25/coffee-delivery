import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.png';
import { RegularText } from "../../../../components/Typography";
import { InfoWithIconContainer } from "../IconInfo/styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconInfo } from "../IconInfo";
import { useTheme } from "styled-components";

export function Intro() {
    const { colors } = useTheme();
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Get your favorite hot drink whenever you want.
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                        With Coffee Delivery, you can get coffee anytime, anywhere.
                        </RegularText>
                    </section>

                    <BenefitsContainer>
                        <IconInfo
                            icon={<ShoppingCart weight="fill" />}
                            text="Easy and secure purchase"
                            iconBg={colors["brand-yellow-dark"]}
                        />
                        <IconInfo
                            icon={<Package weight="fill" />}
                            text="Packaging keeps coffee intact"                            
                            iconBg={colors["base-text"]}
                        />
                        <IconInfo
                            icon={<Timer weight="fill" />}
                            text="Fast delivery with tracking"
                            iconBg={colors["brand-yellow"]}
                        />
                        <IconInfo
                            icon={<Coffee weight="fill" />}
                            text="Fresh coffee is delivered to you"
                            iconBg={colors["brand-purple"]}
                        />
        
                    </BenefitsContainer>
                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}