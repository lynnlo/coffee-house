import * as React from 'react'
import { container } from '../theme'

import {  ShopItem } from '../components'

const Shop = ({ breakpoint }) => {
	return (
		<div>
			<div
				style={{...container('full'), flexDirection: 'row', flexWrap: 'wrap', gap: '3em'}}
			>
			<ShopItem
				name="French Roast"
				description="A dark roast with a bold flavor"
				price={12.99}
			/>
			<ShopItem
				name="Colombian"
				description="A medium roast with a smooth flavor"
				price={14.99}
			/>
			<ShopItem
				name="Breakfast Blend"
				description="A light roast with a subtle flavor"
				price={12.99}
			/>
			<ShopItem
				name="House Blend"
				description="A medium roast with a smooth flavor"
				price={14.99}
			/>
			</div>
    </div>
	)
}

export default Shop

export { Head } from '../layouts/index'