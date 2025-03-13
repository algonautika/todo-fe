import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Outlet, useLocation } from 'react-router';

import { Scaffold } from '@/components/scaffold';
import { CreateTodo } from '@/features/todo/components/create-todo';
import { BottomNavigation, BottomNavigationItem, Fab, Icon, TopAppBar } from '@/lib/material';

export const Main = () => {
    const location = useLocation();
    const [createTodoVisibility, setCreateTodoVisibility] = useState(false);

    useEffect(() => {
        if (location.hash === '#create') {
            document.startViewTransition(() => {
                flushSync(() => {
                    setCreateTodoVisibility(true);
                });
            });
        } else {
            document.startViewTransition(() => {
                flushSync(() => {
                    setCreateTodoVisibility(false);
                });
            });
        }
    }, [location.hash]);

    return (
        <Scaffold
            topAppBar={(
                <TopAppBar
                    type="center-aligned"
                    title="Title"
                />
            )}

            bottomBar={(
                <BottomNavigation>
                    <BottomNavigationItem
                        icon="settings"
                        label="오늘 할 일"
                        selected={true}
                    />
                    <BottomNavigationItem
                        icon="list"
                        label="언젠가 할 일"
                    />
                    <BottomNavigationItem
                        icon="inbox"
                        label="보관함"
                    />
                </BottomNavigation>
            )}

            floatingActionButton={(
                <Fab
                    style={{
                        viewTransitionName: createTodoVisibility ? '' : 'create-todo',
                        display: createTodoVisibility ? 'none' : 'block',
                    }}
                    variant="secondary"
                    onClick={() => {
                        window.location.hash = '#create';
                    }}
                >
                    <Icon slot="icon">add</Icon>
                </Fab>
            )}
        >
            <Outlet />

            <CreateTodo
                onSubmitted={(creationRequest) => {
                    console.log('Todo 생성:', creationRequest);
                }}
                visibility={createTodoVisibility}
            />
        </Scaffold>
    );
};
