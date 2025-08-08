"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { RiShoppingBagFill } from "react-icons/ri";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";

interface ProductCard2Props {
	id: string | number;
	image: string;
	oldAmount?: string;
	newAmount: string;
	description: string;
	boxShadow?: boolean;
}

const ProductCard2 = ({
	id,
	image,
	oldAmount,
	newAmount,
	description,
	boxShadow,
}: ProductCard2Props) => {
	const router = useRouter();
	const { addItem, removeItem, updateItem, getItem } = useCart();
	const [count, setCount] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const ID = id.toString();
	const cartItem = getItem(ID);
	const cartItemCount = cartItem ? cartItem.quantity : 0;
	const NewAmount = parseInt(newAmount);
	const OldAmount = oldAmount ? parseInt(oldAmount) : null;

	const handleCartClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCount(count + 1);
		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: count,
			image: image,
		});
	};

	const handleMinusCartClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		const newCount = Math.max(count - 1, 0);

		if (newCount === 0) {
			removeItem(ID);
		} else {
			updateItem(ID, {
				quantity: newCount,
			});
		}
		setCount(newCount);
	};

	const handlePlusCartClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		const newCount = count + 1;

		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: newCount,
			image: image,
		});
		setCount(newCount);
	};

	const slugDesc = convertToSlug(description);

	return (
		<div
			className={`group flex flex-col bg-white rounded-lg overflow-hidden min-w-[200px] md:min-w-[240px] lg:min-w-[280px] h-[320px] sm:h-[380px] lg:h-[420px] cursor-pointer transition-all duration-300 ease-in-out ${
				boxShadow 
					? "shadow-lg" 
					: "border border-gray-200 hover:border-gray-300"
			} hover:shadow-xl hover:scale-[1.02] relative`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Image Container */}
			<div className='relative flex-[0.7] w-full overflow-hidden bg-gray-50'>
				<Link href={`/home-item/product/${slugDesc}-${id}`} className='block w-full h-full'>
					<Picture
						src={image || ""}
						alt={`${description}-image`}
						className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
						loading='eager'
					/>
				</Link>
				
				{/* Discount Badge */}
				{OldAmount && OldAmount > NewAmount && (
					<div className='absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
						-{Math.round(((OldAmount - NewAmount) / OldAmount) * 100)}%
					</div>
				)}

				{/* Quick Add to Cart Button - Shows on Hover */}
				{cartItemCount === 0 && (
					<button
						onClick={handleCartClick}
						className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
							isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
						} hover:bg-gray-800`}
					>
						Quick Add
					</button>
				)}
			</div>

			{/* Content Container */}
			<div className='flex-[0.3] flex flex-col justify-between p-4'>
				{/* Product Title */}
				<Link
					href={`/home-item/product/${slugDesc}-${id}`}
					dangerouslySetInnerHTML={{ __html: description }}
					className='text-sm md:text-base font-medium text-gray-800 line-clamp-2 leading-5 mb-2 hover:text-primary transition-colors'
				/>

				{/* Price and Cart Section */}
				<div className='flex items-center justify-between'>
					<div className='flex flex-col'>
						{/* Current Price */}
						<div className='text-lg md:text-xl font-bold text-gray-900'>
							{NewAmount ? <FormatMoney2 value={NewAmount} /> : "Out of Stock"}
						</div>
						
						{/* Old Price */}
						{OldAmount && OldAmount > NewAmount && (
							<div className='text-sm text-gray-500 line-through'>
								<FormatMoney2 value={OldAmount} />
							</div>
						)}
					</div>

					{/* Cart Controls */}
					<div className='flex items-center'>
						{cartItemCount === 0 ? (
							<button
								onClick={handleCartClick}
								className='bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors shadow-md'
							>
								<RiShoppingBagFill className='text-lg' />
							</button>
						) : (
							<div className='flex items-center gap-2 bg-primary text-white rounded-full px-3 py-1'>
								<button
									onClick={handleMinusCartClick}
									className='hover:bg-white/20 rounded-full p-1 transition-colors'
								>
									<AiOutlineMinus className='text-sm' />
								</button>
								<span className='font-medium text-sm min-w-[20px] text-center'>
									{cartItemCount}
								</span>
								<button
									onClick={handlePlusCartClick}
									className='hover:bg-white/20 rounded-full p-1 transition-colors'
								>
									<AiOutlinePlus className='text-sm' />
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard2;