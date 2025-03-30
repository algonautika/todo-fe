import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Outlet, useLocation } from 'react-router';

import { Scaffold } from '@/components/scaffold';
import { CreateTodo } from '@/features/todo/components/create-todo';
import { BottomNavigation, BottomNavigationItem, Fab, Icon, TopAppBar } from '@/lib/material';

export const Main = () => {
    const location = useLocation();
    const [createTodoVisibility, setCreateTodoVisibility] = useState(false);

    const updateCreateTodoVisibility = useCallback((visibility: boolean) => {
        // NOTE: 오래된 브라우저에서는 startViewTransition이 없을 수 있음
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!document.startViewTransition) {
            setCreateTodoVisibility(visibility);

            return;
        }

        document.startViewTransition(() => {
            flushSync(() => {
                setCreateTodoVisibility(visibility);
            });
        });
    }, []);

    useEffect(() => {
        if (location.hash === '#create') {
            updateCreateTodoVisibility(true);
        } else {
            updateCreateTodoVisibility(false);
        }
    }, [location.hash, updateCreateTodoVisibility]);

    return (
        <Scaffold
            topAppBar={(
                <TopAppBar
                    type="center-aligned"
                    title="Todo"
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
                visibility={createTodoVisibility}
            />
        </Scaffold>
    );
};
