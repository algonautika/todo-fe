import { Divider, OutlinedTextField, Switch } from '@/lib/material';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconText } from './IconText';
import { useCreateTodo } from '@/features/todo/hooks';

export const CreateTodo = () => {
    const [isVisible, setIsVisible] = useState(window.location.hash === '#create');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isDeadlineWithTime, setIsDeadlineWithTime] = useState(false);
    const [isDateWithTime, setIsDateWithTime] = useState(false);
    const [deadline, setDeadline] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            setIsVisible(window.location.hash === '#create');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    if (!isVisible) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const todoData = {
            title,
            description,
            deadline,
            startDate,
            endDate,
        };
        console.log('Todo 데이터 전송:', todoData);
        window.location.hash = '';
    };

    return createPortal(
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                padding: '10px',
                backgroundColor: 'var(--md-sys-color-surface)',
                gap: '10px',
            }}
        >
            <OutlinedTextField
                value={title}
                onChange={(e) => {
                    setTitle(e.currentTarget.value);
                }}
                placeholder="할 일"
            />
            <OutlinedTextField
                value={description}
                onChange={(e) => {
                    setDescription(e.currentTarget.value);
                }}
                placeholder="설명"
            />
            <Divider />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <span className="md-typescale-label-large">All day</span>
                <Switch
                    selected={isDeadlineWithTime}
                    onChange={() => {
                        setIsDeadlineWithTime(!isDeadlineWithTime);
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <IconText
                    icon="schedule"
                    text="마감일"
                />
                <input
                    type={isDeadlineWithTime ? 'datetime-local' : 'date'}
                    value={deadline}
                    onChange={(e) => {
                        setDeadline(e.target.value);
                    }}
                />
            </div>
            <Divider />
            <IconText
                icon="schedule"
                text="날짜"
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <span className="md-typescale-label-large">All day</span>
                <Switch
                    selected={isDateWithTime}
                    onChange={() => {
                        setIsDateWithTime(!isDateWithTime);
                    }}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                }}
            >
                <input
                    type={isDateWithTime ? 'datetime-local' : 'date'}
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                    }}
                />
                <span>{ '->' }</span>
                <input
                    type={isDateWithTime ? 'datetime-local' : 'date'}
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e.target.value);
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                }}
            >
                <button
                    type="button"
                    onClick={() => (window.location.hash = '')}
                >
                    취소
                </button>
                <button type="submit">추가</button>
            </div>
        </form>,
        document.body,
    );
};
