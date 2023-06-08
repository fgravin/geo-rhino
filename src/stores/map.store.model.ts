import type { LayerType, Metadata } from '@/services/themes/themes/themes.model'

export enum LayerImageType {
  PNG = 'image/png',
  JPG = 'image/jpeg',
}

export type LayerId = number | string

export interface Layer {
  id: LayerId
  name: string
  layers: string
  url?: string
  urlWfs?: string
  type: LayerType
  imageType: string
  metadata?: Metadata
  dimensions?: {}
  style?: string
  opacity?: number
  previousOpacity?: number
  ogcServer?: string
}

export interface MapContext {
  layers?: Layer[]
}

export interface LayerComparison {
  layer: Layer
  position: number
}
