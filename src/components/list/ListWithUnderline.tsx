import React, {useEffect} from "react";
import styled from "styled-components";
import COLORS from "@/constants/colors";

const GAP = 12;

interface IColumnProps {
    columns:number;
}
interface IListWithUnderline {
    children: Array<React.ReactNode>,
    initial?: number,
}

const List = styled.div<IColumnProps>`
  width: auto;
  display: grid;
  grid-gap: 0 ${GAP}px;
  padding: 0 0 4px 0;
  position: relative;
  grid-template-columns: ${props=>`repeat(${props.columns}, auto)`};
`;

const Underline = styled.div<IColumnProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  border-radius: 1px;
  background: ${COLORS.orange};
  transition: all 0.4s ease;
  width: 0;
`;


function ListWithUnderline(props: IListWithUnderline) {
    const children = React.Children.toArray(props.children);
    const $underline = React.useRef(null);
    const $list = React.useRef(null);
    const $ini = React.useRef(null);

    const hoverHandler = (index:number, target: any)=>{
        const currentOffset = target.getBoundingClientRect().left;
        const parentOffset = $list.current.getBoundingClientRect().left;

        $underline.current.style.setProperty('width', target.offsetWidth + 'px');
        $underline.current.style.setProperty('left',currentOffset - parentOffset + 'px');
    };
    const blurHandler = () => {
        if (!props.hasOwnProperty('initial')) return;

        hoverHandler(props.initial, $ini.current);
    };

    useEffect(()=>{
        blurHandler();
    });

    return (
        <List columns={children.length} ref={$list} onMouseLeave={blurHandler}>
            {React.Children.map(children,(item:React.ReactElement,index)=>
                React.cloneElement(item, {
                        onMouseEnter: (event: any)=>{hoverHandler(index,event.currentTarget)},
                        ref: props.hasOwnProperty('initial') && index === props.initial
                            ? $ini
                            : null,
                    }
                )
            )}
            <Underline columns={children.length} ref={$underline}/>
        </List>
    )
}

export default ListWithUnderline;