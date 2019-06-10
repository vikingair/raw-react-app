import React from 'react';
import Icons from './icon-path.json';

type IconProps = { className?: string };

const _Icon = (symbol: keyof typeof Icons, { className }: IconProps = {}, width: number = 512) => (
    <svg className={className ? className + ' icon' : 'icon'} viewBox={`0 0 ${width} 512`}>
        <path fill="currentColor" d={Icons[symbol]} />
    </svg>
);

export const Icon = {
    Close: (props?: IconProps) => _Icon('CLOSE', props),
    Phone: (props?: IconProps) => _Icon('PHONE', props, 330),
    Search: (props?: IconProps) => _Icon('SEARCH', props, 512),
    Spinner: (props?: IconProps) => _Icon('SPINNER', props),
};
