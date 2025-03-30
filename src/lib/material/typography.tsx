interface TypographyProps {
    scale: 'display' | 'headline' | 'title' | 'body' | 'label';
    size: 'small' | 'medium' | 'large';
    bold?: boolean; // TODO: 이걸 여기서 강제로 설정해도 되는지 모르겠음
    children: string;
}

export const Typography = (props: TypographyProps) => {
    return (
        <span
            className={`md-typescale-${props.scale}-${props.size}`}
            style={{
                fontWeight: props.bold ? 'bold' : 'normal',
            }}
        >
            { props.children }
        </span>
    );
};
