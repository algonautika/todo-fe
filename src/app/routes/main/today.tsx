import { Fragment, useCallback } from 'react';
import { InView } from 'react-intersection-observer';

import { ErrorResult } from '@/components/ErrorResult';
import { TodoItem } from '@/components/todo-item';
import { CreateTodo } from '@/features/todo/components/create-todo';
import { useTodos } from '@/features/todo/hooks';
import { TodoPreviewResponse } from '@/lib/api-client/types/preview';
import { CircularProgress, List } from '@/lib/material';
import { Typography } from '@/lib/material/typography';

export const Today = () => {
    const todos = useTodos(10);

    const createItem = useCallback(
        (todoPreview: TodoPreviewResponse) => (
            <TodoItem
                key={`todo-item:${String(todoPreview.id)}`}
                todoPreview={todoPreview}
            />
        ), []);

    const pages = useCallback(() => {
        if (todos.status === 'pending') {
            return (
                <Typography
                    scale="body"
                    size="medium"
                >
                    Loading
                </Typography>
            );
        }

        if (todos.status === 'error') {
            return (
                <ErrorResult err={todos.error} />
            );
        }

        return (
            <>
                {
                    todos.data.pages.map((page, index) => {
                        return (
                            <Fragment key={`page:${String(index)}`}>
                                {
                                    page.isErr()
                                        ? <ErrorResult err={page.error} />
                                        : page.value.list.map(createItem)
                                }
                            </Fragment>
                        );
                    })
                }
            </>
        );
    }, [todos.data, todos.status, todos.error, createItem]);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'column nowrap',
                placeContent: 'start',
                placeItems: 'center',
                overflow: 'scroll',
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
                { pages() }
            </List>
            {
                todos.hasNextPage
                && (
                    <InView
                        as="div"
                        style={{
                            width: '100%',
                            height: 'fit-content',
                            display: 'flex',
                            placeContent: 'center',
                            placeItems: 'center',
                        }}
                        onChange={(inView) => {
                            if (inView) {
                                todos.fetchNextPage()
                                    .then()
                                    .catch(console.error);
                            }
                        }}
                    >
                        <CircularProgress indeterminate />
                    </InView>
                )
            }
            <CreateTodo
                onSubmitted={(creationRequest) => {
                    console.log('Todo 생성:', creationRequest);
                }}
            />
        </div>
    );
};
