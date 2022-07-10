
import { render , screen} from "@testing-library/react"

import Button from "./Button"

describe("Button Tests" , () => {

     test("should have button in dom", () => {
        render(<Button>Click me</Button>);
        // virtually
        let button = screen.getByText("Click me"); //document
        
        expect(button).toBeInTheDocument();
     })
     test("should have button in dom", () => {
      render(<Button>Add</Button>);
      // virtually
      let button = screen.getByText("Add"); //document
    
      expect(button).toBeInTheDocument();
   })
   test("should have button in dom", () => {
      render(<Button>Reduce</Button>);
      // virtually
      let button = screen.getByText("Reduce"); //document
     
      expect(button).toBeInTheDocument();
   })
})