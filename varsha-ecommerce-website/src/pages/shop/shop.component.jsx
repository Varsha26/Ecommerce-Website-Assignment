import React, { Component } from 'react'
import PreviewCollections from '../../components/preview-collections/preview-collections.component';
import ShopDate from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopDate
        }
    }
    render() {
        const { collections } = this.state;
        return (
          <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
              <PreviewCollections key={id} {...otherCollectionProps} />
            ))}
          </div>
        );
      }
    }
    
    
    export default ShopPage;
