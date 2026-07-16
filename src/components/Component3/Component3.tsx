import Component4 from '../Component4/Component4.tsx';

interface Component3Props {
    currentCount: number;
}

export default function Component3({currentCount}: Component3Props) {
    return (
        <div>
            <p className="text">
                Counter value:
            </p>
            <Component4
                finalCount={currentCount}
            />
        </div>
    )
}