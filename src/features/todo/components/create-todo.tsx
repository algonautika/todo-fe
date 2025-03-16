import { FormEventHandler, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import { TodoCreationRequest } from '@/lib/api-client/types/creation';
import { Divider, FilledButton, Icon, OutlinedButton, OutlinedTextField, Switch } from '@/lib/material';
import { Typography } from '@/lib/material/typography';

import { useCreateTodo } from '../hooks';

import './index.scss';

interface CreateTodoProps {
    visibility: boolean;
}

type Date = {
    date: string;
    time: null;
};

type DateTime = {
    date: string;
    time: string;
};

export const CreateTodo = (props: CreateTodoProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState<null | string>(null);
    const [deadline, setDeadline] = useState<null | Date | DateTime>(null);
    const [startDate, setStartDate] = useState<null | Date | DateTime>(null);
    const [endDate, setEndDate] = useState<null | Date | DateTime>(null);

    const [isDeadlineAllDay, setIsDeadlineAllDay] = useState(true);
    const [isDateAllDay, setIsDateAllDay] = useState(true);

    const createTodoMutation = useCreateTodo();

    const close = useCallback(() => {
        window.history.back();
    }, []);

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
        e.preventDefault();

        const creationRequest: TodoCreationRequest = {
            title,
            description,
            deadline: isDeadlineAllDay && deadline?.time
                ? `${deadline.date}T${deadline.time}`
                : (deadline?.date
                        ? `${deadline.date}T00:00:00`
                        : null),
            startDate: isDateAllDay && startDate?.time ? `${startDate.date}T${startDate.time}` : startDate?.date ?? null,
            endDate: isDateAllDay && endDate?.time ? `${endDate.date}T${endDate.time}` : endDate?.date ?? null,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        createTodoMutation.mutate(creationRequest); // TODO: 에러 처리

        close();
    }, [
        close,
        isDeadlineAllDay,
        isDateAllDay,
        title,
        description,
        deadline,
        startDate,
        endDate,
        createTodoMutation,
    ]);

    if (!props.visibility) {
        return null;
    }

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
                    viewTransitionName: 'create-todo',
                    animation: 'none',
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
                            value={title}
                            onChange={(e) => {
                                setTitle(e.currentTarget.value);
                            }}
                            label="할 일"
                            required
                        />

                        <OutlinedTextField
                            value={description ?? undefined}
                            onChange={(e) => {
                                setDescription(e.currentTarget.value);
                            }}
                            label="설명"
                        />

                        <Divider />

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                placeItems: 'center',
                            }}
                        >
                            <Typography
                                scale="body"
                                size="large"
                            >
                                하루 종일
                            </Typography>

                            <Switch
                                selected={isDeadlineAllDay}
                                onChange={() => {
                                    setIsDeadlineAllDay(!isDeadlineAllDay);
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
                            <OutlinedTextField
                                style={{
                                    flex: '1 0 auto',
                                }}
                                type="date"
                                value={deadline?.date ?? ''}
                                label="마감일"
                                onChange={(e) => {
                                    setDeadline({
                                        date: e.currentTarget.value,
                                        time: deadline?.time ?? null,
                                    });
                                }}
                                required={!isDeadlineAllDay}
                            />

                            <OutlinedTextField
                                style={{
                                    flex: '1 0 auto',
                                    animationName: 'slide-in',
                                    display: isDeadlineAllDay ? 'none' : 'block',
                                }}
                                type="time"
                                value={deadline?.time ?? ''}
                                label="마감 시간"
                                onChange={(e) => {
                                    setDeadline({
                                        date: deadline?.date ?? '',
                                        time: e.currentTarget.value,
                                    });
                                }}
                                required={!isDeadlineAllDay}
                            />
                        </div>

                        <Divider />

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                placeItems: 'center',
                            }}
                        >
                            <Typography
                                scale="body"
                                size="large"
                            >
                                하루 종일
                            </Typography>

                            <Switch
                                selected={isDateAllDay}
                                onChange={() => {
                                    setIsDateAllDay(!isDateAllDay);
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
                            <div
                                style={{
                                    height: 'fit-content',
                                    flex: '0 0 150px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                <OutlinedTextField
                                    style={{
                                    }}
                                    type="date"
                                    value={startDate?.date ?? ''}
                                    label="시작일"
                                    onChange={(e) => {
                                        setStartDate({
                                            date: e.currentTarget.value,
                                            time: startDate?.time ?? null,
                                        });
                                    }}
                                    required={!isDateAllDay}
                                />

                                <OutlinedTextField
                                    style={{
                                        display: isDateAllDay ? 'none' : 'block',
                                    }}
                                    type="time"
                                    value={startDate?.time ?? ''}
                                    label="시작 시간"
                                    onChange={(e) => {
                                        setStartDate({
                                            date: startDate?.date ?? '',
                                            time: e.currentTarget.value,
                                        });
                                    }}
                                    required={!isDateAllDay}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flex: '1 0 auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon>arrow_forward</Icon>
                            </div>

                            <div
                                style={{
                                    height: 'fit-content',
                                    flex: '0 0 150px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: '8px',
                                }}
                            >
                                <OutlinedTextField
                                    style={{
                                    }}
                                    type="date"
                                    value={endDate?.date ?? ''}
                                    label="종료일"
                                    onChange={(e) => {
                                        setEndDate({
                                            date: e.currentTarget.value,
                                            time: endDate?.time ?? null,
                                        });
                                    }}
                                    required={!isDateAllDay}
                                />

                                <OutlinedTextField
                                    style={{
                                        display: isDateAllDay ? 'none' : 'block',
                                    }}
                                    type="time"
                                    value={endDate?.time ?? ''}
                                    label="종료 시간"
                                    onChange={(e) => {
                                        setEndDate({
                                            date: endDate?.date ?? '',
                                            time: e.currentTarget.value,
                                        });
                                    }}
                                    required={!isDateAllDay}
                                />
                            </div>
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
                                close();
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
