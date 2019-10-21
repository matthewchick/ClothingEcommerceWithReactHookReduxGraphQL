import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLCECTIONS,
    payload: collectionsMap
})