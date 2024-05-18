/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
 
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';

expect.extend(matchers);
describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
      });
    it('should handle Email typing correctly', async () => {
      // Arrange
      render(<LoginInput login={() => {}} />);
      const emailInput = screen.getByPlaceholderText('Email');
      // Action
      await userEvent.type(emailInput, 'hello@hello.com');
      // Assert
      await expect(emailInput).toHaveValue('hello@hello.com');
    });

    it('should handle Password typing correctly', async () => {
        // Arrange
        render(<LoginInput login={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText('Password');
     
        // Action
        await userEvent.type(passwordInput, 'hello123');
     
        // Assert
        expect(passwordInput).toHaveValue('hello123');
      });

      it('should call login function when login button is clicked', async () => {
        // Arrange
        const mockLogin = vi.fn();
        render(<LoginInput login={mockLogin} />);
        const emailInput = screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'hello@hello.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, 'hello123');
        const loginButton = await screen.getByRole('button', { name: 'Login' });
     
        // Action
        await userEvent.click(loginButton);
     
        // Assert
        expect(mockLogin).toBeCalledWith({
            email: 'hello@hello.com',
            password: 'hello123',
          });
      });
});
