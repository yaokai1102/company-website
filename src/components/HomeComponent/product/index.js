import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import './styles.scss'
import productIcon1 from '../../../assets/images/productIcon1.png'
import productIcon2 from '../../../assets/images/productIcon2.png'
import productIcon3 from '../../../assets/images/productIcon3.png'

export default function Product() {
    return (
        <Box className='root'>
            <p className='product-title'>product</p>
            <p className='product-introduce'>To provide customers with comprehensive products and solutions around "Connected secure data"</p>
            <Box className='product-root'>
                <Box className='product-box'>
                    <a href=''>
                    <img src={productIcon1} />
                    <p className='product-p'>connect</p>
                    <Box className='hover'>
                    <p style={{marginLeft:'20%'}}>Provide flexible</p><br/>
                    <p>Intelligent network access services</p>
                    
                </Box>
                </a>
                </Box>
                <Box className='product-box'>
                    <a href=''>
                    <img src={productIcon2} />
                    <p className='product-p'>safety</p>
                    <Box className='hover'>
                    <p style={{marginLeft:'20%'}}>Provide flexible</p><br/>
                    <p>Intelligent network access services</p>
                </Box>
                </a>
                </Box>
                <Box className='product-box'>
                    <a href=''>
                    <img src={productIcon3} />
                    <p className='product-p'>information</p>
                    <Box className='hover'>
                    <p style={{marginLeft:'20%'}}>Provide flexible</p><br/>
                    <p>Intelligent network access services</p>
                </Box>
                </a>
                </Box>
            </Box>
        </Box>
    )
}
