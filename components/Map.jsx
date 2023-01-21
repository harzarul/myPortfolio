
'use client';

import React from 'react'
import GoogleMapReact from 'google-map-react';
import { ResponsiveGeoMap, ResponsiveChoropleth, } from '@nivo/geo';
import { MapData as data } from "../constant";
import { geoFeatures } from '../constant/geoData';


const Map = () => {

  return (
    <ResponsiveChoropleth 
      data={data}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="greys"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="orthographic"
        projectionScale={120}
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 260, 0, 0 ]}
        enableGraticule={true}
        isInteractive={false}
        graticuleLineWidth={.5}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 99,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'MYS'
                },
                id: 'lines'
            },
        ]}
        legends={[]}
    />
  )
}

export default Map