import React, { useState, useRef, useEffect, useCallback } from "react";
import {LayerOptions} from "../../interfaces";
import { useManager } from "craftjs";
import styled from "styled-components";
import Eye from './eye.svg'
import Arrow from './arrow.svg'
import ContentEditable from "react-contenteditable";
import {useLayer} from "../../layers/useLayer";
import { EditableLayerName } from "./EditableLayerName";

const StyledDiv = styled.div<{ depth: number, active: boolean }>`
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  background: ${props => props.active ? '#6794fd' : 'transparent' };
  color: ${props => props.active ? '#fff' : '#2d2d2d' };
  svg {
    fill: ${props => props.active ? '#fff' : '#808184' };
    margin-top:2px;
  }
  .inner {
    flex:1;
    > div {
      padding: 0px;
      flex:1;
      display:flex;
      margin-left: ${props => props.depth * 10}px;
     align-items: center;
     div.layer-name {
          flex:1;
          h2 { 
            font-size:15px;
            line-height: 26px;
          }
       }
    }
  }
`;

const Expand = styled.a<{expanded: boolean}>`
width: 20px;
height: 20px;
display:block;
transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
transform: rotate(${props => props.expanded ? 180 : 0}deg);
opacity:0.7;
cursor:pointer;
transform-origin: 60% center;

`

const Hide = styled.a<{active: boolean; isHidden: boolean}>`
  width: 14px;
  height:14px;
  margin-right:10px;
  position:relative;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor:pointer;
  
  svg {
    width: 100%;
    height: 100%;
    object-fit:contain;
    opacity:  ${props => props.isHidden ? 0.2 : 1};
    
  }
  &:after {
    content: " ";
    width: 2px;
    height: ${props => props.isHidden ? 100 : 0}%;
    position: absolute;
    left: 2px;
    top: 3px;
    background: ${props => props.active ? "#fff" : "#808184"};
    transform: rotate(-45deg);
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: 0% 0%;
    opacity:  ${props => props.isHidden ? 0.4 : 1};
  }
`;

export const DefaultLayerHeader: React.FC = () => {

  const { id, hover, depth, expanded, children, connectDrag, connectLayerHeader, actions: {toggleLayer}} = useLayer((layer) => {
    return {
      expanded: layer.expanded,
      hover: layer.event.hover
    }
  });


  const { hidden, actions, active } = useManager((state) => ({
    hidden: state.nodes[id] && state.nodes[id].data.hidden,
    active:  state.events.active == id
  }));  
  

  return (
    <StyledDiv active={active} ref={connectDrag} depth={depth}>
      <Hide active={active} isHidden={hidden} onClick={() => actions.setHidden(id, !hidden)}>
        <Eye />
      </Hide>
      <div className="inner">
        <div ref={connectLayerHeader}>
          <div className='layer-name'>
            <EditableLayerName />
          </div>
          <div>
            {(children && children.length) ? (
              <Expand expanded={expanded} onClick={() => toggleLayer()}>
                <Arrow />
              </Expand>
            ) : null}
          </div>
        </div>
        </div>
    </StyledDiv>
  )
}