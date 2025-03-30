import { Fragment, useCallback } from 'react';
import { InView } from 'react-intersection-observer';

import { ErrorResult } from '@/components/ErrorResult';
import { TodoItem } from '@/components/todo-item';
import { useTodos } from '@/features/todo/hooks';
import { TodoPreviewResponse } from '@/lib/api-client/types/preview';
import { CircularProgress, Divider, List } from '@/lib/material';

export const Today = () => {
    const todos = useTodos(10);

    const createItem = useCallback(
        (
            todoPreview: TodoPreviewResponse,
            pageIndex: number,
            itemIndex: number,
        ) => (
            <>
                {
                    pageIndex > 0 || itemIndex > 0
                        ? (
                                <Divider
                                    style={{
                                        padding: '0px 16px',
                                    }}
                                />
                            )
                        : null
                }
                <TodoItem
                    key={`todo-item:${String(todoPreview.id)}`}
                    todoPreview={todoPreview}
                />
            </>
        ), []);

    const pages = useCallback(() => {
        if (todos.status === 'pending') {
            return (
                <CircularProgress indeterminate />
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
                    todos.data.pages.map((page, pageIndex) => {
                        return (
                            <Fragment key={`page:${String(pageIndex)}`}>
                                {
                                    page.isErr()
                                        ? <ErrorResult err={page.error} />
                                        : page.value.list
                                                .map((item, itemIndex) => (
                                                    createItem(
                                                        item,
                                                        pageIndex,
                                                        itemIndex,
                                                    )),
                                                )
                                                .map((item, itemIndex) => (
                                                    <Fragment
                                                        key={`todo-item:${String(itemIndex)}`}
                                                    >

                                                        { item }
                                                    </Fragment>
                                                ))

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
        </div>
    );
};
