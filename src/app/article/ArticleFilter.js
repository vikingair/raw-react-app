// @flow

import React, { useState, useCallback } from 'react';
import { Icon } from '../../icons/icon';
import { StoreState } from '../Store';

type InputOnChangeHandler = (SyntheticInputEvent<HTMLInputElement>) => void;
type FormSubmitHandler = (SyntheticEvent<HTMLFormElement>) => void;

export const ArticleFilter = () => {
    const [value, setValue] = useState<string>('');

    const onChange = useCallback<InputOnChangeHandler>(event => {
        event.preventDefault();
        setValue(event.target.value);
    }, []);

    const submit = useCallback<FormSubmitHandler>(
        event => {
            event.preventDefault();
            StoreState.set({ filter: value });
        },
        [value]
    );

    return (
        <div className="article-filter">
            <form onSubmit={submit}>
                <input type="text" value={value} onChange={onChange} placeholder="Filter for..." />
                <button>
                    <Icon.Search />
                </button>
            </form>
        </div>
    );
};
