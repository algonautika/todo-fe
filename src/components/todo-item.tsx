import { TodoPreviewResponse } from '@/lib/api-client/types/preview';
import { Checkbox, ListItem } from '@/lib/material/primitive';
import { Typography } from '@/lib/material/typography';

interface TodoItemProps {
    todoPreview: TodoPreviewResponse;
}

export const TodoItem = (props: TodoItemProps) => {
    return (
        <ListItem
            type="button"
            style={{
                width: '100%',
                height: 'fit-content',
                position: 'relative',
            }}
        >

            <div
                slot="start"
                style={{
                    height: '100%',
                    paddingTop: '2px',
                }}
            >
                <Checkbox checked={props.todoPreview.checked} />
            </div>

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
                        { props.todoPreview.title }
                    </Typography>

                    <Typography
                        scale="label"
                        size="small"
                    >
                        { props.todoPreview.description }
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
