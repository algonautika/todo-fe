import { Checkbox, Fab, FilledIconButton, Icon, IconButton, OutlinedButton, OutlinedTextField, Radio, TextButton, TopAppBar } from '@/components/material';
import { Scaffold } from '@/components/material/scaffold';
import { BottomNavigation } from '@/components/material/bottom-navigation';
import { BottomNavigationItem } from '@/components/material/bottom-navigation-item';
import { GoogleSignin } from '@/components/oauth';

export const Test = () => {
    return (
        <Scaffold
            topAppBar={(
                <TopAppBar
                    type="center-aligned"
                    title="Title"
                />
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
                    flexDirection: 'column',
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

                <div>
                    <IconButton
                        type="button"
                    >
                        <Icon>favorite</Icon>
                    </IconButton>
                    <FilledIconButton
                        type="button"
                    >
                        <Icon>favorite</Icon>
                    </FilledIconButton>
                </div>
                <OutlinedButton type="reset">
                    Reset
                </OutlinedButton>
            </form>
            <BottomNavigation>
                <BottomNavigationItem icon="settings" label="오늘 할 일" selected={true} />
                <BottomNavigationItem icon="settings" label="오늘 할 일" />
                <BottomNavigationItem icon="settings" label="오늘 할 일" />
                <BottomNavigationItem icon="settings" label="오늘 할 일" />
                <BottomNavigationItem icon="settings" label="오늘 할 일" />
            </BottomNavigation>
        </Scaffold>
    );
};
