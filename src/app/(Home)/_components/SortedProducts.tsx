"use client";
import { convertToSlug } from "@constants";
import ProductCard2 from "@src/components/Cards/ProductCard2";
import { updateCategorySlugId } from "@src/components/config/features/subCategoryId";
import {
  useCategories,
  useProduct,
  useProductsByCategory,
  WooCommerce,
} from "@src/components/lib/woocommerce";
import Carousel from "@src/components/Reusables/Carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export const Loader = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[300px] bg-gray-200 animate-pulse rounded-md"
      />
    ))}
  </div>
);

const SortedProducts = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const router = useRouter();
  
  // WooCommerce API Category
  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  // State to hold products by category
  const [categoryProductsMap, setCategoryProductsMap] = useState<{
    [key: string]: ProductType[];
  }>({});

  // Filter categories with products and limit to 5
  const filteredCategories = categories
    ?.filter((category: CategoryType) => category?.count > 0)
    ?.slice(0, 5) || [];

  useEffect(() => {
    // Fetch products for each filtered category
    const fetchCategoryProducts = async () => {
      try {
        setIsLoading(true);

        if (filteredCategories.length > 0) {
          const productsPromises = filteredCategories.map(
            async (category: CategoryType) => {
              const response = await WooCommerce.get(
                `products?category=${category?.id}&per_page=20`
              );
              return { [category?.id]: response?.data };
            }
          );

          const productsResults = await Promise.all(productsPromises);

          // Update the state with products mapped by category
          const productsMap = productsResults.reduce(
            (acc, result) => ({ ...acc, ...result }),
            {}
          );
          setCategoryProductsMap(productsMap);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categories?.length) {
      fetchCategoryProducts();
    }
  }, [categories]);

  const handleCategoryClick = (name: string, id: number) => {
    const categorySlugId = `${convertToSlug(name) + "-" + id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${convertToSlug(name) + "-" + id}`);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const getCurrentCategoryProducts = () => {
    if (activeTab === 0) {
      // "All Products" - combine all products from all categories
      return Object.values(categoryProductsMap).flat();
    } else {
      // Get products for the selected category
      const selectedCategory = filteredCategories[activeTab - 1];
      return categoryProductsMap[selectedCategory?.id] || [];
    }
  };

  return (
    <div className="mb-8 lg:mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          New Arrivals
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Showing the latest products from our store. Explore a wide range of categories and find your favorites!
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {/* All Products Tab */}
        <button
          onClick={() => handleTabClick(0)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === 0
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All Products
        </button>
        
        {/* Category Tabs */}
        {filteredCategories.map((category: CategoryType, index: number) => (
          <button
            key={category?.id}
            onClick={() => handleTabClick(index + 1)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === index + 1
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            dangerouslySetInnerHTML={{
              __html: category?.name,
            }}
          />
        ))}
      </div>

      {/* Products Display */}
      <div className="px-2">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {getCurrentCategoryProducts()?.map((product: ProductType) => (
              <ProductCard2
                key={product?.id}
                id={product?.id}
                image={product?.images[0]?.src}
                oldAmount={product?.regular_price}
                newAmount={product?.price}
                description={product?.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* See All Link for Current Category */}
      {activeTab > 0 && !isLoading && (
        <div className="text-center mt-8">
          <Link
            href={`/category/${convertToSlug(filteredCategories[activeTab - 1]?.name) + "-" + filteredCategories[activeTab - 1]?.id}`}
            onClick={() =>
              handleCategoryClick(
                filteredCategories[activeTab - 1]?.name,
                filteredCategories[activeTab - 1]?.id
              )
            }
            className="inline-flex items-center px-6 py-2 text-sm font-medium text-black hover:text-primary transition hover:underline underline-offset-4"
          >
            See all in{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: filteredCategories[activeTab - 1]?.name,
              }}
              className="ml-1"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SortedProducts;