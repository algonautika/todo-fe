import { BottomNavigation, BottomNavigationItem, Fab, Icon, TopAppBar } from '@/lib/material';
import { Scaffold } from '@/components/scaffold';
import { Outlet } from 'react-router';

export const Main = () => {
    const handleFabClick = () => {
        window.location.hash = '#create';
    };

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
                    variant="secondary"
                    onClick={handleFabClick}
                >
                    <Icon slot="icon">add</Icon>
                </Fab>
            )}
        >
            <Outlet />
        </Scaffold>
    );
};
