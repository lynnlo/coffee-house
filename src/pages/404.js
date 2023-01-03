import * as React from 'react';
import { container } from '../theme';

import { Title, Text } from '../components';

const NotFound = () => {
	return (
    <div style={container('full')}>
      <div style={container('full')}>
        <Title>Not Found!</Title>
        <hr style={{width: '25%'}} />
        <Text>
          This page doesn't exist.
        </Text> 
      </div>
    </div>
	)
}

export default NotFound
export const Head = () => <title>Not Found</title>