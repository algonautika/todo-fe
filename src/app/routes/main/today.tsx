import { Fragment } from 'react';

import { TodoItem } from '@/components/todo-item';
import { CreateTodo } from '@/features/todo/components/create-todo';
import { useTodos } from '@/features/todo/hooks';
import { List, ListItem, TextButton } from '@/lib/material';
import { Typography } from '@/lib/material/typography';

export const Today = () => {
    const todos = useTodos(10);

    if (todos.isLoading) {
        return (
            <Typography
                scale="display"
                size="small"
            >
                Loading...
            </Typography>
        );
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'column nowrap',
                placeContent: 'start',
                placeItems: 'center',
                overflowY: 'scroll',
            }}
        >
            <List
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    placeContent: 'start',
                    placeItems: 'center',
                }}
            >
                {
                    todos.data?.pages.map((page, index) => (
                        <Fragment key={`page:${String(index)}`}>
                            {
                                page.isOk()
                                    ? (
                                            page.value.list.map((todo) => (
                                                <TodoItem
                                                    key={`todo-item:${String(todo.id)}`}
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
            </List>
            <CreateTodo />
        </div>
    );
};
