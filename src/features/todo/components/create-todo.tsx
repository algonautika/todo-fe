import { FormEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';

import { TodoCreationRequest } from '@/lib/api-client/types/creation';
import { Divider, FilledButton, Icon, OutlinedButton, OutlinedTextField, Switch } from '@/lib/material';

import { IconText } from '../../../components/IconText';

interface CreateTodoProps {
    onSubmitted: (creationRequest: TodoCreationRequest) => void;
}

export const CreateTodo = (props: CreateTodoProps) => {
    const location = useLocation();
    const isVisible = useMemo(() => location.hash === '#create', [location.hash]);
    const [todo, setTodo] = useState<TodoCreationRequest>({
        title: '',
        description: '',
        deadline: '',
        startDate: '',
        endDate: '',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const [isDeadlineWithTime, setIsDeadlineWithTime] = useState(false);
    const [isDateWithTime, setIsDateWithTime] = useState(false);

    const updateTodo = useCallback(
        (values: Partial<TodoCreationRequest>) => {
            setTodo({
                ...todo,
                ...values,
            });
        }, [todo]);

    useEffect(() => {
        const handleHashChange = () => {
            // setIsVisible(window.location.hash === '#create');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    if (!isVisible) return null;

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmitted(todo);
        window.history.back();
    };

    return createPortal(
        (
            <div
                style={{
                    width: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    backgroundColor: 'var(--md-sys-color-surface)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 50, // TODO: zIndex 규칙 정하기
                }}
            >
                <form
                    onSubmit={handleSubmit}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        flex: '1 0 auto',
                        backgroundColor: 'var(--md-sys-color-surface)',
                        overflowY: 'scroll',
                    }}
                >
                    <div
                        style={{
                            height: 'auto',
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            flexGrow: '1',
                            padding: '16px',
                            gap: '8px',
                        }}
                    >
                        <OutlinedTextField
                            value={todo.title}
                            onChange={(e) => {
                                updateTodo(
                                    {
                                        title: e.currentTarget.value,
                                    },
                                );
                            }}
                            placeholder="할 일"
                        />
                        <OutlinedTextField
                            value={todo.description}
                            onChange={(e) => {
                                updateTodo({
                                    description: e.currentTarget.value,
                                });
                            }}
                            placeholder="설명"
                        />
                        <Divider />
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                placeItems: 'center',
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
                                placeItems: 'center',
                                gap: '24px',
                            }}
                        >
                            <IconText
                                icon="schedule"
                                text="마감일"
                            />
                            <OutlinedTextField
                                style={{
                                    flex: '1 0 0%',
                                }}
                                type="date"
                                value={todo.deadline}
                                onChange={(e) => {
                                    updateTodo({
                                        deadline: e.currentTarget.value,
                                    });
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
                                gap: '24px',
                                alignItems: 'center',
                            }}
                        >
                            <OutlinedTextField
                                style={{
                                    flex: '1 0 0%',
                                }}
                                type="date"
                                value={todo.startDate}
                                label="시작일"
                                onChange={(e) => {
                                    updateTodo({
                                        startDate: e.currentTarget.value,
                                    });
                                }}
                            />
                            <Icon>arrow_forward</Icon>
                            <OutlinedTextField
                                style={{
                                    flex: '1 0 0%',
                                }}
                                type="date"
                                value={todo.endDate}
                                label="종료일"
                                onChange={(e) => {
                                    updateTodo({
                                        endDate: e.currentTarget.value,
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            width: '100%',
                            height: 'fit-content',
                            position: 'sticky',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '16px',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'var(--md-sys-color-surface-variant)',
                            zIndex: 100,
                        }}
                    >
                        <OutlinedButton
                            type="reset"
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            취소
                        </OutlinedButton>

                        <FilledButton
                            type="submit"
                        >
                            추가
                        </FilledButton>
                    </div>
                </form>
            </div>
        ),
        document.body,
    );
};
