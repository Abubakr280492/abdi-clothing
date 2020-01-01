



import React from 'react';
import CollectionPreview  from '../../components/collection-preview/collection-preview.component';
import {selectCollections} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';


const  ShopPage = ({collections}) => ( 
        <div className='shop-page'>
        { collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }

       </div>
);

const mapStateToProps = state => ({
    collections: selectCollections(state)
});

export default connect(mapStateToProps)(ShopPage);