import React, { createContext, useContext } from 'react'

export const createCompoundsContext = (componentName) => {
  const WrapperContext = createContext()
  
  const WrapperProvider = WrapperContext.Provider

  const useWrapperOfCompounds = (compoundName = 'Compound') => {
    const context = useContext(WrapperContext)
    if (!context) throw new Error(`${compoundName} should be used within the scope of a ${componentName} component.`)
    return context
  }

  const useValidateCompounds = (Component, children) => {
    const { fromEntries, entries, values } = Object
    const excludedProps = ['propTypes', 'defaultProps']
    const CompoundsObj = fromEntries(entries(Component).filter(prop => !excludedProps.includes(prop[0])))
    // console.dir(React.Children.toArray(children))
    for (const child of React.Children.toArray(children)) {
      if (!(React.isValidElement(child) && values(CompoundsObj).includes(child.type))) {
        // const componentName = Component?.name || 'Component'
        const errorChild = child?.type?.name || child?.type || child
        throw new Error(`${componentName} only accepts its compound components, unexpected found "${errorChild}".`)
      }
    }
  }

  return {
    WrapperProvider,
    useWrapperOfCompounds,
    useValidateCompounds,
  }
}