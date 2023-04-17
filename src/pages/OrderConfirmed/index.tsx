import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { IconInfo } from "../Home/components/IconInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
    state: OrderData;
}

export function OrderConfirmedPage() {
    const { colors } = useTheme();

    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate("/")
        }
    }, []);

    if (!state) return <></>;

    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Hooray! Order confirmed</TitleText>
                <RegularText size="l" color="subtitle">
                    Now just wait for your order to arrive.
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <IconInfo
                        icon = {<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Delivery to&nbsp;
                                <strong>
                                     {state.address},
                                </strong>
                                <br />
                                 {state.city}, {state.state}
                            </RegularText>
                        }
                    />

                    <IconInfo
                        icon = {<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Estimated time of arrival
                                <br />
                                <strong>
                                    20 min - 30 min
                                </strong>
                            </RegularText>
                        }
                    />

                    <IconInfo
                        icon = {<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <RegularText>
                                Payment on delivery
                                <br />
                                <strong>
                                    {paymentMethods[state.paymentMethod].label}
                                </strong>
                            </RegularText>
                        }
                    />
                </OrderDetailsContainer>

                <img src={confirmedOrderIllustration} />
            </section>
        </OrderConfirmedContainer>
    )
}