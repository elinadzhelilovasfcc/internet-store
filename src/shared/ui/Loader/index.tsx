import React from 'react'
import { Loading } from '@nextui-org/react'
import { ILoader } from './model'

/**
 * A reusable React component that displays a loading spinner when `isLoading` is true.
 */
const RLoader: React.FC<ILoader> = ({
    isLoading, // A boolean indicating whether or not to display the loading spinner
    ...restOfProps // Additional props to pass to the `Loading` component
}) => {
  return (
    <Loading {...restOfProps}/>
  )
}

export default RLoader