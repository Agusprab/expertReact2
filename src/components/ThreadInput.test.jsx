/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle Tittle typing correctly
 *   - should handle Category typing correctly
 *   - should handle Thread typing correctly
 *   - should call handleSubmit function when submit button is clicked
 */

 
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';


expect.extend(matchers);

describe('ThreadInput component', () => {
    afterEach(() => {
        cleanup();
      });
    it('should handle Tittle typing correctly', async () => {
        // Arrange
        render(<ThreadInput addThread={() => {}} />);
        const tittleInput = screen.getByPlaceholderText('Tittle');
        // Action
        await userEvent.type(tittleInput, 'Thread Tittle');
        // Assert
        await expect(tittleInput).toHaveValue('Thread Tittle');
    });

    it('should handle Category typing correctly', async () => {
        // Arrange
        render(<ThreadInput addThread={() => {}} />);
        const categoryInput = screen.getByPlaceholderText('Category');
        // Action
        await userEvent.type(categoryInput, 'Thread Category');
        // Assert
        await expect(categoryInput).toHaveValue('Thread Category');
    });

    it('should handle Thread typing correctly', async () => {
        // Arrange
        render(<ThreadInput addThread={() => {}} />);
        const bodyInput = screen.getByPlaceholderText('Thread');
        // Action
        await userEvent.type(bodyInput, 'Thread Body');
        // Assert
        await expect(bodyInput).toHaveValue('Thread Body');
    });

    it('should call handleSubmit function when submit button is clicked', async () => {

        // Arrange
        const mockSubmit = vi.fn();
      
        render(<ThreadInput addThread={mockSubmit} />);
        const tittleInput = screen.getByPlaceholderText('Tittle');
        await userEvent.type(tittleInput, 'Thread Tittle');
        const categoryInput = screen.getByPlaceholderText('Category');
        await userEvent.type(categoryInput, 'Thread Category');
        const bodyInput = screen.getByPlaceholderText('Thread');
        await userEvent.type(bodyInput, 'Thread Body');
        const submitButton = await screen.getByRole('button', {name: 'Kirim', hidden: true});

        // Action
        await userEvent.click(submitButton);

        // Assert
        expect(mockSubmit).toBeCalledWith({
            title: 'Thread Tittle',
            body: 'Thread Body',
            category: 'Thread Category',
        }); 

      
    })
});