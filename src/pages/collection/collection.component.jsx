import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    )
}
// ownProps represents the props of CollectionPage
// use currying in javascript
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);

/* currying
function add (a, b) {
  return a + b;
}

add(3, 4); // returns 7
function add (a) {
  return function (b) {
    return a + b;
  }
}
add(3)(4);
var add3 = add(3);
add3(4);
*/