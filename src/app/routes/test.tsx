import { Checkbox, FilledIconButton, Icon, IconButton, OutlinedButton, OutlinedTextField, Radio, TextButton } from '@/components/material';

export const Test = () => {
    return (
        <>
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
                <p className="md-typescale-body-medium">
                    Check out these controls in a form!
                </p>
                <Checkbox></Checkbox>
                <div>
                    <Radio name="group"></Radio>
                    <Radio name="group"></Radio>
                    <Radio name="group"></Radio>
                </div>
                <OutlinedTextField
                    label="Favorite color"
                    value="Purple"
                >
                </OutlinedTextField>

                <div>
                    <TextButton hasIcon>
                        <Icon>send</Icon>
                        Submit
                    </TextButton>

                    <TextButton trailing-icon>
                        Open
                        <Icon>open_in_new</Icon>
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
