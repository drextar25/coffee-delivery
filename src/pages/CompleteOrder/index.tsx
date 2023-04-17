import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    cash = "cash",
}

const confirmOrderFormValidationSchema = zod.object({
    fname: zod.string().min(1, "Enter your first name"),
    lname: zod.string().min(1, "Enter your last name"),
    address: zod.string().min(1, "Enter your address"),
    zip: zod.string().min(1, "Enter your zip code"),
    city: zod.string().min(1, "Enter your city"),
    state: zod.string().min(1, "Enter your state"),
    phone: zod.string().min(1, "Enter your phone number"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Enter the method of payment" };
        }
    })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>; 

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    });

    const navigate = useNavigate();
    const { cleanCart } = useCart();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
            state: data,
        });
        cleanCart();
    }

    const { handleSubmit } = confirmOrderForm;
    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}>
            <CompleteOrderForm />
            <SelectedCoffees />
        </CompleteOrderContainer>
        </FormProvider>
        
    );
}