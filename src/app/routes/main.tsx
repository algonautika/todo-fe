import { BottomNavigation, BottomNavigationItem, Fab, Icon, TopAppBar } from '@/components/material';
import { Scaffold } from '@/components/material/scaffold';

export const Main = () => {
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
                <Fab>
                    <Icon slot="icon">add</Icon>
                </Fab>
            )}
        >
            <></>

        </Scaffold>
    );
};
