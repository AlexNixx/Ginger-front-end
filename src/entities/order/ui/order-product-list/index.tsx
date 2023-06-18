import { FC } from 'react'

import { OrderProductItem } from '../order-product-item'

import { OrderItem } from '../../api/types'

import { motion } from 'framer-motion'

import styles from './OrderProductList.module.scss'

interface OrderProductListProps {
	orderItems: OrderItem[]
}

export const OrderProductList: FC<OrderProductListProps> = ({ orderItems }) => {
	const ProductsAnimation = {
		hidden: {
			y: -50,
			opacity: 0
		},
		visible: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.1 }
		})
	}

	return (
		<div className={styles.productList}>
			{orderItems.map((productItem, index) => (
				<motion.div
					key={productItem._id}
					custom={index}
					variants={ProductsAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
				>
					<OrderProductItem
						image={productItem.image}
						price={productItem.price}
						title={productItem.title}
						qty={productItem.qty}
					/>
				</motion.div>
			))}
		</div>
	)
}
