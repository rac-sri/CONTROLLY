import React from "react";
import AlignItemsList from "./List.tsx";
import {
    Container,
    InputLabel,
    FilledInput,
    InputAdornment,
} from "@material-ui/core";
import List from "./List.tsx";
export interface Props {}

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const App = () => {
    const [values, setValues] = React.useState<State>({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Container maxWidth="lg">
            <InputLabel htmlFor="filled-adornment-amount">
                Hate Speech
            </InputLabel>
            <FilledInput
                id="filled-adornment-amount"
                value={values.amount}
                onChange={handleChange("amount")}
                startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                }
            />
            <List />
        </Container>
    );
};

export default App;
