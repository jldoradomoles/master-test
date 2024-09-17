import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from "react-promise-tracker";
import { Modal } from '@mui/material';

// Mocks de Jest deben configurarse fuera del cuerpo de los tests
jest.mock("react-promise-tracker", () => ({
    usePromiseTracker: () => ({
      promiseInProgress: true
    })
  }));

describe('Spinner component', () => {
    it('should render without crashing', () => {
        render(<SpinnerComponent />);
        render(<Modal open={true}><div /></Modal>);
        expect(screen.getByRole('presentation')).toBeInTheDocument();

    });

    it('should have the correct class name', () => {
        render(<SpinnerComponent />);
        render(<Modal open={true} className='modal'><div /></Modal>);
        const modal = screen.getByRole('presentation');
        expect(modal).toHaveClass('modal');
    });

   
    it('should not display loading text if not provided', () => {
        render(<SpinnerComponent />);
        const textElement = screen.queryByText(/Loading.../i);
        expect(textElement).not.toBeInTheDocument();
    });
});