import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  const defaultProps = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'Test Title',
    labels: {
      closeButton: 'Close',
      acceptButton: 'Accept',
    },
    children: <div>Test Content</div>,
  };

  it('should render the dialog with the correct title and content and buttons', () => {
    // Arrange
    const props = {
      ...defaultProps,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonElement = screen.getByRole('button', {
      name: /Accept/i,
    });
    const buttonElementClose = screen.getByRole('button', {
      name: /Close/i,
    });

    // Assert
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElementClose).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should call onAccept  when the accept button is clicked', () => {
    // Arrange
    const { getByText } = render(
      ConfirmationDialogComponent({ ...defaultProps })
    );
    const acceptButton = getByText('Accept');

    // Act
    fireEvent.click(acceptButton);

    // Assert
    expect(defaultProps.onAccept).toHaveBeenCalled();
  });

  it('should call onClose when the close button is clicked', () => {
    // Arrange
    const { getByText } = render(
      ConfirmationDialogComponent({ ...defaultProps })
    );
    const closeButton = getByText('Close');

    // Act
    fireEvent.click(closeButton);

    // Assert
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
