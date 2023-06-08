import type { LayerImageType } from "@/stores/map.store.model"

export interface ConfigModel {
  ogcServers: {}
  themes: ThemeNodeModel[]
  background_layers: ThemeNodeModel[]
  errors: []
  lux_3d: {}
}

export interface OgcServerConfigModel {
  url: string
  urlWfs?: string
  type?: string
  credential?: boolean
  imageType?: LayerImageType
}

export interface OgcServersConfigModel {
  [key: string]: OgcServerConfigModel
}

export type Metadata = Partial<{
  is_queryable: boolean
  is_expanded: boolean
  isExpanded?: boolean
  isLegendExpanded?: boolean
  disclaimer?: string
  display_in_switcher?: boolean
  show_in_mobile?: boolean
  start_opacity?: number
  opacity?: number
  bg_opacity: number
  max_dpi: number
  metadata_id: string
  attribution: string
  legend: boolean
  legend_name: string
  legendImage?: string
  exclusion?: string
  exclusiveGroup?: boolean
  css: string
  bg_layer: string
  linked_layers: string[]
  link_title: string
  page_title: string
  print_img: string
  print_long_txt_de: string
  print_long_txt_en: string
  print_long_txt_fr: string
  print_long_txt_lu: string
  print_short_txt_de: string
  print_short_txt_en: string
  print_short_txt_fr: string
  print_short_txt_lu: string
  print_scales: string[]
  fake_scales: string[]
  resolutions: string[]
  start_layers: string[]
  start_x: number
  start_y: number
  start_zoom: number
  ol3d_defaultlayer: boolean
  ol3d_options: {
    heightOffset: number
  }
  ol3d_type: string
  ogc_info_format: string
  ogc_info_srs: string
  ogc_query_layers: string[]
  hasRetina?: boolean
  thumbnail?: string
  minResolution?: number
  minQueryResolution?: number
  maxResolution?: number
  maxQueryResolution?: number
  minResolutionHint?: number
  metadataUrl?: string
  timeAttribute?: string
  ogcServer?: string
  queryLayers?: string
  isChecked?: boolean
  printLayers?: string
  directedFilterAttributes?: string[]
}>

export type LayerType = 'WMS' | 'WFS' | 'WMTS' | '3D'

export interface ThemeNodeModel {
  id: number
  name: string
  icon?: string
  layers?: string
  url?: string
  ogcServer?: string
  type?: LayerType
  imageType?: string
  metadata?: Metadata
  dimensions?: {}
  style?: string
  matrixSet?: string
  layer?: string
  children?: ThemeNodeModel[]
  mixed?: boolean
  minResolutionHint?: number
  maxResolutionHint?: number
  childLayers?: {
    name: string
    minResolutionHint?: number
    maxResolutionHint?: number
    queryable?: boolean
  }[]
  functionalities?: {}
  time?: {
    maxValue?: string
    minValue?: string
    widget?: string
  }
}
