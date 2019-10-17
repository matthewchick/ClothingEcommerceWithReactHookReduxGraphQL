import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collectionpreview';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
        collections.map(({id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        )) 
        }
    </div>
)
const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);
/*
class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };  
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )) 
                }
            </div>
        );
    }
}

export default ShopPage;
*/