import {render,screen, fireEvent} from "@testing-library/react";
import Button from './Button';

test("should render button with testid", ()=>{
  render(<Button />);
  const buttonElem =screen.getByTestId("button");
  expect(buttonElem).toBeInTheDocument();
})
test("should render button with testid", ()=>{
  render(<Button />);
  const buttonElem =screen.getByTestId("button");
  expect(buttonElem).toBeInTheDocument();
})