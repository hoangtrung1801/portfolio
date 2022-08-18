interface TagProps {
    tag: string;
    cb: () => void;
    activeTag: string;
}

const Tag: React.FC<TagProps> = ({ tag, cb, activeTag }) => {
    return (
        <button
            onClick={() => cb()}
            className={`rounded-full px-6 py-1 ${
                activeTag === tag
                    ? "text-teal-500 ring-2 ring-teal-500"
                    : "ring-2 ring-gray-300"
            } hover:ring-2 hover:ring-teal-500 `}
        >
            <span className="text-base font-medium uppercase">
                {tag === "" ? "all" : tag}
            </span>
        </button>
    );
};

export default Tag;
