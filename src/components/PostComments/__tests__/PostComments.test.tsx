import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../../Post';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  test('Deve inserir 1 comentario', () => {
    render(
      <Post children="meu primeiro post" imageUrl="https://placehold.co/400" />,
    );
    const addCommentBtn = screen.getByTestId('btn-comment');
    const textAreaComment = screen.getByTestId('comment-content');
    fireEvent.change(textAreaComment, { target: { value: 'Muito Bom!' } });
    fireEvent.click(addCommentBtn);
    expect(screen.getByText('Muito Bom!')).toBeInTheDocument();
  });

  test('Deve inserir 2 comentarios', () => {
    render(
      <Post children="meu primeiro post" imageUrl="https://placehold.co/400" />,
    );

    const addCommentBtn = screen.getByTestId('btn-comment');
    const textAreaComment = screen.getByTestId('comment-content');

    fireEvent.change(textAreaComment, { target: { value: 'Top!' } });
    fireEvent.click(addCommentBtn);

    fireEvent.change(textAreaComment, { target: { value: 'Bom demais!' } });
    fireEvent.click(addCommentBtn);

    expect(screen.getAllByTestId('comment').length).toEqual(2);
  });
});
