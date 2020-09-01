import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring';

import {ColorBox, ColorGrid, ColorGrid__item} from "@/pages/SpringPreview/styled/ColorGrid";
import data from '@/pages/SpringPreview/constants/ColorBlocks';


function ChainAndTrail() {
    const [open, set] = useState(false);

    const springRef = useRef();

    const {size, background}:any = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: '20%', background: 'hotpink' },
        to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
    });

    const transRef = useRef();
    const transitions = useTransition(open ? data : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 400 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    });

    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

    return (
        <ColorBox>
            <ColorGrid style={{ background, width: size, height: size }} onClick={() => set(open => !open)}>
                {transitions.map(({ item, key, props }) => (
                    <ColorGrid__item key={key} style={{ ...props, background: item.css }} />
                ))}
            </ColorGrid>
        </ColorBox>
    )
}

export default ChainAndTrail;