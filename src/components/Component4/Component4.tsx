import './Component4.css'

interface Component4Props {
    finalCount: number;
}

export default function Component4({ finalCount }: Component4Props) {
    return (
        <div>
            <p className="text">{finalCount}</p>
        </div>
    );
}