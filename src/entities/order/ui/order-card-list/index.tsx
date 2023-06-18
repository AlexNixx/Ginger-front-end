import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { OrderCardItem } from '../order-card-item'

import { RoutesEnum } from 'shared/const/appRoute'

import { Order } from '../../api/types'

import { motion } from 'framer-motion'

import styles from './OrderCardList.module.scss'

interface OrderCardListProps {
	orders: Order[]
}

export const OrderCardList: FC<OrderCardListProps> = memo(({ orders }) => {
	const OrderAnimation = {
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
		<motion.div className={styles.orderList}>
			{orders.map((order, index) => (
				<motion.div
					key={order._id}
					custom={index}
					variants={OrderAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2, once: true }}
				>
					<Link
						to={`${RoutesEnum.Order}/${order._id}`}
						className={styles.order}
					>
						<OrderCardItem {...order} />
					</Link>
				</motion.div>
			))}
		</motion.div>
	)
})
