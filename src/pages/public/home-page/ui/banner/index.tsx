import { useNavigate } from 'react-router-dom'
import { Button } from 'shared/ui/button'
import { FC } from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import bannerPhoto from 'shared/assets/images/banner-photo.jpg'
import bannerPhotoBlur from 'shared/assets/images/banner-photo-blur.jpg'

import { motion } from 'framer-motion'

import styles from './Banner.module.scss'

interface BannerProps {
	navigateCatalogHandler: () => void
}

const Banner: FC<BannerProps> = ({ navigateCatalogHandler }) => {
	return (
		<div className={styles.HomeBanner}>
			<LazyLoadImage
				src={bannerPhoto}
				alt='banner'
				className={styles.img}
				width={'100%'}
				effect='blur'
				placeholderSrc={bannerPhotoBlur}
			/>
			<div className={styles.content}>
				<motion.h1
					className={styles.title}
					initial={{ x: -400, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.65 }}
				>
					Let's search for <br /> what you need
				</motion.h1>
				<motion.div
					initial={{ x: -400, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Button primary onClick={navigateCatalogHandler}>
						Go to Catalog <AiOutlineArrowRight />
					</Button>
				</motion.div>
			</div>
		</div>
	)
}

export { Banner }
