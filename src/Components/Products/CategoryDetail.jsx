
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductMainCategory from './ProductMainCategory';
import { useCompitationContext } from '../../Context/CompitationContext';
import { Grid } from '@mui/material';
import ProductPost from './ProductPost';
import Header from '../Header';
import ImageCarousel from '../ImageCarousel';

const CategoryDetail = () => {
    const { name } = useParams();
    const { getProductByCayegoryId } = useCompitationContext();
    const [product, setProducts] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await getProductByCayegoryId(name);
            setProducts(fetchedProduct );
        };

        fetchProduct();
    }, [name, getProductByCayegoryId]);

    console.log(product?.data, "productbycategoryproductbycategory");

    return (
        <>
                 <ImageCarousel />
            <div style={{ marginTop: '16px' }}>
                <ProductMainCategory />
                <Grid container spacing={2} justifyContent="center">
                    {Array.isArray(product?.data) &&
                        product.data.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={3}>
                                <ProductPost product={product} />
                            </Grid>
                        ))}
                </Grid>
            </div>
        </>
    );
}

export default CategoryDetail;
