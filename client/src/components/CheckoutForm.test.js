import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm/>)
    // 1. Access
    const nameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/last Name:/i)
    const adressInput = screen.getByLabelText(/Address/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)
    // 2. add text
    fireEvent.change(nameInput, {target: {value: 'ben', name: 'firstname'}})
    fireEvent.change(lastNameInput, {target: {value: 'ben', name: 'firstname'}})
    fireEvent.change(adressInput, {target: {value: 'ben', name: 'firstname'}})
    fireEvent.change(cityInput, {target: {value: 'ben', name: 'firstname'}})
    fireEvent.change(stateInput, {target: {value: 'ben', name: 'firstname'}})
    fireEvent.change(zipInput, {target: {value: 'ben', name: 'firstname'}})

    //3. get access
    const button = screen.getByRole('button');
    fireEvent.click(button)

});
