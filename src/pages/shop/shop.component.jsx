import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'; 

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/*
When the router'path and location are successfully matched,
a 'match' object is created. 
This object contains information about the 'URL' and the 'path'
It is used for nested route  like /shop/hats, /shop/jacket ...
*/
class ShopPage extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            convertCollectionsSnapshotToMap(snapshot);
        });
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )  
    }
}
/*
const ShopPage = ({ match }) => {
    console.log('match', match);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}
*/
export default ShopPage;
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