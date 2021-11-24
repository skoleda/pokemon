import { Row, Card } from 'antd'
import Text from 'antd/lib/typography/Text'
import styled from 'styled-components'

export const LinkText = styled(Text)`
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`

export const TypePokemonText = styled(Text)`
    color: #1890ff;
`

export const CommonCard = styled(Card)`
  width: 75%;
  text-align: center;
`

export const CommonRow = styled(Row)`
  width: 60vw;
  padding: 24px;
`

export const RowForm = styled(Row)`
  background-color: #fff;
  border-radius: 8px;
  max-width: 600px;
  padding: 32px;
`
