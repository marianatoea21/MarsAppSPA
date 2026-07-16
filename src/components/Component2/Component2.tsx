import './Component2.css'

interface Component2Props {
    onIncrement: () => void;
}

export default function Component2({ onIncrement }: Component2Props) {
    return (
        <button
            type="button"
            className="counter"
            onClick={onIncrement}
        >
           CLICKKKK MEEEEEE
        </button>
    )
}