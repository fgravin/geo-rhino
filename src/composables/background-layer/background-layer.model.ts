export interface IBackgroundLayer {
  name: string
  id: number
}
export interface BgLayerDefaultsType {
  [theme: string]: number
}

export const BLANK_BACKGROUNDLAYER: IBackgroundLayer = {
  name: 'OSM map WMS',
  id: 175
}
