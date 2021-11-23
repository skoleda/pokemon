import React from 'react'

import { FrownOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import Text from 'antd/lib/typography/Text'

export const NotFound = () => {
  return (
    <div className="full-page">
      <Card className="shadow-and-radius" style={{ width: '250px' }}>
        <Row justify="center" align="middle" gutter={[0, 32]}>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <FrownOutlined style={{ fontSize: '50px' }} />
          </Col>
          <Text>Page Not Found</Text>
        </Row>
      </Card>
    </div>
  )
}
