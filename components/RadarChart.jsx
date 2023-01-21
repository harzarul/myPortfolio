
'use client';
import { ResponsiveRadar } from "@nivo/radar";
import { RadarData as data } from "../constant";

export const theme = {
  axis: {
    ticks: {
      text:{
        fill: "#ffffcc"
      }
    }
  }
}

const RadarChart = () => {
  return (
    <ResponsiveRadar
        data={data}
        keys={[ 'Engineer', 'Realtor', 'Trader' ]}
        indexBy="skill"
        valueFormat=">-.2f"
        margin={{ top: 60, right: 80, bottom: 5, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLevels={6}
        gridShape="linear"
        gridLabelOffset={10}
        enableDots={false}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'set2' }}
        fillOpacity={0.45}
        blendMode="difference"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top',
                direction: 'row',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 10,
                itemTextColor: '#ffffcc',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#ffff1a'
                        }
                    }
                ]
            }
        ]}
        theme={theme}
    />
  )
}

export default RadarChart