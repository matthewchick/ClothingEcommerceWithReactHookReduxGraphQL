import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
//import { updateCollections } from '../../redux/shop/shop.actions';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);
/*
When the router'path and location are successfully matched,
a 'match' object is created. 
This object contains information about the 'URL' and the 'path'
It is used for nested route  like /shop/hats, /shop/jacket ...
*/
class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionsLoaded } = this.props;
        //const { loading } = this.state;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} 
            component = { CollectionsOverviewContainer } />
            <Route path={ `${match.path}/:collectionId`} 
            component = { CollectionPageContainer }/>
            </div>
        )  
    }
    /*
    state = {    //shorthand state
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // method 3: use promise
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log('collectionsMap',collectionsMap);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        });
        
        // method 2 fetch('https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/collections')
        fetch('https://firestore.googleapis.com/v1/projects/crwn-db-b0fa7/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log('collections',collections));
        
        
        // method 1
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log('collectionsMap',collectionsMap);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        });
        
    } 
    render() {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
        //const { loading } = this.state;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} 
            render={(props)=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props)=>
                <CollectionPageWithSpinner 
                isLoading={!isCollectionsLoaded} {...props} />} />
            </div>
        )  
    } */

};

/*
const mapStateToProps = createStructuredSelector({
   //isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});
*/
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect (null, mapDispatchToProps)(ShopPage);
/*
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect (null, mapDispatchToProps)(ShopPage);
*/
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