import ModuleName from '../../modules/commons/ModuleName'

export type LoadingStatus = 'fetching' | 'saving' | undefined

type LoadingState = {[key in ModuleName]: LoadingStatus}

export default LoadingState
