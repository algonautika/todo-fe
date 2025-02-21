import { Checkbox, FilledIconButton, Icon, IconButton, OutlinedButton, OutlinedTextField, Radio, Ripple, TextButton, TopAppBar } from '@/components/material';
import { GoogleSignin } from '@/components/oauth';

export const Test = () => {
    return (
        <>
            <TopAppBar
                type="center-aligned"
                title="Title"
            />

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
                    <TextButton hasIcon>
                        Submit
                    </TextButton>

                    <TextButton trailing-icon>
                        Open
                    </TextButton>
                </div>

                <div>
                    <IconButton>
                        <Icon>favorite</Icon>
                    </IconButton>
                    <FilledIconButton>
                        <Icon>favorite</Icon>
                    </FilledIconButton>
                </div>
                <OutlinedButton type="reset">
                    Reset
                </OutlinedButton>
            </form>
        </>
    );
};
