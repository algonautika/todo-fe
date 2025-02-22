import { TodoItem } from '@/components/todo-item';

export const Today = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'start',
                placeItems: 'center',
            }}
        >
            <TodoItem
                title="Todo Item"
                description="Description"
            />
            <TodoItem
                title="Todo Item"
                description="Description"
            />

        </div>
    );
};
