/**
 * Core Layout component
 * Wrap the root component with layout UI components
 * e.g Footer, Modal, Alert...
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */


import * as React from 'react'

const CoreLayout = (props:any) => {

	return(
		<>
			{props.children}
		</>
	)
}

export default CoreLayout