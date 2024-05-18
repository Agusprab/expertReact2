/**
 * skenario testing
 *
 * - CommentThreadInput component
 *   - should handle Comment typing correctly
 *   - should call addThread function when Balas button is clicked
 */


import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import CommentThreadInput from './CommentThreadInput';


expect.extend(matchers);
describe('CommentThreadInput component', () => {
    afterEach(() => {
        cleanup();
      });

    it('should handle Comment typing correctly', async () => {
        // arrange
        render(<CommentThreadInput addComment={() => {}} />);
        const commentInput = screen.getByPlaceholderText('Leave a comment');
        // action
        await userEvent.type(commentInput, 'Thread Comment');
        // assert
        await expect(commentInput).toHaveValue('Thread Comment');
    });

    it('should call addThread function when Balas button is clicked', async () => {
        const addCommentMock = vi.fn();
        render(<CommentThreadInput addComment={addCommentMock} />);
        
        const textarea = screen.getByPlaceholderText('Leave a comment');
        fireEvent.change(textarea, { target: { value: 'This is a test comment' } });

        const button = screen.getByRole('button', { name: 'Balas' });
    
        fireEvent.click(button);
      
        expect(addCommentMock).toHaveBeenCalledWith('This is a test comment');
        expect(textarea.value).toBe('');
    });
});