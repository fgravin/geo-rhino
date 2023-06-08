import type BaseLayer from 'ol/layer/Base'
import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import type OlMap from 'ol/Map'
import { ImageWMS, WMTS } from 'ol/source'
import { optionsFromCapabilities, type Options } from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities'
import { get as getProjection, transformExtent } from 'ol/proj'

import type { Layer, LayerId } from '@/stores/map.store.model'
import { PROJECTION_LV95, PROJECTION_WEBMERCATOR, PROJECTION_WGS84 } from './map.service'

function createWmsLayer(layer: Layer): ImageLayer<ImageWMS> {
  const { name, layers, imageType, url, id } = layer
  const olLayer = new ImageLayer({
    properties: {
      label: name,
      id,
    },
    source: new ImageWMS({
      url: url,
      serverType: 'mapserver',
      params: {
        FORMAT: imageType,
        LAYERS: layers,
      },
      ...((url !== undefined && url !== null)
        ? { crossOrigin: 'anonymous' }
        : {}),
    }),
  })

  return olLayer
}

async function createWmtsLayer(layer: Layer): Promise<TileLayer<WMTS>> {
  const { id, name } = layer
  const projection = getProjection(PROJECTION_LV95)!
  let optionsWMTS: Options | null = null

  if (layer.url) {
    const response = await fetch(layer.url)
    const text = await response.text()
    const capabilities = (new WMTSCapabilities()).read(text)

    optionsWMTS = optionsFromCapabilities(capabilities, { layer: layer.name, projection })
  }

  const olLayer = new TileLayer({
    opacity: layer.opacity,
    source: optionsWMTS ? new WMTS(optionsWMTS) : undefined,
    properties: {
      label: name,
      id,
    }
  })

  return olLayer
}

export default function useOpenLayers() {
  async function createLayer(spec: Layer): Promise<ImageLayer<ImageWMS> | TileLayer<WMTS>> {
    let layer
    
    switch (spec.type) {
      case 'WMS':
        layer = createWmsLayer(spec)
        break
      case 'WMTS':
        layer = await createWmtsLayer(spec)
        break
      default:
        throw new Error(`Unrecognized layer type: ${spec.type}`)
    }

    layer.set('metadata', spec.metadata)
    layer.set('queryable_id', spec.id)
    layer.setOpacity(spec.opacity as number)

    if (spec.metadata?.hasOwnProperty('attribution')) {
      const source = layer.getSource()
      source?.setAttributions(spec.metadata.attribution)
    }
    return layer
  }

  async function addLayer(olMap: OlMap, layer: Layer) {
    const baseLayer = await createLayer(layer)
    olMap.addLayer(baseLayer)
  }

  function removeLayer(olMap: OlMap, layerId: LayerId) {
    const layerToRemove = olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)

    if (layerToRemove) {
      olMap.removeLayer(layerToRemove)
    }
  }

  function reorderLayers(olMap: OlMap, layers: Layer[]) {
    const arrayLayers = olMap.getLayers().getArray()
    
    layers.forEach((layer, idx) => {
      const baseLayer = arrayLayers.find(
        mapLayer => mapLayer.get('id') === layer.id
      )
      baseLayer?.setZIndex(idx + 1)
    })
  }

  function setLayerOpacity(olMap: OlMap, layerId: LayerId, opacity: number) {
    const layer = olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)
    if (layer) layer.setOpacity(opacity)
  }

  function applyOnBgLayer(
    olMap: OlMap,
    callbackFunction: (bgLayer: BaseLayer) => void
  ) {
    const mapLayers = olMap.getLayers()
    const bgLayer = mapLayers.getArray().find(layer => layer.getZIndex() === -1)
    if (bgLayer) callbackFunction(bgLayer)
  }
  
  async function setBgLayer(
    olMap: OlMap,
    bgLayer: Layer | null
  ) {
    const mapLayers = olMap.getLayers()
    const currentBgLayerPos = mapLayers
      .getArray()
      .findIndex(layer => layer.getZIndex() === -1)

    let bgBaseLayer: BaseLayer | undefined = undefined
    if (bgLayer) {
      bgBaseLayer = bgBaseLayer ? bgBaseLayer : await createLayer(bgLayer)
    }

    if (currentBgLayerPos >= 0) {
      if (bgBaseLayer) {
        bgBaseLayer.setZIndex(-1)
        mapLayers.setAt(currentBgLayerPos, bgBaseLayer)
      } else {
        mapLayers.removeAt(currentBgLayerPos)
      }
    } else {
      if (bgBaseLayer) {
        bgBaseLayer.setZIndex(-1)
        olMap.addLayer(bgBaseLayer)
      }
    }
  }

  return {
    createLayer,
    addLayer,
    removeLayer,
    reorderLayers,
    setLayerOpacity,
    setBgLayer,
    applyOnBgLayer,
  }
}
