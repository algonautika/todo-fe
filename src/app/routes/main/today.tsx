import { useEffect } from 'react';

import { TodoItem } from '@/components/todo-item';
import { CreateTodo } from '@/features/todo/components/create-todo';
import { useTodos } from '@/features/todo/hooks';

export const Today = () => {
    const todos = useTodos();

    useEffect(() => {
        todos.fetch();
    }, []);

    if (todos.todos === 'Loading') {
        return <div>Loading...</div>;
    }

    if (todos.todos.isErr()) {
        console.error(todos.todos.error);

        return (
            <div>
                Error:
                { todos.todos.error.message }
            </div>
        );
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'start',
                placeItems: 'center',
            }}
        >

            {
                todos.todos.value.list.map((todo) => (

                    <TodoItem
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                    />
                ))
            }

            <CreateTodo />
        </div>
    );
};
