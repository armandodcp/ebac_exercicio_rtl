import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Inserção primeiro comentário'
            }
        })
        fireEvent.click(screen.getByTestId('botao-comentar'))
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Inserção segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId('botao-comentar'))
        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    })
});