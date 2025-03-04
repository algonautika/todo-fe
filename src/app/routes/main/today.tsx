import { Fragment } from 'react';

import { TodoItem } from '@/components/todo-item';
import { CreateTodo } from '@/features/todo/components/create-todo';
import { useTodos } from '@/features/todo/hooks';

export const Today = () => {
    const todos = useTodos(10);

    if (todos.isLoading) {
        return <div>Loading...</div>;
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
                todos.data?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {
                            page.isOk()
                                ? (
                                        page.value.list.map((todo) => (
                                            <TodoItem
                                                key={todo.id}
                                                title={todo.title}
                                                description={todo.description}
                                            />
                                        ))
                                    )
                                : (
                                        <div>
                                            Error
                                        </div>
                                    )
                        }
                    </Fragment>
                ))
            }
            <CreateTodo />
        </div>
    );
};
