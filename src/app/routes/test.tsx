import { GoogleSignin } from '@/components/oauth';
import { Scaffold } from '@/components/scaffold';
import { TodoItem } from '@/components/todo-item';
import { BottomNavigation, BottomNavigationItem, Checkbox, Divider, Fab, Icon, OutlinedTextField, Radio, TextButton, TopAppBar } from '@/lib/material';

export const Test = () => {
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
                        icon="settings"
                        label="오늘 할 일"
                    />
                    <BottomNavigationItem
                        icon="settings"
                        label="오늘 할 일"
                    />
                    <BottomNavigationItem
                        icon="settings"
                        label="오늘 할 일"
                    />
                    <BottomNavigationItem
                        icon="settings"
                        label="오늘 할 일"
                    />
                </BottomNavigation>
            )}

            floatingActionButton={(
                <Fab>
                    <Icon slot="icon">add</Icon>
                </Fab>
            )}
        >

            <h1 className="md-typescale-display-medium">
                Hello Material!
            </h1>

            <form
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    alignItems: 'flex-start',
                    gap: '16px',
                }}
            >

                <GoogleSignin />

                <p className="md-typescale-body-medium">
                    Check out these controls in a form!
                </p>
                <Checkbox />
                <div>
                    <Radio name="group" />
                    <Radio name="group" />
                    <Radio name="group" />
                </div>
                <OutlinedTextField
                    label="Favorite color"
                    value="Purple"
                >
                </OutlinedTextField>

                <div>
                    <TextButton
                        type="button"
                    >
                        Submit
                    </TextButton>

                    <TextButton
                        type="button"
                    >
                        Open
                    </TextButton>
                </div>
            </form>
            <div>
                <TodoItem
                    todoPreview={{
                        id: 1,
                        userId: 1,
                        title: '할 일 1',
                        description: '할 일 1',
                        startDate: '2021-10-01T00:00:00Z',
                        endDate: '2021-10-01T00:00:00Z',
                        deadline: '2021-10-01T00:00:00Z',
                        timeZone: 'Asia/Seoul',
                        checked: false,
                    }}
                />
                <Divider />
            </div>
        </Scaffold>
    );
};
