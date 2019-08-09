import styled from 'styled-components'

export const PostContainer = styled.div`
	display: flex;
	flex-direction: row;
	display: flex;
`

export const PostDetailcontainer = styled.div`
	flex: 0 0 30%;
	background-color: ${props => props.theme.appColors.primary};
`

export const PostListContainer = styled.div`
	flex: 0 0 70%;
	background-color: ${props => props.theme.appColors.secondary};
`
