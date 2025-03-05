import { Checkbox, ListItem, Ripple } from '@/lib/material/primitive';
import { Typography } from '@/lib/material/typography';

interface TodoItemProps {
    title: string;
    description: string;
    checked?: boolean;
}

export const TodoItem = ({
    title, description, checked = false,
}: TodoItemProps) => {
    return (
        <ListItem
            style={{
                width: '100%',
                height: 'fit-content',
                gap: '16px',
                position: 'relative',
            }}
        >
            <Ripple />
            <div
                style={{
                    width: '100%',
                    height: 'fit-content',
                    display: 'flex',
                    gap: '16px',
                    flexFlow: 'row nowrap',
                }}
            >
                <div
                    style={{
                        paddingTop: '4px',
                    }}
                >
                    <Checkbox checked={checked} />
                </div>
                <div
                    style={{
                        minWidth: 0,
                        height: 'fit-content',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        flex: '1 0 0%',
                        gap: '4px',
                    }}
                >
                    <Typography
                        scale="body"
                        size="large"
                    >
                        { title }
                    </Typography>

                    <Typography
                        scale="label"
                        size="small"
                    >
                        { description }
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Typography
                            scale="label"
                            size="medium"
                        >
                            보관함
                        </Typography>
                    </div>
                </div>
            </div>
        </ListItem>
    );
};
