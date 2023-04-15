import { css } from '@emotion/css'
import { colors } from '../utils/colors'

export const navBar = css`
  display: flex;
  column-gap: 20px;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  padding: 20px;
  background-color: ${colors.secondary};
  border-bottom: 1px solid gray;
  & > :not(:last-child) {
    padding-right: 20px;
    border-right: 1px solid ${colors.link};
  }
`