import { Checkbox, Ripple } from './material/primitive';

interface TodoItemProps {
    title: string;
    description: string;
    checked?: boolean;
}

export const TodoItem = ({
    title, description, checked = false,
}: TodoItemProps) => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                gap: '16px',
                minHeight: '80px',
                padding: '16px 16px',
                position: 'relative',
            }}
        >
            <Ripple />
            <div
                style={{
                    paddingTop: '4px',
                }}
            >
                <Checkbox checked={checked} />
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 4px',
                    gap: '4px',
                }}
            >
                <div
                    className="md-typescale-body-large"
                >
                    { title }
                </div>
                <div
                    className="md-typescale-label-small"
                >
                    { description }
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <span
                        className="md-typescale-label-medium"
                    >
                        보관함
                    </span>
                </div>
            </div>
        </div>
    );
};
