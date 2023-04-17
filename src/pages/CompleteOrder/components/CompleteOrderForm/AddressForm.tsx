import { Input} from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function AddressForm() {  
    const { register, formState } = useFormContext();
    const { errors } = formState as unknown as ErrorsType;
    
    return (
        <AddressFormContainer>
            <Input
                placeholder="First name"
                className="fname"
                {...register("fname")}
                error={errors.fname?.message}
                 />
            <Input
                placeholder="Last name"
                className="lname"
                {...register("lname")}
                error={errors.lname?.message}
            />
            <Input
                placeholder="Address line 1"
                className="address"
                {...register("address")}
                error={errors.address?.message}
            />
            <Input
                placeholder="Address line 2"
                className="address"
                rightText="Optional"
            />
            <Input
                placeholder="Zip code"
                type="number"
                {...register("zip")}
                error={errors.zip?.message}
            />
            <Input
                placeholder="City"
                className="city"
                {...register("city")}
                error={errors.city?.message}
            />
            <Input
                placeholder="State"
                className="state"
                {...register("state")}
                error={errors.state?.message}
            />
            <Input
                placeholder="Phone number"
                className="phone"
                type="tel"
                maxLength={10}
                pattern="[0-9]{10}"
                {...register("phone")}
                error={errors.phone?.message}
            />
        </AddressFormContainer>
    )
}

