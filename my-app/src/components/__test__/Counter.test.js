import {render, fireEvent, screen} from '@testing-library/react'
import renderer from 'react-test-renderer' //grabs the snapshot of a dom tree
import Counter from '../Counter'

// test('increment counter', ()=>{
//     // render component in the virtual dom
//     render(<Counter />)

//     // select element to interact...give Id ti the test element
//     const counter = screen.getByTestId('counter')
//     const increment = screen.getByTestId('increment')
   
//     // Interact with elements
//     fireEvent.click(increment)

//     expect(counter).toHaveTextContent('2')

// })

// describe('Counter', ()=> {
//     it('it should increment counter', ()=>{
//         render(<Counter />)

//     // select element to interact...give Id ti the test element
//     const counter = screen.getByTestId('counter')
//     const increment = screen.getByTestId('increment')
   
//     // Interact with elements
//     fireEvent.click(increment)
//     expect(counter).toHaveTextContent('2')
//     });

//     it('should decrement counter', ()=>{
//         describe('Counter', ()=> {
//             it('it should increment counter', ()=>{
//                 render(<Counter />)
        
//             // select element to interact...give Id ti the test element
//             const counter = screen.getByTestId('counter')
//             const decrement = screen.getByTestId('increment')
           
//             // Interact with elements
//             fireEvent.click(decrement)
//             expect(counter).toHaveTextContent('0')
//             })
//         })
//     })
// })

describe('Counter', () => {
    it('should increment counter', () => {
      const { getByText } = render(<Counter />);
      const incrementButton = getByText('+');
      const counterValue = getByText('1');
  
      fireEvent.click(incrementButton);
  
      expect(counterValue).toHaveTextContent('2');
    });
  
    it('should decrement counter', () => {
      const { getByText } = render(<Counter />);
      const decrementButton = getByText('-');
      const counterValue = getByText('1');
  
      fireEvent.click(decrementButton);
  
      expect(counterValue).toHaveTextContent('0');
    });
  });
  
// using snapshot -- use if you dont want your UI to change unexpectedly...Install npm i react-test-renderer
// describe('Counter Snapshot', () => {
//     it('should match DOM snapshot', () => {
//         const tree = renderer .create(<Counter />).JSON();
//         expect(tree).toMatchSnapshot();
//     })
// })

test('should match DOM snapshot', ()=> {
    const {asFragment} = render(<Counter />);
    const componentSnapshot = asFragment();
    expect(componentSnapshot).toMatchSnapshot();
});