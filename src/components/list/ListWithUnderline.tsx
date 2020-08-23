import React, {useEffect} from "react";
import styled from "styled-components";
import COLORS from "@/constants/colors";

const GAP = 8;

const List = styled.div<{columns:number}>`
  width: auto;
  display: grid;
  grid-gap: 0 ${GAP}px;
  padding: 0 0 4px 0;
  position: relative;
  grid-template-columns: ${props=>`repeat(${props.columns}, minmax(auto,1fr))`};
`;

const Underline = styled.div<{columns:number}>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  border-radius: 1px;
  background: ${COLORS.orange};
  transition: all 0.4s ease;
  width: ${props=> 1 / props.columns * 100 + '%'};
`;


interface IListWithUnderline {
    children: Array<React.ReactNode>,
}

function ListWithUnderline(props: IListWithUnderline) {
    const children = React.Children.toArray(props.children);
    const $underline = React.useRef(null);
    const $list = React.useRef(null);

    const hoverHandler = (index:number, e: React.SyntheticEvent)=>{
        const currentOffset = e.currentTarget.getBoundingClientRect().left;
        const parentOffset = $list.current.getBoundingClientRect().left;

        $underline.current.style.setProperty('left',currentOffset - parentOffset + 'px');
    };

    return (
        <List columns={children.length} ref={$list}>
            {React.Children.map(children,(item:React.ReactElement,index)=>
                React.cloneElement(item, {
                        onMouseEnter: (e: any)=>{hoverHandler(index,e)}
                    }
                )
            )}
            <Underline columns={children.length} ref={$underline}/>
        </List>
    )
}

export default ListWithUnderline;