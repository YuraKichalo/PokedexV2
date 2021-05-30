import React from 'react'
import { View } from 'react-native'
import { ChildrenSpacingProps } from './ChildrenSpacingProps'

export const ChildrenSpacing = (props: ChildrenSpacingProps) => (
  <>
    {React.Children.map(props.children, (child, index) => (
      <>
        {child}
        {React.Children.count(props.children) !== index + 1 && (
          <View
            key={index}
            style={{
              height: props.spacing,
              width: props.spacing
            }}
          />
        )}
      </>
    ))}
  </>
)
