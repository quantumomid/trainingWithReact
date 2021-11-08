import Shopping from "./Shopping";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Shopping Component", () => {

    it("New input todo renders", () => {
        render(<Shopping />);

        const inputElement = screen.getByPlaceholderText(/Please type the product you would like to add to your cart/i);
        const buttonElement = screen.getByRole("button", { name: /Add to cart/i });

        fireEvent.change(inputElement, { target: { value: "Black seed oil" } });
        fireEvent.click(buttonElement);

        const paragraphElement = screen.getByText(/Black seed oil/i);

        expect(paragraphElement).toBeInTheDocument();
    });

    
    it("New input todo should not have removed class", () => {
        render(<Shopping />);

        const inputElement = screen.getByPlaceholderText(/Please type the product you would like to add to your cart/i);
        const buttonElement = screen.getByRole("button", { name: /Add to cart/i });

        fireEvent.change(inputElement, { target: { value: "Black seed oil" } });
        fireEvent.click(buttonElement);

        const paragraphElement = screen.getByText(/Black seed oil/i);

        expect(paragraphElement).not.toHaveClass("removed");
    });

    it("New input todo should have removed class when unchecked", () => {
        render(<Shopping />);

        const inputElement = screen.getByPlaceholderText(/Please type the product you would like to add to your cart/i);
        const buttonElement = screen.getByRole("button", { name: /Add to cart/i });

        fireEvent.change(inputElement, { target: { value: "Black seed oil" } });
        fireEvent.click(buttonElement);

        // const paragraphElement = screen.getByText(/Black seed oil/i);
        const listElement = screen.getAllByRole("listitem").filter(listitem => listitem.textContent.startsWith("Black seed oil"));
        // console.log(listElement);
        const liListElement = listElement[0]

        // const checkInputElement = screen.getByRole("input", { name: /Black seed oil/i });
        // Had to explicitly add a role="checkbox" attribute to the checkbox inputs for below to work
        const checkInputElements = screen.getAllByRole("checkbox");
        // console.log(checkInputElements.length);
        // console.log(checkInputElements[1]);

        const checkInput = checkInputElements[1]
        fireEvent.click(checkInput);


        expect(liListElement).toHaveClass("removed");
    });

});