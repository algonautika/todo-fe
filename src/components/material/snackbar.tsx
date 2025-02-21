import { Elevation } from '.';

interface SnackbarProps {
    open: boolean;
    message: string;
    // autoHideDuration: number;
    // action: JSX.Element;

}

export const Snackbar = (props: SnackbarProps) => {
    return (
        <div
            style={{
                display: 'flex',
                height: '48px',
                position: 'relative',
                backgroundColor: 'var(--md-sys-color-inverse-surface)',
                borderRadius: 'var(--md-sys-shape-corner-extra-small)',
            }}
        >
            <Elevation />
            { props.message }
        </div>
    );
};
