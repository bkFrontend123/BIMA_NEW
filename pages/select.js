import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

export default function Select() {
    const [options, setOptions] = useState([
        {
            cat: 'Group 1',
            key: 'Option 1',
            selected: false
        },
        {
            cat: 'Group 1',
            key: 'Option 2',
            selected: false
        },
        {
            cat: 'Group 1',
            key: 'Option 3',
            selected: false
        },
        {
            cat: 'Group 2',
            key: 'Option 4',
            selected: false
        },
        {
            cat: 'Group 2',
            key: 'Option 5',
            selected: false
        },
        {
            cat: 'Group 2',
            key: 'Option 6',
            selected: false
        },
        {
            cat: 'Group 2',
            key: 'Option 7',
            selected: false
        }
    ]);

    return (
        <>
            <Multiselect
                displayValue="key"
                groupBy="cat"
                onKeyPressFn={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                onSearch={function noRefCheck(){}}
                onSelect={function noRefCheck(){}}
                options={options}
                showCheckbox
                />
        </>
    );
}
