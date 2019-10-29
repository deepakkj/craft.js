import React from 'react';
import { useNode } from 'craftjs';
import { EditorSection } from '../components/EditorSection';

export const Text = ({ children} : any) => {
  const {connectTarget} = useNode();
  return connectTarget(
    <h2>{children}</h2>
  )
}

Text.related = {
  toolbar: () => {
    return (
      <React.Fragment>
        <EditorSection title="Font">

        </EditorSection>
      </React.Fragment>
    )
  }
}