import React from 'react';

function useDefaultValueRef(defaultValue) {
    const ref = React.useRef();
    React.useEffect(() => defaultValue != null && ref && (ref.current.value = defaultValue), []);
    return ref;
}

export function TextField({ defaultValue, label, onChange }) {
    const ref = useDefaultValueRef(defaultValue);
    return <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input ref={ref} onChange={e => onChange(e.currentTarget.value)} type="text" placeholder={label} className="input input-bordered" />
    </div>;
}

export function PasswordField({ label, onChange }) {
    return <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input onChange={e => onChange(e.currentTarget.value)} type="password" placeholder={label} className="input input-bordered" />
    </div>;
}

export function TextAreaField({ defaultValue, label, onChange }) {
    const ref = useDefaultValueRef(defaultValue);
    return <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <textarea ref={ref} rows={4} onChange={e => onChange(e.currentTarget.value)} type="text" placeholder={label} className="textarea textarea-bordered" />
    </div>;
}

export function CheckboxField({ label, onChange }) {
    const ref = useDefaultValueRef(defaultValue);
    return <div className="p-6 card bordered">
        <div className="form-control">
            <label className="cursor-pointer label">
                <span className="label-text">{label}</span>
                <input ref={ref} type="checkbox" onChange={e => onChange(e.currentTarget.value)} className="checkbox" />
            </label>
        </div>
    </div>;
}

export function ButtonToggleField({ label, options, onChange }) {
    const [selected, setSelected] = React.useState();
    React.useEffect(() => onChange(selected), [selected]);

    return <div className="form-control w-full">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <div className="btn-group w-full">
            {options.map((o, i) => (<button
                key={i}
                className={('w-1/' + options.length) + ' btn btn-outline btn-lg ' + (o.value === selected ? 'btn-active' : '')}
                onClick={() => setSelected(o.value)} 
                value={o.value}
            >
                <div className="flex flex-col items-center">
                    <p className="">{o.label}</p>
                    <p className="text-xs -mx-6">{o.subLabel}</p>
                </div>
            </button>))}
        </div>
    </div>;
}

export function SelectField({ label, options, onChange }) {
    return <div className="form-control w-full">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <select onChange={e => onChange(e.currentTarget.value)} className="select select-bordered select-lg w-full">
            {options.map((o, i) => (<option key={i} value={o.value}>{o.label}</option>))}
        </select>
    </div>;
}
