import * as React from 'react'
import { container } from '../theme'

import {  ShopItem, Container, Subtitle } from '../components'

const Shop = ({ breakpoint }) => {
	return (
		<div>
			{breakpoint === 'large' && (
				<div
					style={{...container('full'), flexDirection: 'row', flexWrap: 'wrap', gap: '3em'}}
				>
				<ShopItem
					name="French Roast"
					description="A dark roast with a bold flavor"
					price={12.99}
					large intractable
				/>
				<ShopItem
					name="Colombian"
					description="A medium roast with a smooth flavor"
					price={14.99}
					large intractable
				/>
				<ShopItem
					name="Breakfast Blend"
					description="A light roast with a subtle flavor"
					price={12.99}
					large intractable
				/>
				<ShopItem
					name="House Blend"
					description="A medium roast with a smooth flavor"
					price={14.99}
					large intractable
				/>
				</div>
			)}
			{breakpoint !== 'large' && (
				<div
					style={{...container('full'), flexDirection: 'column', gap: '1em', overflowY: 'scroll'}}
				>
				<Container size='large' style={{flexShrink: 0}} />
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
			)}
    </div>
	)
}

export default Shop

export { Head } from '../layouts/index'