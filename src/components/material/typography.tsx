interface TypographyProps {
    scale: 'display' | 'headline' | 'title' | 'body' | 'label';
    size: 'small' | 'medium' | 'large';
    children: string;
}

export const Typography = (props: TypographyProps) => {
    return (
        <span className={`md-typescale-${props.scale}-${props.size}`}>
            { props.children }
        </span>
    );
};
