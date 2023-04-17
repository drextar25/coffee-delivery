import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
    const { colors } = useTheme();
    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete your order
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    title="Delivery address"
                    subtitle="Enter the address where you want to receive your order"
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
                />

                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Payment"
                    subtitle="Payment is made at the time of delivery. Select your method of payment.
                    "
                    icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
                />
                <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}