import Close from '../../../Icons/Close';
import './SearchChips.css';

type SearchChipsType = {
    query: string;
    industryFilter: string;
    typeFilter: string;
    closeHandler(filterName: string): void;
};
type ChipType = {
    label: string;
    value: string;
    closeHandler(filterName: string): void;
};

function Chip({ label, value, closeHandler }: ChipType) {
    return (
        <span className="searchChips__chip">
            {label}: {value}
            <span
                className="searchChips__icon"
                onClick={closeHandler.bind(null, label.toLowerCase())}
            >
                <Close />
            </span>
        </span>
    );
}

export default function SearchChips({
    query,
    industryFilter,
    typeFilter,
    closeHandler,
}: SearchChipsType) {
    return (
        <div className="searchChips__container">
            <div className="searchChips__chips">
                {query && <Chip label="Search" value={query} closeHandler={closeHandler} />}
                {industryFilter && (
                    <Chip label="Industry" value={industryFilter} closeHandler={closeHandler} />
                )}
                {typeFilter && <Chip label="Type" value={typeFilter} closeHandler={closeHandler} />}
            </div>
        </div>
    );
}
