import * as React from 'react'
import { container } from '../theme'

import { ShopItem, Container, Subtitle, Text } from '../components'

const Shop = ({ breakpoint }) => {
	return (
		<div style={container('full')}>
			{breakpoint === 'large' && (
				<div
					style={{...container('full'), height: '80%', flexDirection: 'row', flexWrap: 'wrap', gap: '3em'}}
				>
				<Container size='medium'>
					<Subtitle> Explore </Subtitle>
					<Text>  Our curated coffee beans from around the world. </Text>
				</Container>
				<ShopItem
					name="Colombian"
					description="A medium roast with a rounded nutty flavor. Great coffee for beginners or any occasion."
					price={11.99}
					large intractable
				/>
				<ShopItem
					name="Colombian Decaf"
					description="Colombian beans decaffeinated before roasting to ensure the best flavor."
					price={11.99}
					large intractable
				/>
				<ShopItem
					name="Yirgacheffe"
					description="From the tropical highlands of Ethiopia, this coffee has a fruity herbal flavor with a hints of chocolate."
					price={12.99}
					large intractable
				/>
				<ShopItem
					name="Sumatran Coffee"
					description="A bold flavor with earthy undertones and hints of spice. Great for stronger brews."
					price={12.99}
					large intractable
				/>
				<ShopItem
					name="House Blend"
					description="A blend of our favorite coffees from around the world roasted and grounded to perfection."
					price={14.99}
					large intractable premium
				/>
				<ShopItem
					name="Kona Coffee"
					description="100% Kona Coffee straight from Hawaii. This rare variety has a caramel-like flavor with a hint of spice."
					price={16.99}
					large intractable premium
				/>
				</div>
			)}
			{breakpoint !== 'large' && (
				<div
					style={{display: 'flex', height: '80%', flexDirection: 'column', gap: '1em', overflowY: 'scroll'}}
				>
				<ShopItem
					name="Colombian"
					description="A medium roast with a rounded nutty flavor. Great coffee for beginners or any occasion."
					price={11.99}
				/>
				<ShopItem
					name="Colombian Decaf"
					description="Colombian beans decaffeinated before roasting to ensure the best flavor."
					price={11.99}
				/>
				<ShopItem
					name="Yirgacheffe"
					description="From the tropical highlands of Ethiopia, this coffee has a fruity herbal flavor with a hints of chocolate."
					price={12.99}
				/>
				<ShopItem
					name="Sumatran Coffee"
					description="A bold flavor with earthy undertones and hints of spice. Great for stronger brews."
					price={12.99}
				/>
				<ShopItem
					name="House Blend"
					description="A blend of our favorite coffees from around the world roasted and grounded to perfection."
					price={14.99}
					premium
				/>
				<ShopItem
					name="Kona Coffee"
					description="100% Kona Coffee straight from Hawaii. This rare variety has a caramel-like flavor with a hint of spice."
					price={16.99}
					premium
				/>
				</div>
			)}
    </div>
	)
}

export default Shop

export { Head } from '../layouts/index'