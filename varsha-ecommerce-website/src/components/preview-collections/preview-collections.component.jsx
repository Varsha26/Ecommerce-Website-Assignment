import React from 'react'
import { CollectionItems } from '../collection-items/collection-items.component';
import './preview-collections.component.scss'
const PreviewCollections = ({ title,items }) => (
       
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            
            <div className='preview'>
                {
                    items.filter((item,idx) => idx < 4).map(({ id, ...itemProps }) => (
                        <CollectionItems key={id} { ...itemProps } />
                    )) 
                }
            </div>
        </div>
    
);
export  default PreviewCollections;
