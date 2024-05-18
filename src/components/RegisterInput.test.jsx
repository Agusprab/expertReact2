/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';


expect.extend(matchers);
describe('RegisterInput component', () => {
    afterEach(() => {
        cleanup();
      });

      it('should handle Name typing correctly', async () => {
        // Arrange
        render(<RegisterInput register={() => {}} />);
        const nameInput = screen.getByPlaceholderText('Name');
        // Action
        await userEvent.type(nameInput, 'Agus Prabowo');
        // Assert
        await expect(nameInput).toHaveValue('Agus Prabowo');
      });

      it('should handle Email typing correctly', async () => {
        // Arrange
        render(<RegisterInput register={() => {}} />);
        const emailInput = screen.getByPlaceholderText('Email');
        // Action
        await userEvent.type(emailInput, 'hello@hello.com');
        // Assert
        await expect(emailInput).toHaveValue('hello@hello.com');
      });

      it('should handle Password typing correctly', async () => {
        // Arrange
        
        render(<RegisterInput register={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText('Password');
     
        // Action
        await userEvent.type(passwordInput, 'hello123');
     
        // Assert
        expect(passwordInput).toHaveValue('hello123');
      });

      it('should call Register function when login button is clicked', async () => {
        // Arrange
    
        const mockRegister = vi.fn();
        render(<RegisterInput register={mockRegister} />);
        const usernameInput = await screen.getByPlaceholderText('Name');
        await userEvent.type(usernameInput, 'Agus Prabowo');
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'hello@hello.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'hello123');
        const registerButton = await screen.getByRole('button', {
          name: 'Register',
        });
    
        // Action
        await userEvent.click(registerButton);
    
        // Assert
        expect(mockRegister).toBeCalledWith({
          name: 'Agus Prabowo',
          email: 'hello@hello.com',
          password: 'hello123',
        });
      });
      
})
