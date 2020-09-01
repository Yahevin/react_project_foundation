import React, { useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring';

import {ColorBox, ColorGrid, ColorGrid__item} from "@/pages/SpringPreview/styled/ColorGrid";
import data from '@/pages/SpringPreview/constants/ColorBlocks';
import IToggle from "@/interfaces/IToggle";

function ChainAndTrail({isOpen}:IToggle) {
    const springRef = useRef();

    const {size, background}:any = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: '20%', background: 'hotpink' },
        to: { size: isOpen ? '100%' : '20%', background: isOpen ? 'white' : 'hotpink' }
    });

    const transRef = useRef();
    const transitions = useTransition(isOpen ? data : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 400 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    });

    useChain(isOpen ? [springRef, transRef] : [transRef, springRef], [0, isOpen ? 0.1 : 0.6]);

    return (
        <ColorBox>
            <ColorGrid style={{ background, width: size, height: size }}>
                {transitions.map(({ item, key, props }) => (
                    <ColorGrid__item key={key} style={{ ...props, background: item.css }} />
                ))}
            </ColorGrid>
        </ColorBox>
    )
}

export default ChainAndTrail;